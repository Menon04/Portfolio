import styles from './App.module.css';
import DevChar from './components/DevChar/DevChar';
import { Navbar } from './components/Navbar/Navbar';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <DevChar />
    </div>
  )
}

export default App
