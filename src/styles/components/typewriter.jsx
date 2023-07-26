import styled from 'styled-components'

export const Header = styled.div`
  height: 800px;
  width: 100%;
  max-width: 1400px;
  background-color: black;
  display: flex;
  //justify-content: center;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  img {
    position: absolute;
    top: 10px;
    right: 10px;
    object-fit: cover;
    height: 300px;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 1s, right 1s;
    @media all and (max-width: 1400px){
      height: 180px;
    }
    @media all and (max-width: 1000px){
      height: 140px;
    }
    @media all and (max-width: 900px){
      height: 140px;
    }
    @media all and (max-width: 600px){
      height: 110px;
    }
    @media all and (max-width: 450px){
      height: 90px;
    }

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
  height: 400px;
}
@media all and (max-width: 700px){
  height: 350px;
}

`
