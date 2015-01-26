<?php

namespace EB\PretControleurBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class CentreType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('siret','integer')
            ->add('nom',         'text')
            ->add('telephone',   'integer')
            ->add('email',       'text')
            ->add('numAgrement', 'text')
            ->add('dateAgrement','date')
            ->add('dateCreation','date')
            ->add('adresse',      new AdresseType())
            ->add('attestationAgrement',      new FichierType(),array('required' => false)) 
            ->add('save',        'submit')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'EB\PretControleurBundle\Entity\Centre'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'eb_pretcontroleurbundle_centre';
    }
}