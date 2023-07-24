import styled from 'styled-components'
import linkedIn from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactContainer = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    //align-items: center;
    width: 1000px;
    //background-color: aqua;
    margin-bottom: 300px;
    @media all and (max-width: 1000px){
        width: 90%;
    }

`

const Title = styled.h1`
    color: white;
    text-align: center;
    font-size: 50px;
    font-family: 'Ubuntu', sans-serif;
    @media all and (max-width: 425px){
        font-size: 30px;
    }

`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    label {
        color: white;
        font-size: 24px;
        font-family: 'Ubuntu', sans-serif;
        @media all and (max-width: 1000px){
            font-size: 20px;
        }

    }
    input {
        height: 35px;
        margin: 10px 0px 10px 0px;
        border-radius: 7px;
        box-shadow: 1px 1px 5px black;
        font-family: 'Source Code Pro', sans-serif;
        font-size: 20px;
        background-image: linear-gradient(to right, white, #F0F0F0);
        border: none;
        @media all and (max-width: 1000px){
            font-size: 18px;
        }
    
    }
    textarea {
        height: 200px;
        margin: 10px 0px 50px 0px;
        border-radius: 7px;
        box-shadow: 1px 1px 5px black;
        font-family: 'Source Code Pro', sans-serif;
        font-size: 20px;
        background-image: linear-gradient(to right, white, #F0F0F0);
        border: none;
        @media all and (max-width: 1000px){
            font-size: 18px;
        }

    }
    button {
        width: 200px;
        font-size: 24px;
        font-family: 'Source Code Pro', sans-serif;
        align-self: center;
        border: none;
        border-radius: 7px;
        cursor: pointer;
    }
    span.success {
        font-family: 'Ubuntu', sans-serif;
        font-size: 25px;
        margin-top: 20px;
        align-self: center;
        color: #26ab2b;
        text-align: center;
    }
    span.error {
        font-family: 'Ubuntu', sans-serif;
        font-size: 25px;
        margin-top: 20px;
        align-self: center;
        color: #cb2527;
        text-align: center;
    }

`

const Networks = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-self: center;
    margin-top: 100px;
    font-family: 'Source Code Pro', sans-serif;
    a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
    }
    img {
        height: 50px;
        width: 50px;
        margin-right: 10px;
    }
    @media all and (max-width: 700px){
        width: 90%;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

`

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