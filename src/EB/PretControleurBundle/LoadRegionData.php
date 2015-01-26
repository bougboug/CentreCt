// src/EB/PretControleurBundle/DataFixtures/ORM/LoadRegionData.php

namespace EB\PretControleurBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use EB\PretControleurBundle\Entity\Region;
use EB\PretControleurBundle\Entity\Departement;

class LoadRegionData implements FixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $regionAlsace = new Region();
        $regionAlsace->setLibelle('Alsace');
        
        $departementAlsace1 = new Departement();
        $departementAlsace1->setLibelle('Bas-Rhin');
        $departementAlsace1->setCode('67');
     
        $departementAlsace2 = new Departement();
        $departementAlsace2->setLibelle('Haut-Rhin');
        $departementAlsace2->setCode('68');
  
        $departementAlsace1->setAdvert($regionAlsace);
        $departementAlsace2->setAdvert($regionAlsace);

        $manager->persist($regionAlsace);
        $manager->persist($departementAlsace1);
        $manager->persist($departementAlsace2);
        
        $manager->flush();
        
        $regionAquitaine = new Region();
        $regionAquitaine->setLibelle('Aquitaine');
        
        $departementAquitaine1 = new Departement();
        $departementAquitaine1->setLibelle('Dordogne')
        $departementAquitaine1->setCode('24');
     
        $departementAquitaine2 = new Departement();
        $departementAquitaine2->setLibelle('Gironde');
        $departementAquitaine2->setCode('33');
  
        $departementAquitaine3 = new Departement();
        $departementAquitaine3->setLibelle('Landes');
        $departementAquitaine3->setCode('40');
     
        $departementAquitaine4 = new Departement();
        $departementAquitaine4->setLibelle('Lot-et-Garonne');
        $departementAquitaine4->setCode('47');

        $departementAquitaine5 = new Departement();
        $departementAquitaine5->setLibelle('Pyrénées-Atlantiques');
        $departementAquitaine5->setCode('64');

        $departementAquitaine1->setAdvert($regionAquitaine);
        $departementAquitaine2->setAdvert($regionAquitaine);
        $departementAquitaine3->setAdvert($regionAquitaine);
        $departementAquitaine4->setAdvert($regionAquitaine);
        $departementAquitaine5->setAdvert($regionAquitaine);

        $manager->persist($regionAquitaine);
        $manager->persist($departementAquitaine1);
        $manager->persist($departementAquitaine2);
        $manager->persist($departementAquitaine3);
        $manager->persist($departementAquitaine4);
        $manager->persist($departementAquitaine5);


        $manager->flush();
    }
}
