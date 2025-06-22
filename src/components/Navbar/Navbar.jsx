import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const navListVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, pointerEvents: "none" },
    open: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.4 } },
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${isOpen ? styles.scrolled : ""}`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.navContainer}>
        <div>
          <motion.p
            className={styles.webName}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            PORTFOLIO
          </motion.p>
        </div>
        <motion.div
          className={styles.hamburger}
          onClick={toggleMenu}
          whileTap={{ scale: 0.85 }}
        >
          {isOpen ? (
            <span className={styles.hamburgerIcons}>&#10005;</span>
          ) : (
            <span className={styles.hamburgerIcons}>&#9776;</span>
          )}
        </motion.div>
        {/* Desktop nav */}
        <motion.ul
          className={`${styles.navContents} ${isOpen ? styles.show : ""}`}
          variants={navListVariants}
          initial="hidden"
          animate="visible"
        >
          {["about", "projects", "contact"].map((section, idx) => (
            <motion.li key={section} variants={navItemVariants}>
              <a className={styles.navEl} href={`#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </motion.li>
          ))}
        </motion.ul>
        {/* Mobile dropdown nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className={`${styles.navContents} ${styles.show}`}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ position: "absolute", top: "100%", right: 0, background: "#21434d80", borderRadius: 15, zIndex: 99 }}
            >
              {["about", "projects", "contact"].map((section, idx) => (
                <motion.li key={section} variants={navItemVariants}>
                  <a className={styles.navEl} href={`#${section}`} onClick={() => setIsOpen(false)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
