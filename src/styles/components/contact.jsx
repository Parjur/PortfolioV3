import styled from 'styled-components'

export const ContactContainer = styled.div`
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

export const Title = styled.h1`
    color: white;
    text-align: center;
    font-size: 50px;
    font-family: 'Ubuntu', sans-serif;
    @media all and (max-width: 425px){
        font-size: 30px;
    }

`

export const FormContainer = styled.form`
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

export const Networks = styled.div`
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
