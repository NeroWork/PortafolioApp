import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Portada from './components/main/portada';
import Proyects from './components/main/projects';
import AboutMe from './components/main/aboutme';
import Titles from './components/main/titles';
import KnowledgeChart from './components/main/knowledgeChart';
import logoLinked from './assets/linkedCeleste.png';
import logoGit from './assets/githubCeleste.png';

function App() {
  return (
    <div className="App">
      <nav className='position-absolute end-0'>
        <a href="https://www.linkedin.com/in/facundo-furlan/"><img src={logoLinked} alt="Logo LinkedIn" className='logos'/></a>
        <a href="https://github.com/NeroWork/PortafolioApp"><img src={logoGit} alt="Logo Github" className='logos'/></a>
      </nav>
      <div className='mainPrincipal container'>
        <Portada></Portada>
        <AboutMe></AboutMe>
        <Titles></Titles>
        <KnowledgeChart></KnowledgeChart>
        <Proyects></Proyects>
      </div>
    </div>
  )
}

export default App
