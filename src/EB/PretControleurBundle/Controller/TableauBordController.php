<?php

namespace EB\PretControleurBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class TableauBordController extends Controller
{
    public function indexAction()
    {
    	$user=$this->container->get('security.context')->getToken()->getUser();
    	$iduser = $user->getId();
    	$em = $this->getDoctrine()->getManager();
    	$recapUser=$em->getRepository('EBPretControleurBundle:lstUserRecap')->find(array('idUser' => $iduser));

        return $this->render('EBPretControleurBundle:TableauBord:index.html.twig', array('recapUser' => $recapUser));
    }

    public function indexAdminAction()
    {
    	$em = $this->getDoctrine()->getManager();
    	$lstUser=$em->getRepository('EBPretControleurBundle:lstUserRecap')->findAll();

        return $this->render('EBPretControleurBundle:TableauBord:indexAdmin.html.twig', array('lstUser' => $lstUser));
    }
}
