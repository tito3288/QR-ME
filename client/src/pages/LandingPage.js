import React, { useState } from "react";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

const LandingPage = () => {
  const [url, setUrl] = useState("");
  const [qrImage, setQrImage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [animateQR, setAnimateQR] = useState(false);

  //ALL OF THE STYLES NEED TO BE MOVED TO A CSS FILE

  const generateQRCode = async () => {
    if (!url || url.trim() === "") {
      // Add vibration effect to the button
      const btn = document.querySelector(".button-like");
      btn.classList.add("vibrate-effect");

      // Remove the vibration effect after the animation duration
      setTimeout(() => {
        btn.classList.remove("vibrate-effect");
      }, 200); // 0.2 seconds as per our animation

      return; // Stop here and don't proceed with QR code generation
    }

    try {
      const response = await axios.post(
        "/generate-qr",
        { text: url },
        { responseType: "arraybuffer" }
      );
      const qrSrc =
        "data:image/png;base64," +
        btoa(String.fromCharCode(...new Uint8Array(response.data)));
      setQrImage(qrSrc);
      setAnimateQR(true);

      // Optional: Reset the animation state after the animation duration,
      // so if another QR is generated, the animation happens again.
      setTimeout(() => {
        setAnimateQR(false);
      }, 1000); // Animation duration, in this case, 1 second
    } catch (error) {
      console.error("Error generating QR code", error);
    }

    setUrl("");
  };

  const handleDownload = () => {
    if (!qrImage) {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 5000);
    } else {
      setShowWarning(false);
      // any additional download logic can go here if needed
    }
  };
  return (
    <div>
      <NavbarComp />
      <section className="qr-section">
        <Container>
          <Row lg={2} md={2} sm={1} xs={1} className="qr-row gx-0">
            <Col md={2} className="qr-col1 my-4">
              <img className="qr-col1-pic" src="logo.png" alt="logo-pic" />
              <input
                className="qr-input my-5"
                type="text"
                placeholder="Enter your website URL"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
              <button className="button-like" onClick={generateQRCode}>
                Generate
              </button>
            </Col>
            <Col md={2} className="qr-col2 my-4">
              {showWarning ? (
                <Container>
                  <p className="qr-warning">
                    Woah there, hold your horses, you need to generate a QR code
                    first.
                  </p>
                </Container>
              ) : (
                <Container>
                  <p className="qr-warning">
                    On mobile devices, press and hold the QR code image to
                    download.
                  </p>
                </Container>
              )}
              {qrImage ? (
                <img
                  className={`qr-generated my-4 ${
                    animateQR ? "drawn-in-effect" : ""
                  }`}
                  src={qrImage}
                  alt="Generated QR"
                />
              ) : (
                <img
                  alt="qr"
                  src="blank-qrcode.png"
                  className="qr-default my-4"
                />
              )}
              <a
                className="button-like"
                href={qrImage}
                download="qr-me-code.png"
                onClick={handleDownload}
              >
                Download Me
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="guy-qr-section">
        <Container>
          <h1 className="qr-title">What in the world is a QR code?</h1>
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "100%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/Gf5QiP1TWCO8qYKmt7"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
        {/* <img src="guy-qrcode.png" alt="guy-qr" className="guy-qr-pic" /> */}
      </section>
      <section style={{ backgroundColor: "#BEB2A9", height: "100%" }}>
        <Container>
          <p className="qr-paragraph">
            Whats up, my name is QR code. While I might seem like a simple
            pattern of black and white squares, when you scan me using a QR
            reader (Your phone), I can reveal valuable information or direct you
            to any link from the web. Think of me as a gateway to endless
            possibilities, all condensed into a tiny, scannable space. So, the
            next time you come across one of my kind, remember there's more than
            what meets the eye!
          </p>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
