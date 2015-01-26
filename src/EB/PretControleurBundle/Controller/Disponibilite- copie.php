<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Disponibilite;
use EB\PretControleurBundle\Entity\Controleur;
use EB\UserBundle\Entity\User;
use EB\PretControleurBundle\Form\DisponibiliteType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\Session\Session;

class DisponibiliteController extends Controller
{

    public function indexAction(Request $request, $idControleur)
    {
      $em = $this->getDoctrine()->getManager();
      $controleur=$em->getRepository('EBPretControleurBundle:Controleur')->find($idControleur);
      $session = $request->getSession();
      $session->set('idcont', $idControleur);

      $listeDispo=$em->getRepository('EBPretControleurBundle:Disponibilite')->findBy(array('controleur' => $controleur));
      return $this->render('EBPretControleurBundle:Disponibilite:index.html.twig', array('listeDispo' => $listeDispo));
    }

    public function ajoutAction(Request $request)
    {
    	$disponibilite = new Disponibilite;
        $em = $this->getDoctrine()->getManager();

        $controleur = new Controleur;
        $session = $request->getSession();
        $idControleur = $session->get('idcont');
        //$idControleur = '1';
        $controleur=$em->getRepository('EBPretControleurBundle:Controleur')->find($idControleur);

        if (null === $controleur) {
            throw new NotFoundHttpException("le controleur d'id ".$idControleur." n'existe pas.");
        }

         $em->getRepository('EBPretControleurBundle:Disponibilite');
        $disponibilite->setControleur($controleur);

        $form = $this->get('form.factory')->create(new DisponibiliteType, $disponibilite);

         if ($form->handleRequest($request)->isValid()) {
         $request->getSession()->getFlashBag()->add('disponibilite', 'test 1');
         $em->persist($disponibilite);
         $request->getSession()->getFlashBag()->add('disponibilite', 'test 2');
         $em->persist($disponibilite->getControleur());
         $request->getSession()->getFlashBag()->add('disponibilite', 'test 3');
         $em->flush();
         $request->getSession()->getFlashBag()->add('disponibilite', 'test 4');

         $request->getSession()->getFlashBag()->add('disponibilite', 'le disponibilite a bien enregistrée.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_Disponibilite'));
        }
        return $this->render('EBPretControleurBundle:Disponibilite:ajout.html.twig', array('form' => $form->createView(),));
    }

    public function editAction(Request $request, $id)
    {
        $disponibilite = new Disponibilite;
        $em = $this->getDoctrine()->getManager();

        // On récupère l'annonce $id
        $disponibilite = $em->getRepository('EBPretControleurBundle:Disponibilite')->find($id);

        if (null === $disponibilite) {
            throw new NotFoundHttpException("le disponibilite d'id ".$id." n'existe pas.");
        }

        $form = $this->get('form.factory')->create(new DisponibiliteType, $disponibilite);

         if ($form->handleRequest($request)->isValid()) {
         $em->persist($disponibilite);
         $em->flush();

         $request->getSession()->getFlashBag()->add('controleur', 'le controleur a bien enregistrée.');

         $session = $request->getSession();
         $idControleur = $session->get('idcont');
         return $this->redirect($this->generateUrl('eb_pret_controleur_Disponibilite', array('idControleur' => $idControleur)));
        }
        return $this->render('EBPretControleurBundle:Disponibilite:edit.html.twig', array('form' => $form->createView(),));
    }
}
