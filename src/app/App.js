import './App.css';
import Nav from './nav/Nav';
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects'

function App() {

  return (
    <div className="App">
      <div id="main">
        <Nav />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
