<?php

namespace EB\PretControleurBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * lstUserRecap
 *
 * @ORM\Table(name="lstuserrecap")
 * @ORM\Entity(repositoryClass="EB\PretControleurBundle\Entity\lstUserRecapRepository")
 */
class lstUserRecap
{
    /**
     * @var integer
     *
     * @ORM\Column(name="iduser", type="integer")
     * @ORM\Id
     */
    private $idUser;

    /**
     * @var string
     *
     * @ORM\Column(name="login", type="string", length=255)
     */
    private $login;

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
     * @var string
     *
     * @ORM\Column(name="numAgrementUser", type="string", length=8)
     */
    private $numAgrement;
    
    /**
     * @var integer
     *
     * @ORM\Column(name="nbAbonnement", type="integer")
     */
    private $nbAbonnement;

    /**
     * @var integer
     *
     * @ORM\Column(name="nbCentre", type="integer")
     */
    private $nbCentre;  

    /**
     * @var integer
     *
     * @ORM\Column(name="nbControleur", type="integer")
     */
    private $nbControleur;  


    /**
     * Set idUser
     *
     * @param integer $idUser
     * @return lstUserRecap
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
     * Set login
     *
     * @param string $login
     * @return lstUserRecap
     */
    public function setLogin($login)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get login
     *
     * @return string 
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set nom
     *
     * @param string $nom
     * @return lstUserRecap
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
     * @return lstUserRecap
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
     * Set telephone
     *
     * @param string $telephone
     * @return lstUserRecap
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
     * @return lstUserRecap
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
     * Set numAgrement
     *
     * @param string $numAgrement
     * @return lstUserRecap
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
     * Set nbAbonnement
     *
     * @param integer $nbAbonnement
     * @return lstUserRecap
     */
    public function setNbAbonnement($nbAbonnement)
    {
        $this->nbAbonnement = $nbAbonnement;

        return $this;
    }

    /**
     * Get nbAbonnement
     *
     * @return integer 
     */
    public function getNbAbonnement()
    {
        return $this->nbAbonnement;
    }

    /**
     * Set nbCentre
     *
     * @param integer $nbCentre
     * @return lstUserRecap
     */
    public function setNbCentre($nbCentre)
    {
        $this->nbCentre = $nbCentre;

        return $this;
    }

    /**
     * Get nbCentre
     *
     * @return integer 
     */
    public function getNbCentre()
    {
        return $this->nbCentre;
    }

    /**
     * Set nbControleur
     *
     * @param integer $nbControleur
     * @return lstUserRecap
     */
    public function setNbControleur($nbControleur)
    {
        $this->nbControleur = $nbControleur;

        return $this;
    }

    /**
     * Get nbControleur
     *
     * @return integer 
     */
    public function getNbControleur()
    {
        return $this->nbControleur;
    }
}
