import { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import { CardBox, Image, Link, Collapse, Wrapper } from '../../styles/components/card';

function Card({name, link, cover, description}) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    
    return (
        <Wrapper>
            <CardBox
            {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded)
            })}
            >
                <Image src={cover} alt={name} />
                <Link>{name}</Link>
            </CardBox>
            <Collapse  {...getCollapseProps()}>
                <p>{description}</p>
                <a href={link} target="_blank" rel='noreferrer'>Repo Github</a>
            </Collapse>
        </Wrapper>
    )
}

export default Card