<?php

namespace EB\PretControleurBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * lstControleurWithNbDispo
 *
 * @ORM\Table(name="lstcontroleurwithnbdispo")
 * @ORM\Entity(repositoryClass="EB\PretControleurBundle\Entity\lstControleurWithNbDispoRepository")
 */
class lstControleurWithNbDispo
{
    /**
     * @var integer
     *
     * @ORM\Column(name="user_id", type="integer")
     */
    private $idUser;

    /**
     * @var integer
     *
     * @ORM\Column(name="idDisponibilite", type="integer")
     * @ORM\Id
     */
    private $idDisponibilite;

    /**
     * @var integer
     *
     * @ORM\Column(name="idControleur", type="integer")
     */
    private $idControleur;

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
     * @ORM\Column(name="codeDep", type="string", length=255)
     */
    private $codeDep;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime")
     */
    private $date;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="datefin", type="datetime")
     */
    private $datefin;
    
    /**
     * @var integer
     *
     * @ORM\Column(name="nbJourDispo", type="integer")
     */
    private $nbJourDispo;

   

    /**
     * Set idDisponibilite
     *
     * @param integer $idDisponibilite
     * @return lstControleurWithNbDispo
     */
    public function setIdDisponibilite($idDisponibilite)
    {
        $this->idDisponibilite = $idDisponibilite;

        return $this;
    }

    /**
     * Get idDisponibilite
     *
     * @return integer 
     */
    public function getIdDisponibilite()
    {
        return $this->idDisponibilite;
    }

    /**
     * Set idControleur
     *
     * @param integer $idControleur
     * @return lstControleurWithNbDispo
     */
    public function setIdControleur($idControleur)
    {
        $this->idControleur = $idControleur;

        return $this;
    }

    /**
     * Get idControleur
     *
     * @return integer 
     */
    public function getIdControleur()
    {
        return $this->idControleur;
    }

    /**
     * Set nom
     *
     * @param string $nom
     * @return lstControleurWithNbDispo
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
     * @return lstControleurWithNbDispo
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
     * Set date
     *
     * @param \DateTime $date
     * @return lstControleurWithNbDispo
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
     * Set nbJourDispo
     *
     * @param integer $nbJourDispo
     * @return lstControleurWithNbDispo
     */
    public function setNbJourDispo($nbJourDispo)
    {
        $this->nbJourDispo = $nbJourDispo;

        return $this;
    }

    /**
     * Get nbJourDispo
     *
     * @return integer 
     */
    public function getNbJourDispo()
    {
        return $this->nbJourDispo;
    }

    /**
     * Set idUser
     *
     * @param integer $idUser
     * @return lstControleurWithNbDispo
     */
    public function setIdUser($idUser)
    {
        $this->idUser = $idUser;

        return $this;
    }

    /**
     * Get idUser
     *
     * @return integer 
     */
    public function getIdUser()
    {
        return $this->idUser;
    }

    /**
     * Set codeDep
     *
     * @param string $codeDep
     * @return lstControleurWithNbDispo
     */
    public function setCodeDep($codeDep)
    {
        $this->codeDep = $codeDep;

        return $this;
    }

    /**
     * Get codeDep
     *
     * @return string 
     */
    public function getCodeDep()
    {
        return $this->codeDep;
    }

    /**
     * Set datefin
     *
     * @param \DateTime $datefin
     * @return lstControleurWithNbDispo
     */
    public function setDatefin($datefin)
    {
        $this->datefin = $datefin;

        return $this;
    }

    /**
     * Get datefin
     *
     * @return \DateTime 
     */
    public function getDatefin()
    {
        return $this->datefin;
    }
}
