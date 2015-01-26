<?php

namespace EB\PretControleurBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class EmprunterController extends Controller
{
    public function indexAction(Request $request)
    {
       return $this->render('EBPretControleurBundle:Emprunter:index.html.twig');
    }
}
