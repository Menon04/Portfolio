import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projetos</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        cardsEffect={{slideShadows: false}}
        className={styles.mySwiper}
      >
        {projects.map((project, id) => (
          <SwiperSlide key={id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;