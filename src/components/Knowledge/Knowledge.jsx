import React from "react";
import skills from "../../data/skills";
import styles from "./Knowledge.module.css";
import { getImageUrl } from "../../utils";

const Knowledge = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Conhecimentos: </h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Knowledge;