<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Disponibilite;
use EB\PretControleurBundle\Entity\Controleur;
use EB\UserBundle\Entity\User;
use EB\PretControleurBundle\Form\DisponibiliteType;
use EB\PretControleurBundle\Form\PriseDisponibiliteType;
use EB\PretControleurBundle\Form\ReponseDisponibiliteType;
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
      $listeDispo=$em->getRepository('EBPretControleurBundle:Disponibilite')->findBy(array('controleur' => $controleur));
      return $this->render('EBPretControleurBundle:Disponibilite:index.html.twig', array('listeDispo' => $listeDispo,'idControleur' => $controleur->getId()));
    }
    
    public function listDispoAction(Request $request,$departement, $page = 1)
    {
        $maxDispo = $this->container->getParameter('max_dispo_par_page');
       
        $user=$this->container->get('security.context')->getToken()->getUser();
        //calcul le nombre de controleur par departement, pr la pagination
        $dispo_count = $this->getDoctrine()
                            ->getRepository('EBPretControleurBundle:Disponibilite')
                            ->countDispos($user, $departement);

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
            'nbDispo'    => $dispo_count 
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

        $form = $this->get('form.factory')->create(new PriseDisponibiliteType($user), $disponibilite);

         if ($form->handleRequest($request)->isValid()) {
         $em->persist($disponibilite);
         $em->flush();

         //$this->EnvoieMailControleur($request, $disponibilite);
         //$this->EnvoieMailCentre($request, $disponibilite);

         $request->getSession()->getFlashBag()->add('controleur', 'le controleur a bien enregistrée.');

         $codeDepartement = $disponibilite->getControleur()->getAdresse()->getDepartement()->getCode();
         //return $this->redirect($this->generateUrl('eb_pret_controleur_Disponibilite', array('idControleur' => $idControleur)));
         return $this->redirect($this->generateUrl('eb_pret_controleur_ListeDisponibilite', array('departement' => $codeDepartement)));
         
        }
        return $this->render('EBPretControleurBundle:Disponibilite:PriseDispo.html.twig', array('form' => $form->createView(),'disponibilite' => $disponibilite));
    }

   /**
     * @ParamConverter("disponibilite", options={"mapping": {"idDisponibilite": "id"}})
     */
    public function ReponseDispoAction(Request $request, Disponibilite $disponibilite)
    {
        //$priseDisponibilite = new PriseDisponibilite;
        $em = $this->getDoctrine()->getManager();

        $user=$this->container->get('security.context')->getToken()->getUser();

        $form = $this->get('form.factory')->create(new ReponseDisponibiliteType(), $disponibilite);

         if ($form->handleRequest($request)->isValid()) {
          if($disponibilite->getStatut() == false)
          {
            $disponibilite->setCentre(Null);
            $disponibilite->setPris(false);
          }
         $em->persist($disponibilite);
         $em->flush();

         //$this->EnvoieMailControleur($request, $disponibilite);
         //$this->EnvoieMailCentre($request, $disponibilite);

         $request->getSession()->getFlashBag()->add('disponibilite', 'la réponse a bien enregistrée.');

         $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
         $listeDemandeRecu=$em->LstDemandeRecu($user);
         return $this->render('EBPretControleurBundle:Disponibilite:LstDemandeRecu.html.twig',array('listeDemandeRecu' => $listeDemandeRecu));   
        }
        return $this->render('EBPretControleurBundle:Disponibilite:reponseDemande.html.twig', array('form' => $form->createView(),'demande' => $disponibilite));
    }

    public function demandeRecuAction(Request $request)
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
       $user=$this->container->get('security.context')->getToken()->getUser();
       $listeDemandeRecu=$em->LstDemandeRecu($user);
       return $this->render('EBPretControleurBundle:Disponibilite:LstDemandeRecu.html.twig',array('listeDemandeRecu' => $listeDemandeRecu));
    }

    private function EnvoieMailCentre(Request $request, $disponibilite)
    {
        $message = \Swift_Message::newInstance()
        ->setSubject('Test email')
        ->setFrom('enis.boughanmi@gmail.com')
        ->setTo($disponibilite->getControleur()->getCentre()->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailCentre.txt.twig', array('disponibilite' => $disponibilite))) ;
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
