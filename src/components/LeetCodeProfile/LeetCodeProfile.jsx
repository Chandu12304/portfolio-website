import React from "react";
import styles from "./LeetCodeProfile.module.css";
import { motion } from "framer-motion";
import myPic from "../../../assets/Leetcode_profile/my_pic.jpeg";

const leetcodeUrl = "https://leetcode.com/u/chandanu04042003/";
const username = "chandanu04042003";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.25, duration: 0.9 }
  },
};

export const LeetCodeProfile = () => {
  return (
    <motion.section
      className={styles.leetcodeSection}
      id="leetcode-profile"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className={styles.card} whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(255, 193, 7, 0.10)" }}>
        <motion.img
          src={myPic}
          alt="LeetCode Avatar"
          className={styles.avatar}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        />
        <motion.h3
          className={styles.username}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          @{username}
        </motion.h3>
        <motion.a
          href={leetcodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
          whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.12)", color: "#FFA116" }}
          whileTap={{ scale: 0.97 }}
        >
          View LeetCode Profile
        </motion.a>
      </motion.div>
    </motion.section>
  );
}; 