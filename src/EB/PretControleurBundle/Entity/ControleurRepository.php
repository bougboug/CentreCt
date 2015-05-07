<?php

namespace EB\PretControleurBundle\Entity;

use Doctrine\ORM\EntityRepository;

/**
 * ControleurRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ControleurRepository extends EntityRepository
{
  public function LstControleurByUser($user)
  {
    return  $this->createQueryBuilder('a')
        ->leftJoin('a.centre', 'c')
        ->where('c.user = :user ')
        ->setParameter('user', $user)
        ->getQuery()
        ->getResult();
  }

 public function LstControleurValiderByUser($user)
  {
    return  $this->createQueryBuilder('a')
        ->leftJoin('a.centre', 'c')
        ->where('c.user = :user ')
        ->andWhere('a.statut = true')
        ->setParameter('user', $user)
        ->getQuery()
        ->getResult();
  }

  public function LstControleurByCentre($centre)
  {
    return  $this->createQueryBuilder('a')
        ->where('a.centre = :centre ')
        ->setParameter('centre', $centre)
        ->getQuery()
        ->getResult();
  }

}
