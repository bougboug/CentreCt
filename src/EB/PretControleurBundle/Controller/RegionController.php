<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Region;
use EB\PretControleurBundle\Form\RegionType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class RegionController extends Controller
{
    public function ajoutAction(Request $request)
    {
        $region = new Region;
        $form = $this->get('form.factory')->create(new RegionType, $region);

         if ($form->handleRequest($request)->isValid()) {
         $em = $this->getDoctrine()->getManager();
         $em->persist($region);
         $em->flush();

         $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_homepage'));
        }

        return $this->render('EBPretControleurBundle:Region:ajout.html.twig', array('form' => $form->createView(),));
    }
}
