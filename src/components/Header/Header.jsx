import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles["centralized-header"]}>
        <div style={styles.logo}>
          <img
            src={
              new URL("../../assets/logos/io2-logo-light.png", import.meta.url)
                .href
            }
            alt="light-logo"
            width={"150px"}
          />
        </div>
        <nav style={styles.nav}>
          <a
            href="/"
            style={{
              ...styles.link,
              pointerEvents: "none",
              color: "#aaa",
              cursor: "not-allowed",
            }}
          >
            Career
          </a>
          <a
            href="/about"
            style={{
              ...styles.link,
              pointerEvents: "none",
              color: "#aaa",
              cursor: "not-allowed",
            }}
          >
            Services
          </a>
          <a
            href="/services"
            style={{
              ...styles.link,
              pointerEvents: "none",
              color: "#aaa",
              cursor: "not-allowed",
            }}
          >
            Industries
          </a>
          <a
            href="/contact"
            style={{
              ...styles.link,
              pointerEvents: "none",
              color: "#aaa",
              cursor: "not-allowed",
            }}
          >
            Our Blog
          </a>
          <a
            href="/contact"
            style={{
              ...styles.link,
              pointerEvents: "none",
              color: "#aaa",
              cursor: "not-allowed",
            }}
          >
            About Infoxygen
          </a>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0rem 1rem",
    backgroundColor: "#013A4C",
    boxShadow: "inset 0 8px 30px -6px rgba(2, 0, 0)",
    // color: "#fff",
  },

  "centralized-header": {
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    padding: "5px 0",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.2s",
  },
};

export default Header;
