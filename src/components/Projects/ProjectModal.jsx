import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectModal.module.css";

export const ProjectModal = ({ open, onClose, project }) => {
  if (!open || !project) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.85, y: 80, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close project details">&times;</button>
            <div className={styles.headerNoImage}>
              <h2 className={styles.title}>{project.title}</h2>
            </div>
            <div className={styles.linksRow}>
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
                  GitHub
                </a>
              )}
              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer" className={styles.websiteLink}>
                  Website
                </a>
              )}
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.videoWrapper}>
              <video
                src={project.videoUrl}
                controls
                autoPlay
                muted
                className={styles.video}
                poster={project.image}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 