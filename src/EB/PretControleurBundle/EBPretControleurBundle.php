<?php

namespace EB\PretControleurBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class EBPretControleurBundle extends Bundle
{
	public function indexAction()
  {
    $content = $this->get('templating')->render('EBPretControleurBundle:Centre:index.html.twig');
    return new Response($content);
  }
}
