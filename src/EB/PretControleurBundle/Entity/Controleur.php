<?php

namespace EB\PretControleurBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Controleur
 *
 * @ORM\Table(name="controleur")
 * @ORM\Entity(repositoryClass="EB\PretControleurBundle\Entity\ControleurRepository")
 */
class Controleur
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
     * @var string
     *
     * @ORM\Column(name="prenom", type="string", length=255)
     */
    private $prenom;

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
     * @var integer
     *
     * @ORM\Column(name="experience", type="integer")
     */
    private $experience;

    /**
     * @ORM\ManyToOne(targetEntity="EB\PretControleurBundle\Entity\Centre", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $centre;

    /**
     * @ORM\OneToOne(targetEntity="EB\PretControleurBundle\Entity\Adresse", cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $adresse;

    /**
     * @ORM\OneToOne(targetEntity="EB\PretControleurBundle\Entity\Fichier", cascade={"persist", "remove"})
     */
    private $AttestationAgrement;

    /**
     * @ORM\OneToOne(targetEntity="EB\PretControleurBundle\Entity\Fichier", cascade={"persist", "remove"})
     */
    private $AttestationFormationVingtHeure;

    /**
     * @ORM\OneToOne(targetEntity="EB\PretControleurBundle\Entity\Fichier", cascade={"persist", "remove"})
     */
    private $AttestationTroisCentControle;

    /**
     * @ORM\OneToOne(targetEntity="EB\PretControleurBundle\Entity\Fichier", cascade={"persist", "remove"})
     */
    private $AttestationBonPourAccord;

    /**
     * @ORM\OneToOne(targetEntity="EB\PretControleurBundle\Entity\Fichier", cascade={"persist", "remove"})
     */
    private $AttestationSupervision;

    /**
     * @var string
     *
     * @ORM\Column(name="commentaire", type="string", length=255)
     * @ORM\JoinColumn(nullable=true)
     */
    private $commentaire;

    /**
     * @var boolean
     *
     * @ORM\Column(name="reponse", type="boolean")
     */
    private $reponse = false;
    
    /**
     * @var boolean
     *
     * @ORM\Column(name="statut", type="boolean")
     */
    private $statut = false;

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
     * @return Controleur
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
     * Set prenom
     *
     * @param string $prenom
     * @return Controleur
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;

        return $this;
    }

    /**
     * Get prenom
     *
     * @return string 
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * Set numAgrement
     *
     * @param string $numAgrement
     * @return Controleur
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
     * Set telephone
     *
     * @param string $telephone
     * @return Controleur
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
     * @return Controleur
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
     * Set centre
     *
     * @param \EB\PretControleurBundle\Entity\Centre $centre
     * @return Controleur
     */
    public function setCentre(\EB\PretControleurBundle\Entity\Centre $centre)
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
     * Set experience
     *
     * @param integer $experience
     * @return Controleur
     */
    public function setExperience($experience)
    {
        $this->experience = $experience;

        return $this;
    }

    /**
     * Get experience
     *
     * @return integer 
     */
    public function getExperience()
    {
        return $this->experience;
    }

    /**
     * Set region
     *
     * @param \EB\PretControleurBundle\Entity\Region $region
     * @return Controleur
     */
    public function setRegion(\EB\PretControleurBundle\Entity\Region $region)
    {
        $this->region = $region;

        return $this;
    }

    /**
     * Get region
     *
     * @return \EB\PretControleurBundle\Entity\Region 
     */
    public function getRegion()
    {
        return $this->region;
    }

    /**
     * Set adresse
     *
     * @param \EB\PretControleurBundle\Entity\Adresse $adresse
     * @return Controleur
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
     * Set dateAgrement
     *
     * @param \DateTime $dateAgrement
     * @return Controleur
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
     * Set AttestationAgrement
     *
     * @param \EB\PretControleurBundle\Entity\Fichier $attestationAgrement
     * @return Controleur
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
     * Set AttestationFormationVingtHeure
     *
     * @param \EB\PretControleurBundle\Entity\Fichier $attestationFormationVingtHeure
     * @return Controleur
     */
    public function setAttestationFormationVingtHeure(\EB\PretControleurBundle\Entity\Fichier $attestationFormationVingtHeure = null)
    {
        $this->AttestationFormationVingtHeure = $attestationFormationVingtHeure;

        return $this;
    }

    /**
     * Get AttestationFormationVingtHeure
     *
     * @return \EB\PretControleurBundle\Entity\Fichier 
     */
    public function getAttestationFormationVingtHeure()
    {
        return $this->AttestationFormationVingtHeure;
    }

    /**
     * Set AttestationTroisCentControle
     *
     * @param \EB\PretControleurBundle\Entity\Fichier $attestationTroisCentControle
     * @return Controleur
     */
    public function setAttestationTroisCentControle(\EB\PretControleurBundle\Entity\Fichier $attestationTroisCentControle = null)
    {
        $this->AttestationTroisCentControle = $attestationTroisCentControle;

        return $this;
    }

    /**
     * Get AttestationTroisCentControle
     *
     * @return \EB\PretControleurBundle\Entity\Fichier 
     */
    public function getAttestationTroisCentControle()
    {
        return $this->AttestationTroisCentControle;
    }

    /**
     * Set AttestationBonPourAccord
     *
     * @param \EB\PretControleurBundle\Entity\Fichier $attestationBonPourAccord
     * @return Controleur
     */
    public function setAttestationBonPourAccord(\EB\PretControleurBundle\Entity\Fichier $attestationBonPourAccord = null)
    {
        $this->AttestationBonPourAccord = $attestationBonPourAccord;

        return $this;
    }

    /**
     * Get AttestationBonPourAccord
     *
     * @return \EB\PretControleurBundle\Entity\Fichier 
     */
    public function getAttestationBonPourAccord()
    {
        return $this->AttestationBonPourAccord;
    }

    /**
     * Set AttestationSupervision
     *
     * @param \EB\PretControleurBundle\Entity\Fichier $AttestationSupervision
     * @return Controleur
     */
    public function setAttestationSupervision(\EB\PretControleurBundle\Entity\Fichier $AttestationSupervision = null)
    {
        $this->AttestationSupervision = $AttestationSupervision;

        return $this;
    }

    /**
     * Get AttestationSupervision
     *
     * @return \EB\PretControleurBundle\Entity\Fichier 
     */
    public function getAttestationSupervision()
    {
        return $this->AttestationSupervision;
    }

    /**
     * Set commentaire
     *
     * @param string $commentaire
     * @return Controleur
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
    
}
