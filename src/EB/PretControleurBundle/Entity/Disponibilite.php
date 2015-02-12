<?php

namespace EB\PretControleurBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Disponibilite
 *
 * @ORM\Table(name="disponibilite")
 * @ORM\Entity(repositoryClass="EB\PretControleurBundle\Entity\DisponibiliteRepository")
 */
class Disponibilite
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime")
     */
    private $date;

    /**
     * @var boolean
     *
     * @ORM\Column(name="pris", type="boolean")
     */
    private $pris;

    /**
     * @var boolean
     *
     * @ORM\Column(name="statut", type="boolean")
     */
    private $statut;

    /**
     * @ORM\ManyToOne(targetEntity="EB\PretControleurBundle\Entity\Controleur", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $controleur;

    /**
     * @ORM\ManyToOne(targetEntity="EB\PretControleurBundle\Entity\Centre", cascade={"persist"})
     * @ORM\JoinColumn(nullable=true)
     */
    private $centre;
  
    public function __construct()
    {
      // Par défaut, la date de l'annonce est la date d'aujourd'hui
      $this->dateCreation = new \Datetime();
      $this->pris = false;
      $this->statut = false;
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     * @return Disponibilite
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime 
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set pris
     *
     * @param boolean $pris
     * @return Disponibilite
     */
    public function setPris($pris)
    {
        $this->pris = $pris;

        return $this;
    }

    /**
     * Get pris
     *
     * @return boolean 
     */
    public function getPris()
    {
        return $this->pris;
    }


    /**
     * Set controleur
     *
     * @param \EB\PretControleurBundle\Entity\Controleur $controleur
     * @return Disponibilite
     */
    public function setControleur(\EB\PretControleurBundle\Entity\Controleur $controleur)
    {
        $this->controleur = $controleur;

        return $this;
    }

    /**
     * Get controleur
     *
     * @return \EB\PretControleurBundle\Entity\Controleur 
     */
    public function getControleur()
    {
        return $this->controleur;
    }

    /**
     * Set centre
     *
     * @param \EB\PretControleurBundle\Entity\Centre $centre
     * @return Disponibilite
     */
    public function setCentre(\EB\PretControleurBundle\Entity\Centre $centre = null)
    {
        $this->centre = $centre;

        return $this;
    }

    /**
     * Get centre
     *
     * @return \EB\PretControleurBundle\Entity\Centre 
     */
    public function getCentre()
    {
        return $this->centre;
    }

    /**
     * Set statut
     *
     * @param boolean $statut
     * @return Disponibilite
     */
    public function setStatut($statut)
    {
        $this->statut = $statut;

        return $this;
    }

    /**
     * Get statut
     *
     * @return boolean 
     */
    public function getStatut()
    {
        return $this->statut;
    }
}
