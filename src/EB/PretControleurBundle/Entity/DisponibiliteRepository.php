<?php

namespace EB\PretControleurBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;

/**
 * DisponibiliteRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class DisponibiliteRepository extends EntityRepository
{
  public function LstDemandeRecu($user,$date)
  {
    return  $this->createQueryBuilder('a')
        ->leftJoin('a.controleur', 'controleur')
        ->leftJoin('controleur.centre', 'centre')
        ->addSelect('controleur')
        ->addSelect('centre')
        ->where('centre.user = :user ')
        ->andWhere('a.centre IS NOT NULL')
        ->andWhere('a.date >= :date')
        ->andWhere('a.statut = false')
        ->setParameter('user', $user)
        ->setParameter('date', $date->format('Y-m-d'))
        ->orderBy('a.date','ASC')
        ->getQuery()
        ->getResult();
  }

  public function LstDemandeByCentre($user,$date)
  {
    return  $this->createQueryBuilder('a')
        ->leftJoin('a.controleur', 'controleur')
        ->leftJoin('a.centre', 'centre')
        ->leftJoin('controleur.centre', 'centreControleur')
        ->addSelect('controleur')
        ->addSelect('centre')
        ->addSelect('centreControleur')
        ->where('centre.user = :user ')
        ->andWhere('a.date >= :date')
        ->andWhere('a.statut = true')
        ->setParameter('user', $user)
        ->setParameter('date', $date->format('Y-m-d'))
        ->orderBy('a.date','ASC')
        ->getQuery()
        ->getResult();
  }

  public function LstDemandeNonValideByCentre($user,$date)
  {
    return  $this->createQueryBuilder('a')
        ->leftJoin('a.controleur', 'controleur')
        ->leftJoin('a.centre', 'centre')
        ->leftJoin('controleur.centre', 'centreControleur')
        ->addSelect('controleur')
        ->addSelect('centre')
        ->addSelect('centreControleur')
        ->where('centre.user = :user ')
        ->andWhere('a.date >= :date')
        ->andWhere('a.statut = false')
        ->setParameter('user', $user)
        ->setParameter('date', $date->format('Y-m-d'))
        ->orderBy('a.date','ASC')
        ->getQuery()
        ->getResult();
  }

  public function LstControleurReserver($user,$date)
  {
    return  $this->createQueryBuilder('a')
        ->leftJoin('a.controleur', 'controleur')
        ->leftJoin('a.centre', 'centre')
        ->leftJoin('controleur.centre', 'centreControleur')
        ->addSelect('controleur')
        ->addSelect('centre')
        ->addSelect('centreControleur')
        ->where('centreControleur.user = :user ')
        //->andWhere('a.date >= :date')
        ->setParameter('user', $user)
        //->setParameter('date', $date->format('Y-m-d'))
        ->orderBy('a.date','ASC')
        ->getQuery()
        ->getResult();
  }

  /**
   * retourne la liste des disponibilitées à l'exception des dispo des centre de l'utilisateur connecté 
   *
   * @param int $page
   * @param int $maxperpage
   * @param string $sortby
   * @return Paginator
   */
  public function LstDispoByUser($user, $codeDep, $page=1, $maxperpage=25, $date)
  {
    $q = $this->createQueryBuilder('d')
        	  ->leftJoin('d.controleur', 'c')
            ->leftJoin('c.adresse', 'a')
            ->leftJoin('a.departement', 'dep')
        	  ->leftJoin('c.centre', 'e')
        	  ->addSelect('c')
        	  ->where('e.user != :user')
            ->andWhere('dep.code = :code')
            ->andWhere('d.date >= :date')
            ->andWhere('d.statut = false')
            ->orderBy('d.date','asc')
        	  ->setParameter('user', $user)
            ->setParameter('code', $codeDep)
            ->setParameter('date', $date->format('Y-m-d'));

    $q->setFirstResult(($page-1) * $maxperpage)
      ->setMaxResults($maxperpage);
 
    return new Paginator($q);
  }

  public function countDispos($user, $codeDep, $date)
  {
    $query = $this->createQueryBuilder('a')
                  ->select('COUNT(a)')  
                  ->leftJoin('a.controleur', 'c')
                  ->leftJoin('c.adresse', 'ad')
                  ->leftJoin('ad.departement', 'dep')
                  ->leftJoin('c.centre', 'e')
                  ->where('e.user != :user')
                  ->andWhere('a.date >= :date')
                  ->andWhere('dep.code = :code')
                  ->setParameter('user', $user)
                  ->setParameter('code', $codeDep)
                  ->setParameter('date', $date->format('Y-m-d'));
           
  	return $query->getQuery()->getSingleScalarResult();
  }

  public function lstTouteDemandeTraite($date)
  {
    return  $this->createQueryBuilder('a')
        ->leftJoin('a.controleur', 'controleur')
        ->leftJoin('controleur.centre', 'centre')
        ->addSelect('controleur')
        ->addSelect('centre')
        ->where('a.date <= :date')
        ->andWhere('a.centre IS NOT NULL')
        ->setParameter('date', $date->format('Y-m-d'))
        ->getQuery()
        ->getResult();
  }

  // partie administration : listes des emprunts a venir
  public function lstTouteDemandeAVenir($date)
  {
    return  $this->createQueryBuilder('a')
        ->leftJoin('a.controleur', 'controleur')
        ->leftJoin('controleur.centre', 'centre')
        ->addSelect('controleur')
        ->addSelect('centre')
        ->where('a.date >= :date')
        ->andWhere('a.centre IS NOT NULL')
        ->setParameter('date', $date->format('Y-m-d'))
        ->getQuery()
        ->getResult();
  }

  public function lstTouteDemande()
  {
    return  $this->createQueryBuilder('a')
        ->leftJoin('a.controleur', 'controleur')
        ->leftJoin('controleur.centre', 'centre')
        ->addSelect('controleur')
        ->addSelect('centre')
        ->where('a.centre IS NOT NULL')
        ->getQuery()
        ->getResult();
  }

  public function listeDateDispoByControleur($controleur, $date)
  {
    return  $this->createQueryBuilder('a')
        ->select('a')
        ->where('a.controleur = :controleur')
        ->andWhere('a.date > :date')
        ->andWhere('a.statut = false')
        ->andWhere('a.centre IS NULL')
        ->orderBy('a.date','asc')
        ->setParameter('controleur', $controleur)
        ->setParameter('date', $date->format('Y-m-d'))
        ->getQuery()
        ->getResult();

  }

  //pour la pagination , liste des dates de disponibilité pour un conroleur
  public function countDisponibilite($controleur)
  {
    $query = $this->createQueryBuilder('a')
                  ->select('COUNT(a)')  
                  ->where('a.controleur = :controleur')
                  ->setParameter('controleur', $controleur);
           
    return $query->getQuery()->getSingleScalarResult();
  }

   /**
   * retourne la liste des disponibilitées à l'exception des dispo des centre de l'utilisateur connecté 
   *
   * @param int $page
   * @param int $maxperpage
   * @param string $sortby
   * @return Paginator
   */
  public function LstDispoControleurByUser($controleur, $page=1, $maxperpage=25)
  {
    $q = $this->createQueryBuilder('d')
            ->where('d.controleur = :controleur')
            ->orderBy('d.date','asc')
            ->setParameter('controleur', $controleur);

    $q->setFirstResult(($page-1) * $maxperpage)
      ->setMaxResults($maxperpage);
 
    return new Paginator($q);
  }

}
