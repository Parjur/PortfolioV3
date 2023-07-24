import Typewriter from 'typewriter-effect'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Header = styled.div`
  height: 800px;
  width: 100%;
  background-color: black;
  display: flex;
  //justify-content: center;
  align-items: center;

  img {
    position: absolute;
    top: 10px;
    right: 10px;
    object-fit: cover;
    height: 330px;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 1s, right 1s;
  }
  .visible {
    opacity: 0.8;
    right: 30px;
  }
  .Typewriter {
    font-family: 'Source Code Pro', arial, sans-serif;
    color: green;
    font-size: 40px;
    //text-align: center;
    @media all and (max-width: 1400px){
      font-size: 30px;
    }
    @media all and (max-width: 1000px){
      font-size: 20px;
    }
    @media all and (max-width: 700px){
      font-size: 16px;
    }
}
@media all and (max-width: 1400px){
  height: 500px;
}
@media all and (max-width: 1000px){
  height: 300px;
}
@media all and (max-width: 700px){
  height: 350px;
}

`

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