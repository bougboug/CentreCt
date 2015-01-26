<?php

namespace EB\PretControleurBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use EB\PretControleurBundle\Entity\CentreRepository;

class PriseDisponibiliteType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $user = $this->utilisateur;
        $builder
            ->add('pris','checkbox', array('required' => false))
            ->add('centre', 'entity', array(
                  'class'         => 'EBPretControleurBundle:Centre',
                  'property'      => 'nom',
                  'query_builder' => function(CentreRepository $repo) use($user) {
                                      return $repo->LstCentreByUserQb($user);
                                     }))
            ->add('save',      'submit')
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
            'data_class' => 'EB\PretControleurBundle\Entity\Disponibilite'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'eb_pretcontroleurbundle_Prise_disponibilite';
    }
}
