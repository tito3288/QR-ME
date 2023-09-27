import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "react-bootstrap";
import "../App.css";

function NavbarComp() {
  //ALL OF THE STYLES NEED TO BE MOVED TO A CSS FILE
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const scrollListener = () => {
      setIsTop(window.scrollY < 50); // Modify the number here to adjust the scroll distance
    };

    window.addEventListener("scroll", scrollListener);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []); // The empty array ensures this effect runs only once on mount

  return (
    <Container>
      <Navbar
        fixed="top"
        expand="lg"
        style={{ backgroundColor: "#FB605F", border: "solid black 3px" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src="logo.png" alt="logo" />
          </Navbar.Brand>
          {/* <Button variant="link" onClick={toggleShow} className="d-lg-none">
            <MenuIcon style={{ color: "black" }} fontSize="large" />
          </Button> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ marginTop: "20px" }}
            // className={`custom-navbar-collapse ${show ? "show" : ""}`}
          >
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              style={{ fontWeight: "bold", padding: "20px", fontSize: "20px" }}
            >
              <Link
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "black",
                  //   padding: "5px",
                  fontFamily: "Major Mono Display, monospace",
                  fontSize: "30px",
                }}
                to="/"
              >
                HOME
              </Link>
              <Link
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "black",
                  //   padding: "5px",
                  fontFamily: "Major Mono Display, monospace",
                  fontSize: "30px",
                }}
                to="/Contact"
              >
                SUPPORT
              </Link>
              <Link
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "black",
                  //   padding: "5px",
                  fontFamily: "Major Mono Display, monospace",
                  fontSize: "30px",
                }}
                to="/About"
              >
                ABOUT
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavbarComp;
