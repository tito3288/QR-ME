import React from "react";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const Footer = () => (
  //ALL OF THE STYLES NEED TO BE MOVED TO A CSS FILE

  <div
    style={{
      backgroundColor: "#FB605F",
      textAlign: "center",
      //   padding: "50px 20px",
      bottom: "0",
      height: "100%",
      position: "relative",
      width: "100%",
      color: "black",
      border: "solid black 3px",
    }}
  >
    <img className="footer-logo" src="logo.png" alt="footer-logo" />
    <p className="my-3" style={{ fontFamily: "Major Mono Display, monospace" }}>
      QR-ME ©{currentYear}
    </p>
    <p className="footer-link my-2 mx-2">Terms of Service</p>
    <Link to="/Contact" className="footer-link my-3 mx-2">
      Contact
    </Link>
  </div>
);

export default Footer;
