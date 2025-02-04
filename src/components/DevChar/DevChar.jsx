import React from "react";
import styles from "./DevChar.module.css";
import { getImageUrl } from "../../utils";

const DevChar = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, me chamo Lucas!</h1>
        <p className={styles.description}>
        Sou estudante de Análise e Desenvolvimento de Sistemas na Faculdade Vianna Júnior, com foco em desenvolvimento fullstack. Confira meu portfólio para saber mais sobre meus conhecimentos, projetos pessoais e experiências profissionais!
        </p>
        <a href="https://docs.google.com/document/d/1BTZLqU25_fJ7zc_7x0XA0eEdotSjEckD9C05Kdkuksg/edit?usp=sharing" className={styles.contactBtn}>Currículo</a>
      </div>
      <img className={styles.imgEdit}src={getImageUrl("myPics/pfp01.png")}/>
        <div className={styles.topBlur} />
    </section>
  );
};

export default DevChar;
