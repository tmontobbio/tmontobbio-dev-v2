import Nav from './nav/Nav';
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import Spacer from './components/Spacer';
import './App.css';

function App() {

  return (
    <div className="App">
      <div id="main">
        <Nav />
        <Spacer />
        <About />
        <Spacer />
        <Projects />
        <Spacer />
        <Contact />
      </div>
    </div>
  );
}

export default App;
