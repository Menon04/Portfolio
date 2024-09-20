import React from "react";
import styles from "./DevChar.module.css";
import { getImageUrl } from "../../utils";

const DevChar = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, me chamo Lucas!</h1>
        <p className={styles.description}>
        Sou estudante de Análise e Desenvolvimento de Sistemas na Faculdade Vianna Júnior, com foco em desenvolvimento fullstack. Confira meu portifólio para saber mais sobre meus conhecimentos, projetos pessoais e experiências profissionais!
        </p>
        <a href="mailto:lucasguilarduccimenon@gmail.com" className={styles.contactBtn}>Entre em contato</a>
      </div>
      <img className={styles.imgEdit}src={getImageUrl("myPics/pfp01.png")}/>
        <div className={styles.topBlur} />
    </section>
  );
};

export default DevChar;
