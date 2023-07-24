import styled from 'styled-components'

const SkillsContainer = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Ubuntu', sans-serif;
    color: white;
    //background-color: red;
    max-width: 1400px;
`

const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    @media all and (max-width: 425px){
        font-size: 40px;
    }

    @media all and (max-width: 425px){
        font-size: 30px;
    }

`

const ListContainer = styled.div`
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

const ListNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media all and (max-width: 425px){
        h2 {
            font-size: 20px;
        }
    }

    
`

const List = styled.ul`
    list-style-type: none;
    padding: 0px;
    font-weight: 300;
    cursor: pointer;
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



function Skills() {
    return(
        <SkillsContainer>
            <Title>Mes compétences</Title>
            <ListContainer>
                <ListNav>
                    <h2>Frontend</h2>
                    <List>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>HTML5 / CSS3</li>
                    </List>
                </ListNav>
                <ListNav>
                    <h2>Backend</h2>
                    <List>
                        <li>NodeJS</li>
                        <li>PHP</li>
                    </List>
                </ListNav>
                <ListNav>
                    <h2>Autres</h2>
                    <List>
                        <li>Pack Office</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Premiere Pro</li>
                    </List>
                </ListNav>
                </ListContainer>
        </SkillsContainer>
    )
}

export default Skills