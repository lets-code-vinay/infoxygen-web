import * as React from "react";

// import LOGO from "../../assets/logos/logo.png";

const UnderMaintenance = () => {
  return (
    <>
      <div style={styles.container}>
        <img
          src={
            new URL(
              "../../assets/images/maintenance-in-png.png",
              import.meta.url
            )
          }
          width={"44%"}
          alt="maintenance-page"
        />

        <h1 style={styles.heading}>We’ll Be Back Soon!</h1>
        <p style={styles.message}>
          Our website is currently undergoing scheduled maintenance.
          <br />
          We’ll be back online shortly. Thank you for your patience!
        </p>
        <p style={styles.contact}>
          Contact us at: <a href="mailto:hr@infoxygen.com">hr@infoxygen.com</a>
        </p>
      </div>
    </>
  );
};

// Styles
const styles = {
  container: {
    minHeight: `calc(100vh - 171px)`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#388e3c1c",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  logo: {
    width: "200px",
    marginBottom: "20px",
  },
  svgWrapper: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "20px",
    maxWidth: "500px",
  },
  contact: {
    fontSize: "1rem",
    color: "#777",
  },
};

export default UnderMaintenance;
