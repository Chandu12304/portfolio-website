// root/src/components/Projects/Projects.jsx
import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

const LeftContainer = ({ imgSrc, name, hrefLink,description, isLast }) => (
  <div className={styles.projectContLeft}>
    <div className={styles.cirIcon}></div>
    <div className={`${styles.leftProject} ${isLast ? styles.noBorder : ""}`}>
      <div className={styles.projectContent}>
        <div className={styles.projectImg}>
          <img className={styles.imagePro} src={imgSrc} alt={name} />
        </div>
        <div className={styles.nameAndLink}>
          <h4>{name}</h4>
        </div>
        <div className={styles.projectDescription}>
          <p className={styles.projectDescP}>{description} <p className={styles.repoLink}>
            <i>
              <a className={styles.aProj} href={hrefLink} target="_blank" rel="noopener noreferrer">
                Repo
              </a>
            </i>
          </p></p>
        </div>
      </div>
    </div>
  </div>
);

const RightContainer = ({ imgSrc, name, hrefLink,description, isLast }) => (
  <div className={styles.projectContRight}>
    <div className={styles.cirIcon}></div>
    <div className={`${styles.rightProject} ${isLast ? styles.noBorder : ""}`}>
      <div className={styles.projectContent}>
        <div className={styles.projectImg}>
          <img className={styles.imagePro} src={imgSrc} alt={name} />
        </div>
        <div className={styles.nameAndLink}>
          <h4>{name}</h4>
        </div>
        <div className={styles.projectDescription}>
          <p className={styles.projectDescP}>{description} <p className={styles.repoLink}>
            <i>
              <a className={styles.aProj} href={hrefLink} target="_blank" rel="noopener noreferrer">
                Repo
              </a>
            </i>
          </p></p> 
        </div>
      </div>
    </div>
  </div>
);

const projectDescriptions = {
  project1: "Led a team of four in the Bit n Build International Hackathon, implementing key frontend features and major backend components.",
  project2: "Created a QR generator converting URLs to downloadable images with auto-deletion.",
  project3: "Built secure backend with hashed login authentication, Firebase database for admin management.",
  project4: "Created a currency converter utilizing an API to provide real-time conversion rates across various currencies.",
};

export const Projects = () => {
  return (
    <section id="projects" className={styles.topProject}>
      <div className={styles.projectMainCont}>
        <div className={styles.projectLine}>
          <h3>Project</h3>
        </div>

        <LeftContainer imgSrc={getImageUrl("Projects/Team.png")} name="RRR ( Team lead )" hrefLink="https://github.com/Darshan-gowda-m/Bit-N-Build-2024-Binary_innovators" description={projectDescriptions.project1} />
        <RightContainer imgSrc={getImageUrl("Projects/project1.png")} name="QR generator" hrefLink="https://github.com/Chandu12304/QR-Generator-free" description={projectDescriptions.project2} />
        <LeftContainer imgSrc={getImageUrl("Projects/project2.png")} name="IEEE UVCE Official website" hrefLink="https://github.com/Chandu12304/IEEE-UVCE-WebsiteBackend" description={projectDescriptions.project3} />
        <RightContainer imgSrc={getImageUrl("Projects/project3.png")} name="Currency Convertor" hrefLink="https://github.com/Chandu12304/currency-converter" description={projectDescriptions.project4} isLast />
      </div>
    </section>
  );
};
