import React from "react";
import styles from "./dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.dashHeading}>
            <div className={styles.heading_content_img}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className={styles.heading_content}>
              <h3>DASHBOARD</h3>
            </div>
          </div>
          <div className={styles.dashContent}>
            <div className={styles.item1}>
              <div className={styles.fa1}>
                <i className="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className={styles.content1}>
                <h4>Home</h4>
              </div>
            </div>
            <div className={styles.item1}>
              <div className={styles.fa1}>
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
              <div className={styles.content1}>
                <h4>Profile</h4>
              </div>
            </div>
            <div className={styles.item1}>
              <div className={styles.fa1}>
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
              </div>
              <div className={styles.content1}>
                <h4>Analytics</h4>
              </div>
            </div>
            <div className={styles.item1}>
              <div className={styles.fa1}>
                <i className="fa fa-list-ul" aria-hidden="true"></i>
              </div>
              <div className={styles.content1}>
                <h4>Tasks</h4>
              </div>
            </div>
            <div className={styles.item1}>
              <div className={styles.fa1}>
                <i className="fa fa-cog" aria-hidden="true"></i>
              </div>
              <div className={styles.content1}>
                <h4>Settings</h4>
              </div>
            </div>
            <div className={styles.item1}>
              <div className={styles.fa1}>
                <i className="fa fa-question-circle" aria-hidden="true"></i>
              </div>
              <div className={styles.content1}>
                <h4>Help</h4>
              </div>
            </div>
            <div className={styles.item2}>
              <div className={styles.fa2}>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
              </div>
              <div className={styles.content2}>
                <h4>Log Out</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.main_item1_heading}>
            <div className={styles.skills_heading}>
              <h2>Skills</h2>
            </div>
            <div className={styles.help_heading}>
              <i className="fa fa-cogs" aria-hidden="true"></i>
            </div>
          </div>
          <div className={styles.main_item1_content}>
            <div className={styles.box1}></div>
            <div className={styles.box1}></div>
            <div className={styles.box1}></div>
            <div className={styles.box1}></div>
          </div>
          <div className={styles.main_item2_heading}>
            <h2>My Courses</h2>
          </div>
          <div className={styles.main_item2_content}>
            <div className={styles.box2}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
