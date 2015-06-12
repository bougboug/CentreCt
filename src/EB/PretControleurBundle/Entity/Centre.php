<?php

namespace EB\PretControleurBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Centre
 *
 * @ORM\Table(name="centre")
 * @ORM\Entity(repositoryClass="EB\PretControleurBundle\Entity\CentreRepository")
 */
class Centre
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
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255)
     */
    private $nom;

    /**
     * @var bigint
     *
     * @ORM\Column(name="siret", type="bigint", length=14)
     */
    private $siret;

    /**
     * @var string
     *
     * @ORM\Column(name="telephone", type="string", length=10)
     */
    private $telephone;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255)
     */
    private $email;

    /**
     * @var boolean
     *
     * @ORM\Column(name="statut", type="boolean")
     */
    private $statut = false;

    /**
     * @var boolean
     *
     * @ORM\Column(name="reponse", type="boolean")
     */
    private $reponse = false;

    /**
     * @var string
     *
     * @ORM\Column(name="numAgrement", type="string", length=8)
     */
    private $numAgrement;
    
    /**
     * @var \DateTime
     *
     * @ORM\Column(name="dateAgrement", type="date")
     */
    private $dateAgrement;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="dateCreation", type="date")
     */
    private $dateCreation;

    /**
     * @ORM\OneToOne(targetEntity="EB\PretControleurBundle\Entity\Adresse", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $adresse;

    /**
     * @ORM\ManyToOne(targetEntity="EB\UserBundle\Entity\User", cascade={"persist"})
     */
    private $user;

    /**
     * @ORM\OneToOne(targetEntity="EB\PretControleurBundle\Entity\Fichier", cascade={"persist", "remove"})
     */
    private $AttestationAgrement;


    /**
     * @var string
     *
     * @ORM\Column(name="commentaire", type="string", length=255, nullable=true)
     * @ORM\JoinColumn(nullable=true)
     */
    private $commentaire;

    /**
     * @var boolean
     *
     * @ORM\Column(name="abonne", type="boolean")
     */
    private $abonne = false;


    public function __construct()
    {
      // Par défaut, la date de l'annonce est la date d'aujourd'hui
      $this->dateCreation = new \Datetime();
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
     * Set nom
     *
     * @param string $nom
     * @return Centre
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string 
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set telephone
     *
     * @param string $telephone
     * @return Centre
     */
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * Get telephone
     *
     * @return string 
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return Centre
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set statut
     *
     * @param boolean $statut
     * @return Centre
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

    /**
     * Set dateCreation
     *
     * @param \DateTime $dateCreation
     * @return Centre
     */
    public function setDateCreation($dateCreation)
    {
        $this->dateCreation = $dateCreation;

        return $this;
    }

    /**
     * Get dateCreation
     *
     * @return \DateTime 
     */
    public function getDateCreation()
    {
        return $this->dateCreation;
    }

    /**
     * Set numAgrement
     *
     * @param string $numAgrement
     * @return Centre
     */
    public function setNumAgrement($numAgrement)
    {
        $this->numAgrement = $numAgrement;

        return $this;
    }

    /**
     * Get numAgrement
     *
     * @return string 
     */
    public function getNumAgrement()
    {
        return $this->numAgrement;
    }

    
    /**
     * Set user
     *
     * @param \EB\UserBundle\Entity\User $user
     * @return Centre
     */
    public function setUser(\EB\UserBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \EB\UserBundle\Entity\User 
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set adresse
     *
     * @param \EB\PretControleurBundle\Entity\Adresse $adresse
     * @return Centre
     */
    public function setAdresse(\EB\PretControleurBundle\Entity\Adresse $adresse)
    {
        $this->adresse = $adresse;

        return $this;
    }

    /**
     * Get adresse
     *
     * @return \EB\PretControleurBundle\Entity\Adresse 
     */
    public function getAdresse()
    {
        return $this->adresse;
    }
    /**
     * Set AttestationAgrement
     *
     * @param \EB\PretControleurBundle\Entity\Fichier $attestationAgrement
     * @return Centre
     */
    public function setAttestationAgrement(\EB\PretControleurBundle\Entity\Fichier $attestationAgrement = null)
    {
        $this->AttestationAgrement = $attestationAgrement;

        return $this;
    }

    /**
     * Get AttestationAgrement
     *
     * @return \EB\PretControleurBundle\Entity\Fichier 
     */
    public function getAttestationAgrement()
    {
        return $this->AttestationAgrement;
    }

    /**
     * Set siret
     *
     * @param integer $siret
     * @return Centre
     */
    public function setSiret($siret)
    {
        $this->siret = $siret;

        return $this;
    }

    /**
     * Get siret
     *
     * @return integer 
     */
    public function getSiret()
    {
        return $this->siret;
    }

    /**
     * Set dateAgrement
     *
     * @param \DateTime $dateAgrement
     * @return Centre
     */
    public function setDateAgrement($dateAgrement)
    {
        $this->dateAgrement = $dateAgrement;

        return $this;
    }

    /**
     * Get dateAgrement
     *
     * @return \DateTime 
     */
    public function getDateAgrement()
    {
        return $this->dateAgrement;
    }

    /**
     * Set commentaire
     *
     * @param string $commentaire
     * @return Centre
     */
    public function setCommentaire($commentaire)
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    /**
     * Get commentaire
     *
     * @return string 
     */
    public function getCommentaire()
    {
        return $this->commentaire;
    }

    /**
     * Set reponse
     *
     * @param boolean $reponse
     * @return Centre
     */
    public function setReponse($reponse)
    {
        $this->reponse = $reponse;

        return $this;
    }

    /**
     * Get reponse
     *
     * @return boolean 
     */
    public function getReponse()
    {
        return $this->reponse;
    }

    /**
     * Set abonne
     *
     * @param boolean $abonne
     * @return Centre
     */
    public function setAbonne($abonne)
    {
        $this->abonne = $abonne;

        return $this;
    }

    /**
     * Get abonne
     *
     * @return boolean 
     */
    public function getAbonne()
    {
        return $this->abonne;
    }

}
