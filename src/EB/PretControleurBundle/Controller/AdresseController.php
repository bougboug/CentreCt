<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Adresse;
use EB\PretControleurBundle\Form\AdresseType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
// N'oubliez pas ce use pour l'annotation
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;

class AdresseController extends Controller
{
    public function ajoutAction(Request $request)
    {
        $adresse = new Adresse;
        $form = $this->get('form.factory')->create(new AdresseType, $adresse);

         if ($form->handleRequest($request)->isValid()) {
         $em = $this->getDoctrine()->getManager();
         $em->persist($adresse);
         $em->flush();

         $request->getSession()->getFlashBag()->add('notice', 'adresse bien enregistrée.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_homepage'));
        }

        return $this->render('EBPretControleurBundle:Adresse:ajout.html.twig', array('form' => $form->createView(),));
    }

    public function rempliProductAction($regionId) {
      $request = $this->getRequest();
      $em = $this->getDoctrine()->getManager();
      if($request->isXmlHttpRequest()) {
       //  $id = $request->get('id');
        $region = $em->getRepository('EBPretControleurBundle:Region')->find($regionId);
        //$departements = $em->getRepository('EBPretControleurBundle:Departement')->findAll();
        $departements = $em->getRepository('EBPretControleurBundle:Departement')->findBy(array('region' => $region));
        //dump($departements);
        //return new JsonResponse($departements);
        $serializer = new Serializer(array(new GetSetMethodNormalizer()), array(new JsonEncoder()));     
        foreach($departements as $key=>$departement){     
           $departements[$key] = $serializer->serialize($departement, "json");
        }
         
        $reponse = new JsonResponse($departements); 
        return $reponse;   

       // return new JsonResponse($departements);
      }
      return new Response('No Result');
    }
}
