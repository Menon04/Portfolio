import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portifólio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen 
          ? getImageUrl("nav/closeIcon.png") 
          : getImageUrl("nav/menuIcon.png")} 
          alt="menu"
          onClick={() => setMenuOpen(!menuOpen)}  
        />
        <ul className={`${styles.menuItens} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#sobre">Sobre</a>
            </li>
          <li>
            <a href="#experiencia">Experiência</a>
            </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;