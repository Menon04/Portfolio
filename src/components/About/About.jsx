import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mim:</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageUrl("myPics/pfp01.png")} alt="" />
        <ul className={styles.aboutItens}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Fullstack</h3>
              <p>Tenho experiência tanto trabalhando no front-end quanto no back-end devido aos projetos pessoais</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Back-end</h3>
              <p>Estou pronto para trabalhar com o que for preciso, mas com um interesse maior pelo back-end </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Banco de dados e QA</h3>
              <p>Conhecimento avançado em diversos banco de dados como MySql, MongoDB, Redis e tambem na parte de QA</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
