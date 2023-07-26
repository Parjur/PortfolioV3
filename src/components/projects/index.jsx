import { Title, CardNav, ProjectsContainer } from '../../styles/components/projects'
import Card from '../card'
import data from '../../assets/data.json'

function Projects() {
    return(
        <ProjectsContainer>
            <Title>Mes différents projets réalisés</Title>
            <CardNav>
                {data.map((project) => (
                    <Card 
                    key={project.id}
                    name={project.name}
                    link={project.link}
                    cover={project.cover}
                    description={project.description}
                    />  
                ))}
            </CardNav>
        </ProjectsContainer>
    )
}

export default Projects