<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Centre;
use EB\PretControleurBundle\Entity\Controleur;
use EB\PretControleurBundle\Entity\Disponibilite;
use EB\UserBundle\Entity\User;
use EB\PretControleurBundle\Form\CentreType; 
use EB\PretControleurBundle\Form\AdminCentreType;
use EB\PretControleurBundle\Form\AdminControleurType;
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
       $listeCentres=$em->LstCentreValide();
        return $this->render('EBPretControleurBundle:Administration:indexCentre.html.twig',array('listeCentres' => $listeCentres));
    }

    public function indexControleurAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $centre = $em->getRepository('EBPretControleurBundle:Centre')->find($id);

        $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Controleur');
        $listeControleurs=$em->LstControleurByCentre($centre);
        return $this->render('EBPretControleurBundle:Administration:indexControleur.html.twig',array('listeControleurs' => $listeControleurs, 'centre' => $centre));
    }

    public function indexEmpruntTraiteAction()
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
       $listeDemandes=$em->lstTouteDemandeTraite(new \DateTime('now'));
        return $this->render('EBPretControleurBundle:Administration:indexEmpruntTraite.html.twig',array('listeDemandes' => $listeDemandes));
    }

    public function indexEmpruntAVenirAction()
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Disponibilite');
       $listeDemandes=$em->lstTouteDemandeAVenir(new \DateTime('now'));
        return $this->render('EBPretControleurBundle:Administration:indexEmpruntAVenir.html.twig',array('listeDemandes' => $listeDemandes));
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
            if($centre->getStatut() == 'a')
                $centre->setStatut(true);
            else if($centre->getStatut() == 'r')
                $centre->setStatut(false);

            $centre->setReponse(true);
            $em->persist($centre);
            // $em->persist($centre->getRegion());
            $em->flush();
            $request->getSession()->getFlashBag()->add('centre', 'le centre a bien été validé.');

            return $this->redirect($this->generateUrl('eb_pret_controleur_Administration'));
        }
        
        return $this->render('EBPretControleurBundle:Administration:edit.html.twig', array('form' => $form->createView(),'centre' => $centre));
    }

    public function editControleurAction(Request $request,$id)
    {
        $controleur = new Controleur;
        $em = $this->getDoctrine()->getManager();

        $controleur = $em->getRepository('EBPretControleurBundle:Controleur')->find($id);

        if (null === $controleur) {
            throw new NotFoundHttpException("le controleur d'id ".$id." n'existe pas.");
        }

        $form = $this->get('form.factory')->create(new AdminControleurType, $controleur);
        
        if ($form->handleRequest($request)->isValid()) {
            // $em = $this->getDoctrine()->getManager();
            if($controleur->getStatut() == 'a')
                $controleur->setStatut(true);
            else if($controleur->getStatut() == 'r')
                $controleur->setStatut(false);

            $controleur->setReponse(true);
            $em->persist($controleur);
            // $em->persist($controleur->getRegion());
            $em->flush();
            $request->getSession()->getFlashBag()->add('controleur', 'le controleur a bien été validé.');

            return $this->redirect($this->generateUrl('eb_pret_controleur_Administration_Controleur', array('id' => $controleur->getCentre()->getId())));
        }
        
        return $this->render('EBPretControleurBundle:Administration:editControleur.html.twig', array('form' => $form->createView(),'controleur' => $controleur));
    }

    public function EnvoieMailQuestionnaireAction(Request $request, $idDisponibilite)
    {
        $em = $this->getDoctrine()->getManager();

        $disponibilite = $em->getRepository('EBPretControleurBundle:Disponibilite')->find($idDisponibilite);
  
        $message = \Swift_Message::newInstance()
        ->setSubject('Questionnaire de satisfaction')
        ->setFrom('contact@controlisor.com')
        ->setTo($disponibilite->getControleur()->getCentre()->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailQuestionnaire.txt.twig', array('disponibilite' => $disponibilite))) ;
        $this->get('mailer')->send($message);

        return $this->redirect($this->generateUrl('eb_pret_controleur_Administration_EmpruntTraite'));
    }

}
