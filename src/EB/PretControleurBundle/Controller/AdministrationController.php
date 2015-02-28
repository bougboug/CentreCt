<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Centre;
use EB\PretControleurBundle\Entity\Controleur;
use EB\UserBundle\Entity\User;
use EB\PretControleurBundle\Form\CentreType; 
use EB\PretControleurBundle\Form\AdminCentreType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AdministrationController extends Controller
{
    public function indexAction()
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Centre');
       $listeCentres=$em->LstCentreInValide();
        return $this->render('EBPretControleurBundle:Administration:index.html.twig',array('listeCentres' => $listeCentres));
    }

    public function indexCentreAction()
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Centre');
       $listeCentres=$em->LstAllCentre();
        return $this->render('EBPretControleurBundle:Administration:indexCentre.html.twig',array('listeCentres' => $listeCentres));
    }

    public function indexControleurAction()
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Controleur');
       $listeControleurs=$em->findAll();
       return $this->render('EBPretControleurBundle:Administration:indexControleur.html.twig',array('listeControleurs' => $listeControleurs));
    }

    public function editAction(Request $request,$id)
    {
        $centre = new Centre;
        $em = $this->getDoctrine()->getManager();

        $centre = $em->getRepository('EBPretControleurBundle:Centre')->find($id);

        if (null === $centre) {
            throw new NotFoundHttpException("le centre d'id ".$id." n'existe pas.");
        }

        $form = $this->get('form.factory')->create(new AdminCentreType, $centre);

         if ($form->handleRequest($request)->isValid()) {
        // $em = $this->getDoctrine()->getManager();
         $em->persist($centre);
        // $em->persist($centre->getRegion());
         $em->flush();

         $request->getSession()->getFlashBag()->add('centre', 'le centre a bien été validé.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_Administration'));
        }
        return $this->render('EBPretControleurBundle:Administration:edit.html.twig', array('form' => $form->createView(),'centre' => $centre));
    }
}
