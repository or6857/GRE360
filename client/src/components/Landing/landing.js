import React from "react";
import styles from "./landing.module.css";
import Navbar from "../Navbar/navbar";
import image from "../quizAssests/landingPage.svg";
import blob1 from "../quizAssests/blob1.png";
import blob2 from "../quizAssests/blob2.png";
import blob3 from "../quizAssests/blob3.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../Footer/footer";

const Landing = () => {
  return (
    <>
      <div className={styles.landing}>
        <Navbar />
        <div className="row">
          <div className="col-md-6">
            <img src={image} className={styles.landingImg} alt="navbar-logo" />
          </div>

          <img className={styles.blob1} src={blob1} />
          <img className={styles.blob2} src={blob2} />
          <img className={styles.blob3} src={blob3} />
          <div className={`${styles.side_content} col-md-6`}>
            <h2 className={styles.catchy}>Graduate Record Examination</h2>
            <br />
            <h4 className={styles.Lorem}>
              The Graduate Record Examinations is a standardized test that is an
              admissions requirement for many graduate schools in the United
              States and Canada and few in other countries.
            </h4>
            <br />
            <button className={styles.explore_btn} href="#services">
              EXPLORE
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
