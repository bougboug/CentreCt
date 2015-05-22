<?php

namespace EB\PretControleurBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use EB\PretControleurBundle\Entity\CentreRepository;

class AdminControleurType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
          $builder
            ->add('nom', 'text', array('required' => false))
            ->add('prenom', 'text', array('required' => false))
            ->add('numAgrement','text', array('max_length' => 8, 'required' => false))
           // ->add('dateAgrement','date', array('widget' => 'single_text','format' => 'yyyy-MM-dd','required' => false))
            ->add('dateAgrement','date',array('widget' => 'single_text','format' => 'dd-MM-yyyy','required' => false,'attr' => array('class' => 'date')))
            ->add('adresse',new AdresseType(), array('required' => false))
            ->add('telephone', 'text', array('max_length' => 10, 'required' => false))
            ->add('email','text', array('required' => false))
            ->add('experience','text', array('max_length' => 2, 'required' => false))
            ->add('AttestationAgrement',      new FichierType(), array('required' => false)) 
            ->add('AttestationFormationVingtHeure',      new FichierType(), array('required' => false)) 
            ->add('AttestationTroisCentControle',      new FichierType(), array('required' => false)) 
            ->add('AttestationBonPourAccord',      new FichierType(), array('required' => false)) 
            ->add('commentaire',         'text',array('required' => false))
            ->add('statut',     'choice', array('expanded'=>false,//affiche des checkbox plutot qu'un select
                                                'multiple'=>false,
                                                'choices'=>array('a' => 'accepter', 'r' => 'refuser')))
            ->add('Enregistrer',      'submit')
        ;
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
        return 'eb_pretcontroleurbundle_admin_controleur';
    }
}
