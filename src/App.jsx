import styles from './App.module.css';
import DevChar from './components/DevChar/DevChar.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <DevChar />
      <About />
    </div>
  )
}

export default App
