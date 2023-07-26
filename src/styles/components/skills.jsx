import styled from 'styled-components'

export const SkillsContainer = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Ubuntu', sans-serif;
    color: white;
    //background-color: red;
    max-width: 1400px;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    @media all and (max-width: 425px){
        font-size: 40px;
    }

    @media all and (max-width: 425px){
        font-size: 30px;
    }

`

export const ListContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: start;
    font-size: 20px;
    //background-color: red;
    height: 200px;
    //max-width: 1400px;
    //align-self: center;
    @media all and (max-width: 1000px){
        flex-direction: column;
        height: auto;
        align-items: center;
    }


`

export const ListNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media all and (max-width: 425px){
        h2 {
            font-size: 20px;
        }
    }

    
`

export const List = styled.ul`
    list-style-type: none;
    padding: 0px;
    font-weight: 300;
    //cursor: pointer;
    //background-color: green;
    width: 250px;
    li {
        transition: color 0.3s,
                    font-weight 0.3s,
                    font-size 0.3s; 
    }
    li:hover {
        color: #7a2048;
        font-weight: 500;
        font-size: 20px;
    }
    @media all and (max-width: 425px){
        li {
            font-size: 17px;
        }
    }

`
