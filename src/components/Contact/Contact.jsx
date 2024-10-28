import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.topContact}>
      <div className={styles.contactCont}>
        <div className={styles.line}>
          <h3>Contacts</h3>
        </div>
        <ul className={styles.contactContents}>
          <li>
            <img
              className={styles.contactImages}
              src="../assets\image 12.png"
              alt=""
            />
            <a
              className={styles.conEl}
              href="mailto:chandanu04042003@gmail.com"
            >
              chandanu04042003@gmail.com
            </a>
          </li>
          <li>
            <img
              className={styles.contactImages}
              src="../assets\image 12.png"
              alt=""
            />
            <a
              className={styles.conEl}
              href="https://www.linkedin.com/in/chandan-u-481516260/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              linkedin.com/chandan
            </a>
          </li>
          <li>
            <img
              className={styles.contactImages}
              src="../assets\image 12.png"
              alt=""
            />
            <a className={styles.conEl} href="https://github.com/Chandu12304">
              github.com/chandan
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
