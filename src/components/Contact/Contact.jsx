import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Contact = () => {
  return (
    <motion.section
      id="contact"
      className={styles.topContact}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.contactCont}>
        <div className={styles.line}>
          <h3>Contacts</h3>
        </div>
        <motion.ul
          className={styles.contactContents}
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={itemVariants}>
            <img
              className={styles.contactImages}
              src="../assets\image 12.png"
              alt=""
            />
            <motion.a
              className={styles.conEl}
              href="mailto:chandanu04042003@gmail.com"
              whileHover={{ color: "#ffb347", scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              chandanu04042003@gmail.com
            </motion.a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <img
              className={styles.contactImages}
              src="../assets\image 12.png"
              alt=""
            />
            <motion.a
              className={styles.conEl}
              href="https://www.linkedin.com/in/chandan-u-481516260/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              whileHover={{ color: "#ffb347", scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              linkedin.com/chandan
            </motion.a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <img
              className={styles.contactImages}
              src="../assets\image 12.png"
              alt=""
            />
            <motion.a
              className={styles.conEl}
              href="https://github.com/Chandu12304"
              whileHover={{ color: "#ffb347", scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              github.com/chandan
            </motion.a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
};
