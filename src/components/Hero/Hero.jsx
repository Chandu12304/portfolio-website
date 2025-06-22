import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "CHANDAN U"; // Ensure the full text is correct

  // Parallax effect
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  // Framer Motion transforms for parallax
  const imgX = useTransform(() => (mouse.x - 0.5) * 30, [mouse]);
  const imgY = useTransform(() => (mouse.y - 0.5) * 30, [mouse]);
  const circle1X = useTransform(() => (mouse.x - 0.5) * 60, [mouse]);
  const circle1Y = useTransform(() => (mouse.y - 0.5) * 60, [mouse]);
  const circle2X = useTransform(() => (0.5 - mouse.x) * 40, [mouse]);
  const circle2Y = useTransform(() => (0.5 - mouse.y) * 40, [mouse]);

  useEffect(() => {
    let index = 0;

    // Set a timeout to delay the start of the typing effect
    const typingTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          const currentChar = fullText.charAt(index);
          console.log(`Index: ${index}, Character: ${currentChar}`); // Debugging line
          setDisplayedText((prev) => prev + currentChar);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 150); // Adjust the typing speed here (milliseconds)

      return () => clearInterval(typingInterval); // Cleanup on unmount
    }, 800); // Delay of 0.5 seconds (500 milliseconds)

    return () => clearTimeout(typingTimeout); // Cleanup the timeout on unmount
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };
  const buttonVariants = {
    hover: { scale: 1.08, boxShadow: "0px 4px 24px rgba(84,184,159,0.3)" },
    tap: { scale: 0.96 },
  };

  return (
    <section>
      <motion.div
        className={styles.circle1}
        style={{ x: circle1X, y: circle1Y }}
      ></motion.div>
      <motion.div
        className={styles.circle2}
        style={{ x: circle2X, y: circle2Y }}
      ></motion.div>
      <motion.div
        className={styles.topHero}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMouse({ x: 0.5, y: 0.5 })}
      >
        <div className={styles.heroCont}>
          <div className={styles.heroContent}>
            <h2>
              <span>&gt;</span>
              <motion.strong
                className={styles.typing}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                {displayedText}
              </motion.strong>
            </h2>
            <p>
            Full Stack Developer | UVCE Information Science | IEEE UVCE Secretary | Cloud & Cybersecurity Enthusiast.
            </p>
            <a href="https://drive.google.com/file/d/174JQ6nn5DTFLYCC6g1IGkE3AU2Ngrsok/view?usp=drive_link">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                type="button"
              >
                Resume
              </motion.button>
            </a>
          </div>
          <motion.img
            className={styles.heroImg}
            src={getImageUrl("Hero/mypic.png")}
            alt=""
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{ x: imgX, y: imgY }}
          />
        </div>
      </motion.div>
    </section>
  );
};
