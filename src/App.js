import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Nabar';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
