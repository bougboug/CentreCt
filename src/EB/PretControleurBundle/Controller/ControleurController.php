<?php

namespace EB\PretControleurBundle\Controller;

use EB\PretControleurBundle\Entity\Controleur;
use EB\UserBundle\Entity\User;
use EB\PretControleurBundle\Entity\Disponibilite;
use EB\PretControleurBundle\Form\ControleurType;
use EB\PretControleurBundle\Form\EditControleurType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ControleurController extends Controller
{
    public function indexAction(Request $request)
    {
       $em = $this->getDoctrine()->getManager()->getRepository('EBPretControleurBundle:Controleur');
       $user=$this->container->get('security.context')->getToken()->getUser();
       $listeControleurs=$em->LstControleurByUser($user);
       return $this->render('EBPretControleurBundle:Controleur:index.html.twig',array('listeControleurs' => $listeControleurs));
    }

    public function ajoutAction(Request $request)
    {
    	$controleur = new Controleur;
        $em = $this->getDoctrine()->getManager();
        $user=$this->container->get('security.context')->getToken()->getUser();
        $form = $this->get('form.factory')->create(new ControleurType($user), $controleur);

         if ($form->handleRequest($request)->isValid()) {
         $em->persist($controleur);
         $em->flush();

         $this->EnvoieMailCreationControleur($request,$user);
         $request->getSession()->getFlashBag()->add('controleur', 'le controleur a été bien crée.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_Controleur'));
        }
        return $this->render('EBPretControleurBundle:Controleur:ajout.html.twig', array('form' => $form->createView(),));
    }

    public function editAction(Request $request,$id)
    {
        $controleur = new Controleur;
        $em = $this->getDoctrine()->getManager();
        $user=$this->container->get('security.context')->getToken()->getUser();

        // On récupère l'annonce $id
        $controleur = $em->getRepository('EBPretControleurBundle:Controleur')->find($id);

        if (null === $controleur) {
            throw new NotFoundHttpException("le controleur d'id ".$id." n'existe pas.");
        }

        $form = $this->get('form.factory')->create(new EditControleurType($user), $controleur);

         if ($form->handleRequest($request)->isValid()) {
         $em->persist($controleur);
         $em->flush();

         $request->getSession()->getFlashBag()->add('controleur', 'le controleur a bien enregistrée.');

         return $this->redirect($this->generateUrl('eb_pret_controleur_Controleur'));
        }
        return $this->render('EBPretControleurBundle:Controleur:edit.html.twig', array('form' => $form->createView(),'controleur' => $controleur));
    }

    private function EnvoieMailCreationControleur(Request $request,$user)
    {
        $message = \Swift_Message::newInstance()
        ->setSubject('Création controlleur')
        ->setFrom('contact@controlisor.fr')
        ->setTo($user->getEmail())
        ->setBody($this->renderView('EBPretControleurBundle:Email:emailCreationControleur.txt.twig')) ;
        $this->get('mailer')->send($message);
    }
}
