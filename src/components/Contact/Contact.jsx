import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contato</h2>
        <p>Se você se interessou sinta-se a vontade para entrar em contato!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:lucasguilarduccimenon@gmail.com">lucasguilarduccimenon@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/lucas-menon/">linkedin.com/lucas-menon</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Menon04">https://github.com/Menon04</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;