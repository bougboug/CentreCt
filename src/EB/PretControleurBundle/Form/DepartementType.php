<?php

namespace EB\PretControleurBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class DepartementType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle', 'text')
            ->add('code',     'integer')
            ->add('region', 'entity', array(
                  'class'    => 'EBPretControleurBundle:Region',
                  'property' => 'libelle',
                  'multiple' => false))
            ->add('save',      'submit')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'EB\PretControleurBundle\Entity\Departement'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'eb_pretcontroleurbundle_departement';
    }
}