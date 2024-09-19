import styles from './App.module.css';
import DevChar from './components/DevChar/DevChar.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Knowledge from './components/Experience/Knowledge.jsx';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <DevChar />
      <About />
      <Knowledge />
    </div>
  )
}

export default App
