import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="about" className={styles.topAbout}>
      <div className={styles.abtCont}>
        <div className={styles.line}>
        <h3>About</h3>
          </div> 
        <div className={styles.textEditor}>
          <div className={styles.textHead}>
            <div className={styles.cir1}></div>
            <div className={styles.cir2}></div>
            <div className={styles.cir3}></div>
          </div>
          <div className={styles.abtContContent}>
            <div className={styles.abtContent}>
              <p className={styles.abtP}>
              <span className={styles.arrowDesign}>&gt;</span> <strong className={styles.queryDesign}> Chandan.<span className={styles.highlight}>contact</span></strong> <br />["<a className={styles.abtLink} href="mailto:chandanu04042003@gmail.com">chandanu04042003@gmail.com</a>", "<a className={styles.abtLink} href="https://www.linkedin.com/in/chandan-u-481516260/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>", "<a className={styles.abtLink} href="https://github.com/Chandu12304">GitHub</a>"] <br />
              <span className={styles.arrowDesign}>&gt;</span> <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>resume</span></strong> <br /> "<a className={styles.abtLink} href="https://drive.google.com/file/d/174JQ6nn5DTFLYCC6g1IGkE3AU2Ngrsok/view?usp=drive_link">Chandan U.pdf</a>"<br />
              <span className={styles.arrowDesign}>&gt;</span> <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>interests</span></strong> <br />["Drawing", "Badminton", "Swimming", "Movie Buff"]<br />
              <span className={styles.arrowDesign}>&gt;</span> <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>education</span></strong> <br /> "University of Visvesvaraya College of Engineering ( present )"<br />
              <span className={styles.arrowDesign}>&gt;</span> <strong className={styles.queryDesign}>Chandan.<span className={styles.highlight}>skills</span></strong> <br /> ["Team Management", "Decision Making", "Problem solving","Adaptability","Time Management"]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
