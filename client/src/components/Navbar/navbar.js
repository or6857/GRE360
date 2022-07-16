import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="/home"
          style={{ color: "#4481EB", fontWeight: "bold", fontSize: "25px" }}
        >
          GRE360
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class={`navbar-nav ms-auto ${styles.sidebtn}`}>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "#4481EB" }}
              >
                OUR SERVICES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login" styles>
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
