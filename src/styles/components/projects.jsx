import styled from 'styled-components'

export const Title = styled.h1`
    color: white;
    text-align: center;
    font-size: 50px;
    font-family: 'Ubuntu', sans-serif;
    @media all and (max-width: 1400px){
        font-size: 40px;
    }
    @media all and (max-width: 1000px){
        font-size: 30px;
    }

`

export const CardNav = styled.div`
    width: 100%;
    height: auto;
    //background-color: green;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: dense;
    row-gap: 40px;
    column-gap: 40px;
    align-self: center;
    @media all and (max-width: 1400px){
        width: 90%;
        grid-template-columns: 1fr 1fr;
    }
    
    @media all and (max-width: 700px){
        grid-template-columns: 1fr;
    }

      
`

export const ProjectsContainer = styled.div`
    height: auto;
    width: 100%;
    //background-color: blue;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`
