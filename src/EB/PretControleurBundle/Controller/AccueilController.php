<?php

namespace EB\PretControleurBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class AccueilController extends Controller
{
    public function indexAction()
    {
        return $this->render('EBPretControleurBundle:Accueil:index.html.twig');
    }

}
