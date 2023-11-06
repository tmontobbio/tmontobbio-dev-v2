import Nav from './nav/Nav';
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import Spacer from './components/large-spacer/LargeSpacer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Nav />
      <Spacer />
      <Projects />
      <Spacer />
      <About />
      <Spacer />
      <Contact />
    </div>
  );
}

export default App;
