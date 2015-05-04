<?php

namespace EB\PretControleurBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;

/**
 * lstControleurWithNbDispoRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class lstControleurWithNbDispoRepository extends EntityRepository
{
	  /**
   * retourne la liste des disponibilitées à l'exception des dispo des centre de l'utilisateur connecté 
   *
   * @param int $page
   * @param int $maxperpage
   * @param string $sortby
   * @return Paginator
   */
  public function LstDispoByUser($idUser, $codeDep, $page=1, $maxperpage=4)
  {
    $q = $this->createQueryBuilder('d')
            ->select('d')
            ->where('d.idUser != :idUser')
            ->andWhere('d.codeDep = :codeDep')
            ->setParameter('idUser', $idUser)
            ->setParameter('codeDep', $codeDep);

    $q->setFirstResult(($page-1) * $maxperpage)
      ->setMaxResults($maxperpage);
 
    return new Paginator($q);
  }

  public function countControleurWithNbDispos($idUser, $codeDep)
  {
    $query = $this->createQueryBuilder('a')
                  ->select('COUNT(a)')  
                  ->where('a.idUser != :idUser')
            	  ->andWhere('a.codeDep = :codeDep')
            	  ->setParameter('idUser', $idUser)
            	  ->setParameter('codeDep', $codeDep);
           
  	return $query->getQuery()->getSingleScalarResult();
  }

}