<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Departement;
use EB\PretControleurBundle\Entity\Region;
use EB\PretControleurBundle\Form\DepartementType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class DepartementController extends Controller
{
    public function ajoutAction(Request $request)
    {
        $departement = new Departement;
        $form = $this->get('form.factory')->create(new DepartementType, $departement);

         if ($form->handleRequest($request)->isValid()) {
         $em = $this->getDoctrine()->getManager();
         $em->persist($departement);
         $em->persist($departement->getRegion());
         $em->flush();

         $request->getSession()->getFlashBag()->add('notice', 'departement bien enregistrée.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_homepage'));
        }

        return $this->render('EBPretControleurBundle:Departement:ajout.html.twig', array('form' => $form->createView(),));
    }
    /**
     * @Route("subcategory/{Id}",name="route_to_retrieve_subcategory" )
     * @Template()
     */
    public function lstdepAction(Request $request)
    {
        $Id = $request->get('id');
        echo 'id : '.$Id;
      $region = $em->getRepository('EBPretControleurBundle:region')->find($id);

      $listDepartement = $em->getRepository('EBPretControleurBundle:Departement')->findBy(array('region' => $region))
    ;

      $response = new Response();
      $response->headers->set('Content-Type', 'application/json');
      $response->setContent(json_encode($listDepartement));
      return $response;


    }
}
