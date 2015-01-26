<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Responsable;
use EB\PretControleurBundle\Form\ResponsableType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class ResponsableController extends Controller
{
    public function ajoutAction(Request $request)
    {
    	$responsable = new Responsable;
        $form = $this->get('form.factory')->create(new ResponsableType, $responsable);

         if ($form->handleRequest($request)->isValid()) {
         $em = $this->getDoctrine()->getManager();
         $em->persist($responsable);
         $em->flush();

         $request->getSession()->getFlashBag()->add('notice', 'centre bien enregistrée.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_homepage'));
        }

        return $this->render('EBPretControleurBundle:Responsable:ajout.html.twig', array('form' => $form->createView(),));
    }
}
