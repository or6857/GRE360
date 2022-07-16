import React from "react";
import styles from "./signup.module.css";
// import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <a
            className={styles.title}
            href="/home"
            style={{ color: "#4481eb", fontWeight: "bold", fontSize: "25px" }}
          >
            GRE360
          </a>
          <h5 className={styles.form}>Sign Up</h5>
        </div>
        <div className={styles.container_side_content}>
          <form>
            <div className={styles.username}>
              <label className={styles.usertext}>
                <b>Full Name</b>
              </label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className={styles.username}>
              <label className={styles.usertext}>
                <b>Email Address</b>
              </label>
              <input type="text" placeholder="Enter your email address" />
            </div>
            <div className={styles.username}>
              <label className={styles.usertext}>
                <b>Toffle Score</b>
              </label>
              <input type="text" placeholder="Enter your toffle Score" />
            </div>
            <div className={styles.username}>
              <label className={styles.usertext}>
                <b>SOP Rating</b>
              </label>
              <input type="text" placeholder="Enter your SOP rating" />
            </div>
          </form>
        </div>
        <div className={styles.container_user_content}>
          <form>
            <div className={styles.password}>
              <label className={styles.usertext}>
                <b>CGPA</b>
              </label>
              <input type="text" placeholder="Enter your cgpa" />
            </div>
            <div className={styles.password}>
              <label className={styles.usertext}>
                <b>Research Papers</b>
              </label>
              <input
                type="text"
                placeholder="Enter number of research papers"
              />
            </div>
            <div className={styles.password}>
              <label className={styles.usertext}>
                <b>Password</b>
              </label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className={styles.password}>
              <label className={styles.usertext}>
                <b>Confirm Password</b>
              </label>
              <input type="password" placeholder="Re-Enter password" />
            </div>
          </form>
        </div>
        <div className={styles.signup_btn}>
          <div className={styles.login_btn}>
            <button className={`${styles.btn}`}>Sign Up</button>
          </div>
          <div className={styles.issue}>
            <span className={`${styles.txt}`}>
              Already have an account?
              {/* <Link to="#">
                <button className={styles.issue_btn}>
                  <b>Log In</b>
                </button>
              </Link> */}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
