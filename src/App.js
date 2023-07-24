import GlobalStyle from './styles/globalStyle/index.jsx';
import { Fragment } from 'react';
import Welcome from './components/typewriter/index.jsx';
import Projects from './components/projects/index.jsx';
import Skills from './components/skills/index.jsx';
import Contact from './components/contact/index.jsx';
//import Footer from './components/footer/index.jsx';

function App() {
  return (
    <Fragment>
    <GlobalStyle />
    <Welcome />
    <Projects />
    <Skills />
    <Contact />
    </Fragment>
  );
}

export default App;
