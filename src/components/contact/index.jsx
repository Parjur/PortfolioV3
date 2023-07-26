import linkedIn from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ContactContainer, Title, FormContainer, Networks } from '../../styles/components/contact'

function Contact() {
    const { register, handleSubmit, reset } = useForm();
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const [isErrors, setIsErrors] = useState(false)
        
    const form = useRef();

    // EmailJS
    const sendEmail = () => {
        emailjs.sendForm('service_ffbn1zs', 'template_xg7nyno', form.current, 'bcgJ0qZ7Xe6odFHjB')
        .then((result) => {
            console.log(result.text);
            reset();
            setIsSubmitSuccess(true);
        }, (error) => {
            console.log(error.text);
            setIsErrors(true);
        });
    };

    return(
        <ContactContainer>
            <Title>Contactez-moi !</Title>
            <FormContainer ref={form} onSubmit={handleSubmit(sendEmail)}>
                <label htmlFor='name'>Nom</label>
                <input type='text' id='name' {...register("name")} required/>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' {...register("email")} required/>
                <label htmlFor='subject'>Sujet</label>
                <input type='text' id='subject' {...register("subject")} required/>
                <label htmlFor='message'>Message</label>
                <textarea type='text' id='message' placeholder='Écrivez ici' {...register("message")} required/>
                <button type='submit'>Envoyer</button>
                {isSubmitSuccess ? 
                (<span className='success'>Formulaire envoyé avec succès ! Vous serez recontacté dans les plus brefs délais.</span>) : 
                (isErrors ?? 
                    (<span className='error'>Erreur dans l'envoi du formulaire. Veuillez réessayer.</span>) 
                    )
                }
            </FormContainer>
            <Networks>
                <a href='https://github.com/Parjur' target='_blank' rel='noreferrer'><img src={github} alt='Github'/>Parjur</a>
                <a href='https://www.linkedin.com/in/tristan-fern/' target='_blank' rel='noreferrer'><img src={linkedIn} alt='LinkedIn'/>Tristan Fern</a>
            </Networks>
        </ContactContainer>
    )
}

export default Contact