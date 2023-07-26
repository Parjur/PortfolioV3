import styled from 'styled-components'

export const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 300px;
    border-radius: 7px;
    cursor: pointer;
    p {
        position: absolute;
        bottom: 0px;
        color: white;
        font-family: 'Ubuntu', sans-serif;
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 30px;
    }
    @media all and (max-width: 425px){
        height: 200px;
    }

`

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-radius: 7px;
    @media all and (max-width: 425px){
        height: 200px;
    }

`

export const Link = styled.span`
    font-family: 'Source Code Pro', sans-serif;
    font-weight: 300;
    color: white;
    text-decoration: none;
    position: absolute;
    bottom: 0px;
    padding: 10px 0px 10px 30px;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: left;
    box-sizing: border-box;
    width: 100%;
    border-radius: 0px 0px 7px 7px;
    &:hover {
        font-weight: 500;
    }
`
export const Collapse = styled.div`
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 0px 0px 7px 7px;
    margin-top: -20px;
    padding: 15px 10px 0px 10px;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    white-space: break-spaces;
    line-height: 20px;
    a {
        line-height: 40px;
        color: #408ec6;
        text-decoration: none;
    }
    
`
export const Wrapper = styled.div`
    height: auto;
`
