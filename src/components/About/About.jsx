import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2 } },
};

export const About = () => {
  return (
    <motion.section
      id="about"
      className={styles.topAbout}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.abtCont}>
        <div className={styles.line}>
          <h3>About</h3>
        </div>
        <motion.div
          className={styles.textEditor}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={styles.textHead}>
            <div className={styles.cir1}></div>
            <div className={styles.cir2}></div>
            <div className={styles.cir3}></div>
          </div>
          <div className={styles.abtContContent}>
            <div className={styles.abtContent}>
              <p className={styles.abtP}>
                <span className={styles.arrowDesign}>&gt;</span> <strong className={styles.queryDesign}> Chandan.<span className={styles.highlight}>contact</span></strong> <br />[
                <motion.a className={styles.abtLink} href="mailto:chandanu04042003@gmail.com" whileHover={{ color: "#ffb347", scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>chandanu04042003@gmail.com</motion.a>,
                <motion.a className={styles.abtLink} href="https://www.linkedin.com/in/chandan-u-481516260/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" whileHover={{ color: "#ffb347", scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>LinkedIn</motion.a>,
                <motion.a className={styles.abtLink} href="https://github.com/Chandu12304" whileHover={{ color: "#ffb347", scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>GitHub</motion.a>
                ] <br />
                <span className={styles.arrowDesign}>&gt;</span> <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>resume</span></strong> <br /> "<a className={styles.abtLink} href="https://drive.google.com/file/d/174JQ6nn5DTFLYCC6g1IGkE3AU2Ngrsok/view?usp=drive_link">Chandan U.pdf</a>"<br />
                <span className={styles.arrowDesign}>&gt;</span> <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>interests</span></strong> <br />["Drawing", "Badminton", "Swimming", "Movie Buff"]<br />
                <span className={styles.arrowDesign}>&gt;</span> <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>education</span></strong> <br /> "University of Visvesvaraya College of Engineering ( present )"<br />
                <span className={styles.arrowDesign}>&gt;</span> <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>skills</span></strong> <br /> ["Team Management", "Decision Making", "Problem solving","Adaptability","Time Management"]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
