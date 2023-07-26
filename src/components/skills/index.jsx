import { SkillsContainer, Title, ListContainer, ListNav, List } from "../../styles/components/skills"

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