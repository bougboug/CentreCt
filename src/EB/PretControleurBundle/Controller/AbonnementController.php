<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Abonnement;
use EB\PretControleurBundle\Form\AbonnementType;
use EB\PretControleurBundle\Form\SupprimerAbonnementType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class AbonnementController extends Controller
{
    public function indexAction()
    {
    	$em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Abonnement');
        $listeAbonnements=$em->findAll();
        return $this->render('EBPretControleurBundle:Abonnement:index.html.twig',array('listeAbonnements' => $listeAbonnements));
    }

    public function erreurAbonnementAction()
    {
        return $this->render('EBPretControleurBundle:Abonnement:erreurAbonnement.html.twig');
    }

    public function ajoutAction(Request $request)
    {
    	$Abonnement = new Abonnement;
       
        $form = $this->get('form.factory')->create(new AbonnementType, $Abonnement);

         if ($form->handleRequest($request)->isValid()) {
         $em = $this->getDoctrine()->getManager();
         $Abonnement->setEnCours(true);
         $Abonnement->setPayer(true);
         $em->persist($Abonnement);
         $em->flush();

         $request->getSession()->getFlashBag()->add('Abonnement', 'le Abonnement a bien enregistrée.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_Abonnement'));
        }
        return $this->render('EBPretControleurBundle:Abonnement:ajout.html.twig', array('form' => $form->createView(),));
    }

    /**
     * @ParamConverter("Abonnement", options={"mapping": {"idAbonnement": "id"}})
     */
    public function supprimerAction(Request $request, Abonnement $Abonnement)
    {
        $em = $this->getDoctrine()->getManager();

        if (null === $Abonnement) {
            throw new NotFoundHttpException("l'Abonnement d'id ".$id." n'existe pas.");
        }

        $form = $this->get('form.factory')->create(new SupprimerAbonnementType, $Abonnement);

         if ($form->handleRequest($request)->isValid()) {

         $em->remove($Abonnement);
         $em->flush();

         $request->getSession()->getFlashBag()->add('Abonnement', 'le Abonnement a bien été supprimé.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_Abonnement'));
        }
        return $this->render('EBPretControleurBundle:Abonnement:supprimerAbonnement.html.twig', array('form' => $form->createView(),'Abonnement' => $Abonnement));
    }

    public function prixAbonnementAction()
    {
        return $this->render('EBPretControleurBundle:Abonnement:prixAbonnement.html.twig');
    }
}
