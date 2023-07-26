import Typewriter from 'typewriter-effect'
import { useState, useEffect } from 'react'
import { Header } from '../../styles/components/typewriter';

function Welcome() {
  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Header>
      <img src='https://i.ibb.co/c83t6CK/Tristan.png' alt='Tristan' className={`${visible ? 'visible' : ''}`} />
      <Typewriter 
            options={{
              delay: 10,
              cursor: '_'
            }}
            onInit={(typewriter) => {
              typewriter.typeString('nom :')
                .pauseFor(1000)
                .typeString(' Fern<br /><br />')
                .typeString('prenom :')
                .pauseFor(1000)
                .typeString(' Tristan<br /><br />')
                .typeString('a propos :')
                .pauseFor(1000)
                .typeString(' Issu d\'un parcours scientifique avec un DUT Mesures Physiques, je me suis reconverti en développement web grâce aux formations OpenClassrooms. Plus à l\'aise en développement frontend, je dispose cependant de notions en backend. Vous pouvez comptez sur ma motivation et mon savoir-faire pour mener à bien les projets que vous me confierez')
                .start()
            }}
          />
    </Header>    
  )}

export default Welcome