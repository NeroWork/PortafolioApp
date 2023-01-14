import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import logoLinked from './assets/linkedCeleste.png';
import logoGit from './assets/githubCeleste.png';

function App() {
  return (
    <div className="App">
      <nav className='position-absolute end-0'>
        <a href="#"><img src={logoLinked} alt="Logo LinkedIn" className='logos'/></a>
        <a href="#"><img src={logoGit} alt="Logo Github" className='logos'/></a>
      </nav>
      <div className='mainPrincipal container'>
        <div className='row firstRow mx-auto'>
          <div className='col my-auto order-2'>
            <div className='row text-center text-light'>
             <h1>About me( )</h1>
            </div>
            <div className='row text-center'>
              <h2>Hello! My name is Facundo Furlan and I'm a developer.</h2>
            </div>
          </div>
          <div className='col order-1 my-auto'>
            <div className='container'>
              <div className='row'>
                <img src="https://drive.google.com/uc?export=view&id=1_iZ37GqLgoz6jtF2MvTxagSSWodoVpze" alt="Logo" className='imgLogo' />
              </div>
            </div>
          </div>
        </div>
        <div className='row secondRow text-center'>
          <div className='col my-auto'>
            <h2>A bit of my life</h2>
            <p>I am Argentine, I was born in 2002, and I love programming. From a very young age, I have always been interested in technology and computer issues, and since then, I have been involved in these areas. I graduated from high school as an electromechanical technician and at this moment I am in my third year of computer science. I love playing videogames, reading books, talking about the crazy things that happen in the world, and above all, thinking about the future and learning new things to reach it as I imagine it.</p>
          </div>
          <div className='col my-auto'>
            <h2>Things I did</h2>
            <p>I have extensive experience in C++, the language I learned in college. In fact, in addition to the large number of exercises we did, I also created my own video game on it.
I also have a formal education in web development with HTML, CSS, JS, React, among other tools. I did several courses with CoderHouse, you can see them at LinkedIn along with some projects ;)</p>
          </div>
        </div>
        <div className='row thirdRow'>
          <div className='container'>
            <div className='row text-center'>
              <h2>
              I still do not have much real experience in the labor field, but I have a solid foundation and a great desire to learn
              </h2>
            </div>
            <div className='row'>
              <div className='container'>
                <div className='row text-center rowH3'>
                  <h3>Main knowledge</h3>
                </div>
                <div className='row'>
                  <div className='col columCuadro text-center'>
                    <p>Software developer</p>
                    <p>Front End developer</p>
                    <p>Git/+2</p>
                  </div>
                  <div className='col columCuadro text-center'>
                    <p>C++/+2</p>
                    <p>JavaScript/~1</p>
                    <p>HTML/+1</p>
                  </div>
                  <div className='col columCuadro text-center'>
                    <p>CSS/+1</p>
                    <p>React/~1</p>
                    <p>Node.js/~1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='container'>
                <div className='row text-center rowH3'>
                <h3>Other Useful Tools</h3>
                </div>
                <div className='row'>
                  <div className='col columCuadro text-center'>
                    <p>Spanish/Native</p>
                    <p>English/Advanced</p>
                    <p>Italian/Basic</p>
                  </div>
                  <div className='col columCuadro text-center'>
                    <p>Photoshop</p>
                    <p>UX/UI design</p>
                    <p>Detail-oriented</p>
                  </div>
                  <div className='col columCuadro text-center'>
                    <p>Critical thinking</p>
                    <p>Fast learner</p>
                    <p>Ping-Pong</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
