import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "CHANDAN U"; // Ensure the full text is correct

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

  return (
    <section>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.topHero}>
        <div className={styles.heroCont}>
          <div className={styles.heroContent}>
            <h2>
              <span>&gt;</span>
              <strong className={styles.typing}> {displayedText}</strong>
            </h2>
            <p>
            Full Stack Developer | UVCE Information Science | IEEE UVCE Secretary | Cloud & Cybersecurity Enthusiast.
            </p>
            <a href="https://drive.google.com/file/d/174JQ6nn5DTFLYCC6g1IGkE3AU2Ngrsok/view?usp=drive_link">
              <button>Resume</button>
            </a>
          </div>
          <img
            className={styles.heroImg}
            src={getImageUrl("Hero/mypic.png")}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
