<?php

namespace EB\PretControleurBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Abonnement
 *
 * @ORM\Table(name="abonnement")
 * @ORM\Entity(repositoryClass="EB\PretControleurBundle\Entity\AbonnementRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Abonnement
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
     * @ORM\ManyToOne(targetEntity="EB\PretControleurBundle\Entity\Centre", cascade={"persist"})
     */
    private $centre;

    /**
     * @var boolean
     *
     * @ORM\Column(name="enCours", type="boolean")
     */
    private $enCours;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="dateDebut", type="datetime")
     */
    private $dateDebut;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="dateFin", type="datetime")
     */
    private $dateFin;

    /**
     * @var integer
     *
     * @ORM\Column(name="montant", type="integer")
     */
    private $montant;

    /**
     * @var boolean
     *
     * @ORM\Column(name="payer", type="boolean")
     */
    private $payer;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="datepaiement", type="datetime")
     */
    private $datepaiement;

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
     * Set dateDebut
     *
     * @param \DateTime $dateDebut
     * @return abonnement
     */
    public function setDateDebut($dateDebut)
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    /**
     * Get dateDebut
     *
     * @return \DateTime 
     */
    public function getDateDebut()
    {
        return $this->dateDebut;
    }

    /**
     * Set dateFin
     *
     * @param \DateTime $dateFin
     * @return abonnement
     */
    public function setDatefin($dateFin)
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    /**
     * Get dateFin
     *
     * @return \DateTime 
     */
    public function getDateFin()
    {
        return $this->dateFin;
    }

    /**
     * Set montant
     *
     * @param integer $montant
     * @return abonnement
     */
    public function setMontant($montant)
    {
        $this->montant = $montant;

        return $this;
    }

    /**
     * Get montant
     *
     * @return integer 
     */
    public function getMontant()
    {
        return $this->montant;
    }

    /**
     * Set payer
     *
     * @param boolean $payer
     * @return abonnement
     */
    public function setPayer($payer)
    {
        $this->payer = $payer;

        return $this;
    }

    /**
     * Get payer
     *
     * @return boolean 
     */
    public function getPayer()
    {
        return $this->payer;
    }

    /**
     * Set datepaiement
     *
     * @param \DateTime $datepaiement
     * @return abonnement
     */
    public function setDatepaiement($datepaiement)
    {
        $this->datepaiement = $datepaiement;

        return $this;
    }

    /**
     * Get datepaiement
     *
     * @return \DateTime 
     */
    public function getDatepaiement()
    {
        return $this->datepaiement;
    }

    /**
     * Set enCours
     *
     * @param boolean $enCours
     * @return abonnement
     */
    public function setEnCours($enCours)
    {
        $this->enCours = $enCours;

        return $this;
    }

    /**
     * Get enCours
     *
     * @return boolean 
     */
    public function getEnCours()
    {
        return $this->enCours;
    }


    /**
     * Set centre
     *
     * @param \EB\PretControleurBundle\Entity\Centre $centre
     * @return Abonnement
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
     * @ORM\PrePersist
     */
    public function ajouterAbonnement()
    {
        if ($this->enCours) {
        $this->getCentre()->setAbonne(true);    
        $this->getCentre()->getUser()->ajoutAbonnement(); }
    }

    /**
     * @ORM\PreRemove
     */
    public function suprimerAbonnement()
    {
        $this->getCentre()->setAbonne(false);  
        $this->getCentre()->getUser()->retirerAbonnement();
    }
}
