import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.home}>
          <a href="#">HOME</a>
        </div>
        <div className={styles.contact}>
          <a href="#">CONTACT US</a>
        </div>
        <div className={styles.loginfooter}>
          <a href="#">LOGIN</a>
        </div>
        <div className={styles.register}>
          <a href="#">REGISTER</a>
        </div>
      </div>
      <div className="icons">
        <div className="icon_space_one">
          <svg width="50" height="50">
            <rect width="50" height="50" />
          </svg>
        </div>
        <div className="icon_space_two">
          <svg width="50" height="50">
            <rect width="50" height="50" />
          </svg>
        </div>
        <div className="icon_space_three">
          <svg width="50" height="50">
            <rect width="50" height="50" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
