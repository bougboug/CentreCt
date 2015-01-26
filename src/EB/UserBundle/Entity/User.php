<?php

namespace EB\UserBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity
 */
class User extends BaseUser
{
  /**
   * @ORM\Column(name="id", type="integer")
   * @ORM\Id
   * @ORM\GeneratedValue(strategy="AUTO")
   */
  protected $id;

  /**
   * @ORM\Column(type="string", length=255)
   *
   * @Assert\NotBlank(message="Veuillez entrer votre nom.", groups={"Registration", "Profile"})
   * @Assert\Length(
   *     min=3,
   *     max="255",
   *     minMessage="Le nom saisi est trop court",
   *     maxMessage="Le nom saisi est trop long.",
   *     groups={"Registration", "Profile"}
   * )
   */
  protected $nom;

  /**
   * @ORM\Column(type="string", length=255)
   *
   * @Assert\NotBlank(message="Veuillez entrer votre prénom.", groups={"Registration", "Profile"})
   * @Assert\Length(
   *     min=3,
   *     max="255",
   *     minMessage="Le prénom saisi est trop court",
   *     maxMessage="Le prénom saisi est trop long.",
   *     groups={"Registration", "Profile"}
   * )
   */
  protected $prenom;

  /**
   * @ORM\Column(type="string", length=8)
   *
   * @Assert\NotBlank(message="Veuillez entrer votre numéro d'agrement.", groups={"Registration", "Profile"})
   * @Assert\Length(
   *     min=3,
   *     max="8",
   *     minMessage="Le numéro d'agrement saisi est trop court",
   *     maxMessage="Le numéro d'agrement saisi est trop long.",
   *     groups={"Registration", "Profile"}
   * )
   */
  protected $numAgrement;

  /**
   * @ORM\Column(type="integer", length=10)
   *
   * @Assert\NotBlank(message="Veuillez entrer votre numéro de téléphone.", groups={"Registration", "Profile"})
   * @Assert\Length(
   *     min=3,
   *     max="10",
   *     minMessage="Le numéro de téléphone saisi est trop court",
   *     maxMessage="Le numéro de téléphone saisi est trop long.",
   *     groups={"Registration", "Profile"}
   * )
   */
  protected $telephone;


  public function eraseCredentials()
  {
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
     * Get nom
     *
     * @return string 
     */
    public function getNom()
    {
        return $this->nom;
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
     * Get numAgrement
     *
     * @return string 
     */
    public function getNumAgrement()
    {
        return $this->numAgrement;
    }

    /**
     * Get telephone
     *
     * @return integer 
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * Set nom
     *
     * @param string $nom
     * @return User
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Set prenom
     *
     * @param string $prenom
     * @return User
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;

        return $this;
    }

    /**
     * Set numAgrement
     *
     * @param string $numAgrement
     * @return User
     */
    public function setNumAgrement($numAgrement)
    {
        $this->numAgrement = $numAgrement;

        return $this;
    }

    /**
     * Set telephone
     *
     * @param integer $telephone
     * @return User
     */
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;

        return $this;
    }
}
