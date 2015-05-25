<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Disponibilite;
use EB\PretControleurBundle\Entity\Controleur;
use EB\PretControleurBundle\Entity\Centre;
use EB\PretControleurBundle\Entity\lstControleurWithNbDispo;
use EB\UserBundle\Entity\User;
use EB\PretControleurBundle\Form\DisponibiliteType;
use EB\PretControleurBundle\Form\PriseDisponibiliteType;
use EB\PretControleurBundle\Form\ReponseDisponibiliteType;
use EB\PretControleurBundle\Form\AnnulerDisponibiliteType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use \DateTime;

class DisponibiliteController extends Controller
{
    /**
     * @ParamConverter("controleur", options={"mapping": {"idControleur": "id"}})
     */
    public function indexAction(Request $request, Controleur $controleur, $page = 1)
    {
        $em = $this->getDoctrine()->getManager();
        //calcul le nombre de controleur par departement (ne prd pas en compte les controleur du responsable), pr la pagination
        $dispo_count = $this->getDoctrine()
                            ->getRepository('EBPretControleurBundle:Disponibilite')
                            ->countDisponibilite($controleur);

        $maxDispo = $this->container->getParameter('max_dispo_par_page');

        $pagination = array(
            'page'         => $page,
            'route'        => 'eb_pret_controleur_Disponibilite',
            'pages_count'  => ceil($dispo_count / $maxDispo),
            'route_params' => array('idControleur' => $controleur->getId(),'page' => $page)
        );

        //liste pour la pagination
        $listeDispo = $this->getDoctrine()
                           ->getRepository('EBPretControleurBundle:Disponibilite')
                           ->LstDispoControleurByUser($controleur, $page, $maxDispo);

     // $listeDispo=$em->getRepository('EBPretControleurBundle:Disponibilite')->findBy(array('controleur' => $controleur), array('date' => 'asc'));
      return $this->render('EBPretControleurBundle:Disponibilite:index.html.twig', array(
        'listeDispo' => $listeDispo,
        'idControleur' => $controleur->getId(),
        'pagination' => $pagination,
        'nbDispo'    => $dispo_count));
    }
    
    public function controleurReserverValideAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
        $user=$this->container->get('security.context')->getToken()->getUser();
        $listeDispo=$em->LstControleurReserver($user, new \DateTime('now'));

        return $this->render('EBPretControleurBundle:Disponibilite:ListeControleurReserver.html.twig', array('listeDispo' => $listeDispo));
    }
    
    public function ListeControleurAction(Request $request)
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Controleur');
       $user=$this->container->get('security.context')->getToken()->getUser();
       $listeControleurs=$em->LstControleurValiderByUser($user);
       return $this->render('EBPretControleurBundle:Disponibilite:ListeControleur.html.twig',array('listeControleurs' => $listeControleurs)); 
    }


    public function listDispoAction(Request $request,$departement, $page = 1)
    {
        $maxDispo = $this->container->getParameter('max_dispo_par_page');
       
        $user=$this->container->get('security.context')->getToken()->getUser();
        $estAbonne = false;
        $iduser = 0;

       if ($this->get('security.context')->isGranted('ROLE_USER')) {
            if ($user->getNbAbonnement() > 0) {
                $estAbonne = true;
            }
            $iduser = $user->getId();
        }

        //calcul le nombre de controleur par departement (ne prd pas en compte les controleur du responsable), pr la pagination
        $dispo_count = $this->getDoctrine()
                            ->getRepository('EBPretControleurBundle:lstControleurWithNbDispo')
                            ->countControleurWithNbDispos($iduser, $departement);

        $pagination = array(
            'page'         => $page,
            'route'        => 'eb_pret_controleur_ListeDisponibilite',
            'pages_count'  => ceil($dispo_count / $maxDispo),
            'route_params' => array('departement' => $departement,'page' => $page)
        );
        //liste pour la pagination
        $listeDispo = $this->getDoctrine()
                           ->getRepository('EBPretControleurBundle:lstControleurWithNbDispo')
                           ->LstDispoByUser($iduser, $departement, $page, $maxDispo);

 
 
        return $this->render('EBPretControleurBundle:Disponibilite:ListeDispo.html.twig', array(
            'listeDispo' => $listeDispo,
            'pagination' => $pagination,
            'nbDispo'    => $dispo_count,
            'estAbonne'  => $estAbonne
        ));
    }

    /**
     * @ParamConverter("controleur", options={"mapping": {"idControleur": "id"}})
     */
    public function ajoutAction(Request $request,Controleur $controleur)
    {
    	$disponibilite = new Disponibilite;
        $em = $this->getDoctrine()->getManager();

        if (null === $controleur) {
            throw new NotFoundHttpException("le controleur d'id ".$id." n'existe pas.");
        }

        $disponibilite->setControleur($controleur);     
        $form = $this->get('form.factory')->create(new DisponibiliteType, $disponibilite);

        if ($form->handleRequest($request)->isValid()) {
            $repository = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
            //Liste des dates dispo des controleur
            $listDispo = $repository->findBy(
            array('controleur' => $controleur), // Critere
            array('date' => 'desc')        // Tri
            );
            $dteExist = $this->dateExist($listDispo,$disponibilite->getDate());
            if($dteExist!= true)
            {
                $em->persist($disponibilite);
                $em->flush();
                $request->getSession()->getFlashBag()->add('disponibilite', 'le disponibilite a bien été ajouté.');

            }

         return $this->redirect($this->generateUrl('eb_pret_controleur_Disponibilite', array('idControleur' => $controleur->getId())));
        }
        return $this->render('EBPretControleurBundle:Disponibilite:ajout.html.twig', array('form' => $form->createView(),'controleur' => $controleur));
    }

    /**
     * @ParamConverter("controleur", options={"mapping": {"idControleur": "id"}})
     */
    public function ajoutCreneauAction(Request $request,Controleur $controleur)
    {
        if (null === $controleur) {
            throw new NotFoundHttpException("le controleur d'id ".$id." n'existe pas.");
        }

       return $this->render('EBPretControleurBundle:Disponibilite:ajoutCreneau.html.twig', array('controleur' => $controleur));
    }

    public function ajoutCreneauControleurAction(Request $request,$idControleur, $dateDebut, $dateFin)
    {
        $request = $this->getRequest();
         $em = $this->getDoctrine()->getManager();

        $begin = new DateTime( $dateDebut );
        $end = new DateTime( $dateFin );
        $end = $end->modify( '+1 day' ); 

        $interval = new \DateInterval('P1D');
        $daterange = new \DatePeriod($begin, $interval ,$end);

        $controleur = $em->getRepository('EBPretControleurBundle:Controleur')->find($idControleur);
        
        $repository = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');

        //Liste des dates dispo des controleur
        $listDispo = $repository->findBy(
            array('controleur' => $controleur), // Critere
            array('date' => 'desc')        // Tri
        );

        foreach($daterange as $date){
            //regarde si la date existe deja pour ce controleur
            $dteExist = $this->dateExist($listDispo,$date);
            if (($date->format('w') != 0) && ($dteExist != true))
            {
                $disponibilite = new disponibilite();  
                $disponibilite->setControleur($controleur);
                $disponibilite->setDate($date);
                $em->persist($disponibilite); 
            }
        } 
        $em->flush();

        return $this->redirect($this->generateUrl('eb_pret_controleur_Disponibilite', array('idControleur' => $controleur->getId())));
       //$em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Controleur');
       //$user=$this->container->get('security.context')->getToken()->getUser();
       //$listeControleurs=$em->LstControleurValiderByUser($user);
       //return $this->render('EBPretControleurBundle:Disponibilite:ListeControleur.html.twig',array('listeControleurs' => $listeControleurs)); 

    }

    //Fonction qui permet de chercher si une date existe deja pour un controleur.
    public function dateExist($listDispo, $date)
    {
        $request = $this->getRequest();
        $trouve = false;
        foreach ($listDispo as $dispo) {
              if($dispo->getDate() == $date)
                $trouve = true;
        }

        return $trouve;
    }

    /**
     * @ParamConverter("controleur", options={"mapping": {"idControleur": "id"}})
     */
    public function DispoByControleurAction(Request $request, Controleur $controleur, $nbJoursDispo)
    {
        $em = $this->getDoctrine()->getManager();

        if (null === $controleur) {
            throw new NotFoundHttpException("le controleur d'id ".$id." n'existe pas.");
        }

        $user=$this->container->get('security.context')->getToken()->getUser();
        $estAbonne = false;
       if ($this->get('security.context')->isGranted('ROLE_USER')) {
            if ($user->getNbAbonnement() > 0) {
                $estAbonne = true;
            }
        }
        $codeDepControleur = $controleur->getAdresse()->getDepartement()->getCode();
        $listeDateDispoByControleur= $this->getDoctrine()
                                          ->getRepository('EBPretControleurBundle:Disponibilite')
                                          ->listeDateDispoByControleur($controleur, new \DateTime('now'));

        return $this->render('EBPretControleurBundle:Disponibilite:ListeDispoByControleur.html.twig', array(
            'listeDateDispoByControleur' => $listeDateDispoByControleur,
            'controleur' => $controleur,
            'estAbonne'  => $estAbonne,
            'nbJoursDispo' => $nbJoursDispo,
            'codeDep' => $codeDepControleur));

    }

    /**
     * @ParamConverter("disponibilite", options={"mapping": {"idDisponibilite": "id"}})
     */
    public function editAction(Request $request, Disponibilite $disponibilite)
    {
        $em = $this->getDoctrine()->getManager();

        $form = $this->get('form.factory')->create(new DisponibiliteType, $disponibilite);

         if ($form->handleRequest($request)->isValid()) {
         $em->persist($disponibilite);
         $em->flush();

         $request->getSession()->getFlashBag()->add('controleur', 'le controleur a bien enregistrée.');

         $idControleur = $disponibilite->getControleur()->getId();
         return $this->redirect($this->generateUrl('eb_pret_controleur_Disponibilite', array('idControleur' => $idControleur)));
        }
        return $this->render('EBPretControleurBundle:Disponibilite:edit.html.twig', array('form' => $form->createView(),'controleur' => $disponibilite->getControleur()));
    }

    /**
     * @ParamConverter("disponibilite", options={"mapping": {"idDisponibilite": "id"}})
     */
    public function PriseDispoAction(Request $request, Disponibilite $disponibilite)
    {
        $em = $this->getDoctrine()->getManager();

        $user=$this->container->get('security.context')->getToken()->getUser();
        
        $codeDepartement = $disponibilite->getControleur()->getAdresse()->getDepartement()->getCode();

        if($user->getNbAbonnement() > 0)
        {
            $form = $this->get('form.factory')->create(new PriseDisponibiliteType($user), $disponibilite);

            if ($form->handleRequest($request)->isValid()) {
                if($disponibilite->getPris() == 'o')
                {
                    $disponibilite->setPris(true);
                }
                else
                {
                    $disponibilite->setPris(false);
                }

            $em->persist($disponibilite);
            $em->flush();

            if($disponibilite->getPris() == 'o')
            {
               $this->EnvoieMailDemandeCentre($request, $disponibilite);
            }
            

            $request->getSession()->getFlashBag()->add('controleur', 'la demande d emprunt à bien été enregistrée.');

            return $this->redirect($this->generateUrl('eb_pret_controleur_ListeDisponibilite', array('departement' => $codeDepartement)));
         
            }
            return $this->render('EBPretControleurBundle:Disponibilite:PriseDispo.html.twig', array('form' => $form->createView(),'disponibilite' => $disponibilite,
            'departement' => $codeDepartement ));//, 'centre' =>  $centre));
        }
        else
        {
            return $this->redirect($this->generateUrl('eb_pret_controleur_ErreurAbonnement'));
        }
    }

   /**
     * @ParamConverter("disponibilite", options={"mapping": {"idDisponibilite": "id"}})
     */
    public function reponseDispoAction(Request $request, Disponibilite $disponibilite)
    {
        //$priseDisponibilite = new PriseDisponibilite;
        $em = $this->getDoctrine()->getManager();

        $user=$this->container->get('security.context')->getToken()->getUser();
        //$nom = $disponibilite->getCentre()->getNom();
        $centre=$disponibilite->getCentre();

        $form = $this->get('form.factory')->create(new ReponseDisponibiliteType(), $disponibilite);

         if ($form->handleRequest($request)->isValid()) {

            if($disponibilite->getStatut() == 'a')
            {
                $disponibilite->setPris(true);
                $disponibilite->setStatut(true);
            } 
            else if($disponibilite->getStatut()  == 'r')
            { 
                $disponibilite->setCentre(Null);
                $disponibilite->setPris(false);
                $disponibilite->setStatut(false);
            }
         $em->persist($disponibilite);
         $em->flush();


         if($disponibilite->getStatut() == 'a')
            $this->EnvoieMailReponseCentre($request, $disponibilite,$centre);
         else $this->EnvoieMailReponseRefusCentre($request, $disponibilite,$centre);

         $request->getSession()->getFlashBag()->add('disponibilite', 'la réponse a bien enregistrée.');

         $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
         $listeDemandeRecu=$em->LstDemandeRecu($user, new \DateTime('now'));

         return $this->render('EBPretControleurBundle:Disponibilite:LstDemandeRecu.html.twig',array('listeDemandeRecu' => $listeDemandeRecu));   
        }
        return $this->render('EBPretControleurBundle:Disponibilite:reponseDemande.html.twig', array('form' => $form->createView(),'demande' => $disponibilite));
    }

   /**
     * @ParamConverter("disponibilite", options={"mapping": {"idDisponibilite": "id"}})
     */
    public function annulerDemandeValideAction(Request $request, Disponibilite $disponibilite)
    {
        //$priseDisponibilite = new PriseDisponibilite;
        $em = $this->getDoctrine()->getManager();

        $user=$this->container->get('security.context')->getToken()->getUser();
        //$nom = $disponibilite->getCentre()->getNom();
        $centre=$disponibilite->getCentre();

        $form = $this->get('form.factory')->create(new AnnulerDisponibiliteType(), $disponibilite);

         if ($form->handleRequest($request)->isValid()) {

            if($disponibilite->getStatut() == 'o')
            {
                $disponibilite->setCentre(Null);
                $disponibilite->setPris(false);
                $disponibilite->setStatut(false);
            } 

         //$disponibilite->setStatut(true);
         $em->persist($disponibilite);
         $em->flush();

         if($disponibilite->getStatut() == false)
            $this->EnvoieMailAnnulationDemandeCentre($request, $disponibilite, $centre);

         $request->getSession()->getFlashBag()->add('disponibilite', 'la demande d emprunt a bien ete annulé.');

         $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
         $listeDemandeRecu=$em->LstDemandeRecu($user, new \DateTime('now'));
         return $this->render('EBPretControleurBundle:Disponibilite:LstDemandeRecu.html.twig',array('listeDemandeRecu' => $listeDemandeRecu));   
        }
        return $this->render('EBPretControleurBundle:Disponibilite:AnnulerDemande.html.twig', array('form' => $form->createView(),'demande' => $disponibilite));
    }

   /**
     * @ParamConverter("disponibilite", options={"mapping": {"idDisponibilite": "id"}})
     */
    public function annulerDemandeNonValideAction(Request $request, Disponibilite $disponibilite)
    {
        //$priseDisponibilite = new PriseDisponibilite;
        $em = $this->getDoctrine()->getManager();

        $user=$this->container->get('security.context')->getToken()->getUser();
        $nom = $disponibilite->getCentre()->getNom();
        

        $form = $this->get('form.factory')->create(new AnnulerDisponibiliteType(), $disponibilite);

         if ($form->handleRequest($request)->isValid()) {

            if($disponibilite->getStatut() == 'o')
            {
                $disponibilite->setCentre(Null);
                $disponibilite->setPris(false);
                $disponibilite->setStatut(false);
            } 

         //$disponibilite->setStatut(true);
         $em->persist($disponibilite);
         $em->flush();

         if($disponibilite->getStatut() == false)
            $this->EnvoieMailReponseAnnulationCentre($request, $disponibilite);

         $request->getSession()->getFlashBag()->add('disponibilite', 'la demande d emprunt non validéé a bien ete annulé.');

         $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
         $listeDemandeRecu=$em->LstDemandeNonValideByCentre($user, new \DateTime('now'));
         return $this->render('EBPretControleurBundle:Disponibilite:LstDemandeNonValide.html.twig',array('listeDemandeRecu' => $listeDemandeRecu));

        }
        return $this->render('EBPretControleurBundle:Disponibilite:AnnulerDemandeNonValide.html.twig', array('form' => $form->createView(),'demande' => $disponibilite));
    }

    public function calculNbControleurDispoParRegionAction($departement) {
      $request = $this->getRequest();
      $em = $this->getDoctrine()->getManager();
      if($request->isXmlHttpRequest()) {
        $departements = $em->getRepository('EBPretControleurBundle:Departement')->findOneBy(array('code' => $departement));
        $region = $departements->getLibelle();
        $user=$this->container->get('security.context')->getToken()->getUser();
        $dispo_count = $this->getDoctrine()
                            ->getRepository('EBPretControleurBundle:Disponibilite')
                            ->countDispos($user, $departement, new \DateTime('now'));

        
        $data = $region.' : '.$dispo_count.' contrôleur(s) disponible(s).';
         $request->getSession()->getFlashBag()->add('data', $data);
        $reponse = new JsonResponse($data); 
        return $reponse;   
      }
      return new Response('No Result');
    }

    public function lstCentreByUserAction() {
      $request = $this->getRequest();
      $em = $this->getDoctrine()->getManager();
      if($request->isXmlHttpRequest()) {
       //  $id = $request->get('id');
        $user=$this->container->get('security.context')->getToken()->getUser();
        //$departements = $em->getRepository('EBPretControleurBundle:Departement')->findAll();
        $centres = $em->getRepository('EBPretControleurBundle:Centre')->findBy(array('user' => $user,'abonne' => true));
        $serializer = new Serializer(array(new GetSetMethodNormalizer()), array(new JsonEncoder()));     
        foreach($centres as $key=>$centre){     
           $centres[$key] = $serializer->serialize($centre, "json");
        }
         
        $reponse = new JsonResponse($centres); 
        return $reponse;  

       // return new JsonResponse($departements);
      }
      return new Response('No Result');
    }


    public function priseDispoByUserAction(Request $request,$dispoId,$centreId,$statut,$pris)
    {
        $request = $this->getRequest();
        $em = $this->getDoctrine()->getManager();
        if($request->isXmlHttpRequest()) {
                $serializer = new Serializer(array(new GetSetMethodNormalizer()), array(new JsonEncoder()));  
                $em = $this->getDoctrine()->getManager();

                $centre = $em->getRepository('EBPretControleurBundle:Centre')->find($centreId);
                $disponibilite = $em->getRepository('EBPretControleurBundle:Disponibilite')->find($dispoId);
                $disponibilite->setCentre($centre);
                $disponibilite->setStatut($statut);
                $disponibilite->setPris($pris);

                $em->flush();            
                $reponse = new JsonResponse(); 
                return $reponse; 
        }
        return new Response('No Result');

    }

    public function demandeRecuAction(Request $request)
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
       $user=$this->container->get('security.context')->getToken()->getUser();
       $listeDemandeRecu=$em->LstDemandeRecu($user, new \DateTime('now'));
       return $this->render('EBPretControleurBundle:Disponibilite:LstDemandeRecu.html.twig',array('listeDemandeRecu' => $listeDemandeRecu));
    }

    public function demandeValideAction(Request $request)
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
       $user=$this->container->get('security.context')->getToken()->getUser();
       $listeDemandeRecu=$em->LstDemandeByCentre($user, new \DateTime('now'));
       return $this->render('EBPretControleurBundle:Disponibilite:LstDemandeValide.html.twig',array('listeDemandeRecu' => $listeDemandeRecu));
    }

    public function demandeNonValideAction(Request $request)
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
       $user=$this->container->get('security.context')->getToken()->getUser();
       $listeDemandeRecu=$em->LstDemandeNonValideByCentre($user, new \DateTime('now'));
       return $this->render('EBPretControleurBundle:Disponibilite:LstDemandeNonValide.html.twig',array('listeDemandeRecu' => $listeDemandeRecu));
    }


    private function EnvoieMailDemandeCentre(Request $request, $disponibilite)
    {
        $message = \Swift_Message::newInstance()
        ->setSubject('Demande reçu')
        ->setFrom('contact@controlisor.com')
        ->setTo($disponibilite->getControleur()->getCentre()->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailDemandeCentre.txt.twig', array('disponibilite' => $disponibilite))) ;
        $this->get('mailer')->send($message);
    }

    //Envoie mail d'acceptation au centre emprunteur
    private function EnvoieMailReponseCentre(Request $request, $disponibilite, $centre)
    {
        $message = \Swift_Message::newInstance()
        ->setSubject('Réponse reçu')
        ->setFrom('contact@controlisor.com')
        ->setTo($centre->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailReponseCentre.txt.twig', array('disponibilite' => $disponibilite, 'centre' => $centre)));
        $this->get('mailer')->send($message);
    }

    //Envoie mail d'acceptation au centre emprunteur
    private function EnvoieMailReponseRefusCentre(Request $request, $disponibilite, $centre)
    {
        $message = \Swift_Message::newInstance()
        ->setSubject('Réponse reçu')
        ->setFrom('contact@controlisor.com')
        ->setTo($centre->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailReponseRefusCentre.txt.twig', array('disponibilite' => $disponibilite, 'centre' => $centre))) ;
        $this->get('mailer')->send($message);
    }

    //envoie mail annulation (annuler une dde validé par le centre emprunteur) au centre du controleur
    private function EnvoieMailAnnulationDemandeCentre(Request $request, $disponibilite, $centre)
    {
        $message = \Swift_Message::newInstance()
        ->setSubject('Réponse reçu')
        ->setFrom('contact@controlisor.com')
        ->setTo($disponibilite->getControleur()->getCentre()->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailAnnulationDemandeCentre.txt.twig', array('disponibilite' => $disponibilite, 'centre' => $centre)));
        $this->get('mailer')->send($message);
    }


    //envoie mail annulation (annuler une dde pas encore validé par le centre emprunteur) au centre du controleur
    private function EnvoieMailReponseAnnulationCentre(Request $request, $disponibilite)
    {
        $message = \Swift_Message::newInstance()
        ->setSubject('Réponse reçu')
        ->setFrom('contact@controlisor.com')
        ->setTo($disponibilite->getControleur()->getCentre()->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailReponseAnnulerCentre.txt.twig', array('disponibilite' => $disponibilite))) ;
        $this->get('mailer')->send($message);
    }

    private function EnvoieMailControleur(Request $request, $disponibilite)
    {
        $message = \Swift_Message::newInstance()
        ->setSubject('Test email')
        ->setFrom('enis.boughanmi@gmail.com')
        ->setTo($disponibilite->getControleur()->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailControleur.txt.twig', array('disponibilite' => $disponibilite))) ;
        $this->get('mailer')->send($message);
    }
}
