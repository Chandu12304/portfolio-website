// root/src/components/Projects/Projects.jsx
import React, { useState } from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";
import { ProjectModal } from "./ProjectModal";

const cardVariants = {
  offscreen: { opacity: 0, y: 60, scale: 0.95 },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.25, duration: 0.8 }
  },
};
const hoverVariants = {
  hover: { scale: 1.04, boxShadow: "0px 8px 32px rgba(84,184,159,0.15)" },
  tap: { scale: 0.97 },
};

const projects = [
  {
    key: "project1",
    title: "RRR ( Team lead )",
    image: getImageUrl("Projects/Team.png"),
    repoLink: "https://github.com/Darshan-gowda-m/Bit-N-Build-2024-Binary_innovators",
    description: "Led a team of four in the Bit n Build International Hackathon, implementing key frontend features and major backend components.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    key: "project2",
    title: "QR generator",
    image: getImageUrl("Projects/project1.png"),
    repoLink: "https://github.com/Chandu12304/QR-Generator-free",
    description: "Created a QR generator converting URLs to downloadable images with auto-deletion.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    key: "project3",
    title: "IEEE UVCE Official website",
    image: getImageUrl("Projects/project2.png"),
    repoLink: "https://github.com/Chandu12304/IEEE-UVCE-WebsiteBackend",
    description: "Built secure backend with hashed login authentication, Firebase database for admin management.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    key: "project4",
    title: "Currency Convertor",
    image: getImageUrl("Projects/project3.png"),
    repoLink: "https://github.com/Chandu12304/currency-converter",
    description: "Created a currency converter utilizing an API to provide real-time conversion rates across various currencies.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  }
];

const ProjectCard = ({ project, isLeft, isLast, onClick }) => {
  const CardClass = isLeft ? styles.projectContLeft : styles.projectContRight;
  const InnerClass = isLeft ? styles.leftProject : styles.rightProject;
  return (
    <div className={CardClass} onClick={() => onClick(project)} style={{ cursor: "pointer" }}>
      <div className={styles.cirIcon}></div>
      <motion.div
        className={`${InnerClass} ${isLast ? styles.noBorder : ""}`}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        whileHover="hover"
        whileTap="tap"
        {...hoverVariants}
      >
        <div className={styles.projectContent}>
          <div className={styles.projectImg}>
            <img className={styles.imagePro} src={project.image} alt={project.title} />
          </div>
          <div className={styles.nameAndLink}>
            <h4>{project.title}</h4>
          </div>
          <div className={styles.projectDescription}>
            <p className={styles.projectDescP + ' ' + styles.truncateDesc}>
              {project.description}
            </p>
            <span className={styles.readMore}>Read more &rarr;</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.topProject}>
      <div className={styles.projectMainCont}>
        <div className={styles.projectLine}>
          <h3>Project</h3>
        </div>
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.key}
            project={project}
            isLeft={idx % 2 === 0}
            isLast={idx === projects.length - 1}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <ProjectModal open={modalOpen} onClose={handleClose} project={selectedProject} />
    </section>
  );
};
