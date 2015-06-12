<?php

namespace EB\PretControleurBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use EB\PretControleurBundle\Entity\DepartementRepository;

class AdresseControleurType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('region', 'entity', array(
                  'class'    => 'EBPretControleurBundle:Region',
                  'property' => 'libelle',
                  'multiple' => false,
                  'empty_value' => 'Choisissez une region'))
            ->add('departement', 'entity', array(
                  'class'    => 'EBPretControleurBundle:Departement',
                  'property' => 'libelle',
                  'multiple' => false,
                  'empty_value' => 'Choisissez un département'))
            //->add('save',      'submit')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'EB\PretControleurBundle\Entity\Adresse'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'eb_pretcontroleurbundle_adresse_controleur';
    }

}
