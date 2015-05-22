<?php

namespace EB\PretControleurBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use EB\PretControleurBundle\Entity\CentreRepository;

class AbonnementType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
           // ->add('dateDebut','date', array('widget' => 'single_text','format' => 'yyyy-MM-dd',))
            ->add('dateDebut','date',array('widget' => 'single_text','format' => 'dd-MM-yyyy','attr' => array('class' => 'date')))
           // ->add('dateFin','date', array('widget' => 'single_text','format' => 'yyyy-MM-dd',))
            ->add('dateFin','date',array('widget' => 'single_text','format' => 'dd-MM-yyyy','attr' => array('class' => 'date')))
            ->add('montant', 'integer')
           // ->add('datepaiement','date', array('widget' => 'single_text','format' => 'yyyy-MM-dd',))
            ->add('datepaiement','date',array('widget' => 'single_text','format' => 'dd-MM-yyyy','attr' => array('class' => 'date')))
            ->add('centre', 'entity', array(
                  'class'         => 'EBPretControleurBundle:Centre',
                  'property'      => 'nom',
                  'query_builder' => function(CentreRepository $repo){
                  return $repo->LstCentreQb();
                  }))
            ->add('Enregistrer',        'submit')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'EB\PretControleurBundle\Entity\Abonnement'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'eb_pretcontroleurbundle_abonnement';
    }
}
