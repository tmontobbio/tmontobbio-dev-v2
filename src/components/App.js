import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects'

function App() {

  return (
    <div className="App">
      <div id="main">
        <Nav />
        <Home />
        <About />
        <Contact />
        <Projects />
      </div>
    </div>
  );
}

export default App;
