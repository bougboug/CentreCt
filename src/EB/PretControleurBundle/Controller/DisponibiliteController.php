<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Disponibilite;
use EB\PretControleurBundle\Entity\Controleur;
use EB\PretControleurBundle\Entity\Centre;
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

class DisponibiliteController extends Controller
{
    /**
     * @ParamConverter("controleur", options={"mapping": {"idControleur": "id"}})
     */
    public function indexAction(Request $request, Controleur $controleur)
    {
      $em = $this->getDoctrine()->getManager();
      $listeDispo=$em->getRepository('EBPretControleurBundle:Disponibilite')->findBy(array('controleur' => $controleur), array('date' => 'asc'));
      return $this->render('EBPretControleurBundle:Disponibilite:index.html.twig', array('listeDispo' => $listeDispo,'idControleur' => $controleur->getId()));
    }
    
    public function controleurReserverValideAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
        $user=$this->container->get('security.context')->getToken()->getUser();
        $listeDispo=$em->LstControleurReserver($user, new \DateTime('now'));

        return $this->render('EBPretControleurBundle:Disponibilite:ListeControleurReserver.html.twig', array('listeDispo' => $listeDispo));
    }

    public function listDispoAction(Request $request,$departement, $page = 1)
    {
        $maxDispo = $this->container->getParameter('max_dispo_par_page');
       
        $user=$this->container->get('security.context')->getToken()->getUser();
        $estAbonne = false;
       if ($this->get('security.context')->isGranted('ROLE_USER')) {
            if ($user->getNbAbonnement() > 0) {
                $estAbonne = true;
            }
        }
        //calcul le nombre de controleur par departement (ne prd pas en compte les controleur du responsable), pr la pagination
        $dispo_count = $this->getDoctrine()
                            ->getRepository('EBPretControleurBundle:Disponibilite')
                            ->countDispos($user, $departement, new \DateTime('now'));

        $pagination = array(
            'page'         => $page,
            'route'        => 'eb_pret_controleur_ListeDisponibilite',
            'pages_count'  => ceil($dispo_count / $maxDispo),
            'route_params' => array('departement' => $departement,'page' => $page)
        );
        //liste pour la pagination
        $listeDispo = $this->getDoctrine()
                           ->getRepository('EBPretControleurBundle:Disponibilite')
                           ->LstDispoByUser($user, $departement, $page, $maxDispo,new \DateTime('now'));
 
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

        $disponibilite->setControleur($controleur);     
        $form = $this->get('form.factory')->create(new DisponibiliteType, $disponibilite);

        if ($form->handleRequest($request)->isValid()) {

         $em->persist($disponibilite);
         $em->flush();

         $request->getSession()->getFlashBag()->add('disponibilite', 'le disponibilite a bien enregistrée.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_Disponibilite', array('idControleur' => $controleur->getId())));
        }
        return $this->render('EBPretControleurBundle:Disponibilite:ajout.html.twig', array('form' => $form->createView(),));
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
        return $this->render('EBPretControleurBundle:Disponibilite:edit.html.twig', array('form' => $form->createView(),));
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
            $this->EnvoieMailReponseCentre($request, $disponibilite);
         else if($disponibilite->getStatut()  == 'r')
            $this->EnvoieMailReponseRefusCentre($request, $disponibilite);

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

         if($disponibilite->getStatut() == 'o')
            $this->EnvoieMailReponseRefusCentre($request, $disponibilite, $nom);

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

         if($disponibilite->getStatut() == 'o')
            $this->EnvoieMailReponseAnnulationCentre($request, $disponibilite, $nom);

         $request->getSession()->getFlashBag()->add('disponibilite', 'la demande d emprunt non validéé a bien ete annulé.');

         $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
         $listeDemandeRecu=$em->LstDemandeNonValideByCentre($user, new \DateTime('now'));
         return $this->render('EBPretControleurBundle:Disponibilite:LstDemandeNonValide.html.twig',array('listeDemandeRecu' => $listeDemandeRecu));

        }
        return $this->render('EBPretControleurBundle:Disponibilite:AnnulerDemandeNonValide.html.twig', array('form' => $form->createView(),'demande' => $disponibilite));
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

    private function EnvoieMailReponseCentre(Request $request, $disponibilite)
    {
        //$webPath = $this->container->getParameter('kernel.root_dir').'/web/uploads/FichePratique.doc';
        //$webpath2='/Applications/MAMP/htdocs/centrect/web/uploads/FichePratique.doc';
        $message = \Swift_Message::newInstance()
        ->setSubject('Réponse reçu')
        ->setFrom('contact@controlisor.com')
        ->setTo($disponibilite->getControleur()->getCentre()->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailReponseCentre.txt.twig', array('disponibilite' => $disponibilite)));
       // ->attach(\Swift_Attachment::fromPath($webpath2, "application/octet-stream"));
        $this->get('mailer')->send($message);
    }

    private function EnvoieMailAnnulationDemandeCentre(Request $request, $disponibilite)
    {
        $message = \Swift_Message::newInstance()
        ->setSubject('Réponse reçu')
        ->setFrom('contact@controlisor.com')
        ->setTo($disponibilite->getControleur()->getCentre()->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailAnnulationDemandeCentre.txt.twig', array('disponibilite' => $disponibilite)));
       // ->attach(\Swift_Attachment::fromPath($webpath2, "application/octet-stream"));
        $this->get('mailer')->send($message);
    }

    private function EnvoieMailReponseRefusCentre(Request $request, $disponibilite, $nomCentre)
    {
        $message = \Swift_Message::newInstance()
        ->setSubject('Réponse reçu')
        ->setFrom('contact@controlisor.com')
        ->setTo($disponibilite->getControleur()->getCentre()->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailReponseRefusCentre.txt.twig', array('disponibilite' => $disponibilite, 'nomCentre' => $nomCentre))) ;
        $this->get('mailer')->send($message);
    }

    private function EnvoieMailReponseAnnulationCentre(Request $request, $disponibilite, $nomCentre)
    {
        $message = \Swift_Message::newInstance()
        ->setSubject('Réponse reçu')
        ->setFrom('contact@controlisor.com')
        ->setTo($disponibilite->getControleur()->getCentre()->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailReponseAnnulerCentre.txt.twig', array('disponibilite' => $disponibilite, 'nomCentre' => $nomCentre))) ;
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
