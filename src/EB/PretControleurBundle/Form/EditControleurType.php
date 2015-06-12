<?php

namespace EB\PretControleurBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use EB\PretControleurBundle\Entity\CentreRepository;

class EditControleurType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
          $user = $this->utilisateur;
          $builder
            ->add('nom', 'text')
            ->add('prenom', 'text')
            ->add('numAgrement','text', array('max_length' => 8))
            //->add('dateAgrement','date', array('widget' => 'single_text','format' => 'yyyy-MM-dd',))
            ->add('dateAgrement','date',array('widget' => 'single_text','format' => 'dd-MM-yyyy','attr' => array('class' => 'date')))
            ->add('adresse',new AdresseControleurType())
            ->add('telephone', 'text', array('max_length' => 10))
            ->add('email','text')
            ->add('experience','text', array('max_length' => 2))
            ->add('centre', 'entity', array(
                'class'         => 'EBPretControleurBundle:Centre',
                'property'      => 'nom',
                'query_builder' => function(CentreRepository $repo) use($user) {
                  return $repo->LstCentreByUserQb($user);
                  }))
            ->add('AttestationAgrement',      new FichierType(), array('required' => false)) 
            ->add('AttestationFormationVingtHeure',      new FichierType(), array('required' => false)) 
            ->add('AttestationTroisCentControle',      new FichierType(), array('required' => false)) 
            ->add('AttestationBonPourAccord',      new FichierType(), array('required' => false)) 
            ->add('AttestationSupervision',      new FichierType(), array('required' => false)) 
            ->add('Enregistrer',      'submit')
        ;
    }
    
    private $utilisateur;
     
    public function __construct($user)
    {
        $this->utilisateur = $user;
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'EB\PretControleurBundle\Entity\Controleur'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'eb_pretcontroleurbundle_edit_controleur';
    }
}
