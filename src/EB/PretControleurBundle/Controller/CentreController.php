<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Centre;
use EB\UserBundle\Entity\User;
use EB\PretControleurBundle\Form\CentreType;
use EB\PretControleurBundle\Form\EditCentreType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CentreController extends Controller
{
    public function indexAction()
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Centre');
       $user=$this->container->get('security.context')->getToken()->getUser();
       $listeCentres=$em->LstCentreByUser($user);

       
        return $this->render('EBPretControleurBundle:Centre:index.html.twig',array('listeCentres' => $listeCentres));
    }

    public function ajoutAction(Request $request)
    {
    	$centre = new Centre;

        $centre->setUser($this->container->get('security.context')->getToken()->getUser());
       
        $form = $this->get('form.factory')->create(new CentreType, $centre);

         if ($form->handleRequest($request)->isValid()) {
         $em = $this->getDoctrine()->getManager();
         $em->persist($centre);
         $em->flush();

         $request->getSession()->getFlashBag()->add('centre', 'le centre a bien enregistrée.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_Centre'));
        }
        return $this->render('EBPretControleurBundle:Centre:ajout.html.twig', array('form' => $form->createView(),));
    }

    public function editAction(Request $request,$id)
    {
        $centre = new Centre;
        $em = $this->getDoctrine()->getManager();

        $centre = $em->getRepository('EBPretControleurBundle:Centre')->find($id);

        if (null === $centre) {
            throw new NotFoundHttpException("le centre d'id ".$id." n'existe pas.");
        }

        $form = $this->get('form.factory')->create(new EditCentreType, $centre);

         if ($form->handleRequest($request)->isValid()) {
        // $em = $this->getDoctrine()->getManager();
         $em->persist($centre);
        // $em->persist($centre->getRegion());
         $em->flush();

         $request->getSession()->getFlashBag()->add('controleur', 'le controleur a bien modifié.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_Centre'));
        }
        return $this->render('EBPretControleurBundle:Centre:edit.html.twig', array('form' => $form->createView(),'centre' => $centre));
    }
}
