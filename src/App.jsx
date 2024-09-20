import styles from './App.module.css';
import DevChar from './components/DevChar/DevChar.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Knowledge from './components/Knowledge/Knowledge.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <DevChar />
      <About />
      <Knowledge />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
