import React from "react";
import styles from "./TestFooter.module.css";

const TestFooter = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.logo}`}>GRE360</div>
      <button className={`${styles.end} btn btn-danger`}>End Test</button>
    </div>
  );
};

export default TestFooter;
