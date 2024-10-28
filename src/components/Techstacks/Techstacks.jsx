// root/src/components/Techstacks/Techstacks.jsx
import React from "react";
import styles from "./Techstacks.module.css";
import { getImageUrl } from "../../utils";

const Element = ({ imgSrc, name }) => {
  return (
    <div className={styles.elem}>
      <img className={styles.techStacksImages} src={imgSrc} alt={name} />
      <p className={styles.stackName}>{name}</p>
    </div>
  );
};

export const Techstacks = () => {
  return (
    <section className={styles.topTech}>
      <div className={styles.techCont}>
      <div className={styles.line}>
        <h3> Tech Stacks</h3>
      </div>
      <div className={styles.stacksCont}>
      <Element imgSrc={getImageUrl("TechStacks/cpp.png")} name="Cpp" />
      <Element imgSrc={getImageUrl("TechStacks/java.png")} name="Java" />
      <Element imgSrc={getImageUrl("TechStacks/python.png")} name="Python" />
      <Element imgSrc={getImageUrl("TechStacks/html.png")} name="html" />
      <Element imgSrc={getImageUrl("TechStacks/css.png")} name="css" />
      <Element imgSrc={getImageUrl("TechStacks/js.png")} name="Javascript" />
      <Element imgSrc={getImageUrl("TechStacks/react.png")} name="Reactjs" />
      <Element imgSrc={getImageUrl("TechStacks/node.png")} name="Nodejs" />
      <Element imgSrc={getImageUrl("TechStacks/firebase.png")} name="Firebase" />
      <Element imgSrc={getImageUrl("TechStacks/mongo.png")} name="Mongodb" />
      <Element imgSrc={getImageUrl("TechStacks/mysql.png")} name="Mysql" />
      <Element imgSrc={getImageUrl("TechStacks/git.png")} name="Github" />
      <Element imgSrc={getImageUrl("TechStacks/AI.png")} name="Adobe Illustrator" />
      <Element imgSrc={getImageUrl("TechStacks/figma.png")} name="Figma" />
      </div>
      </div>
    </section>
  );
};
