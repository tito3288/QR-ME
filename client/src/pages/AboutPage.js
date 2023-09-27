import React from "react";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import { Container } from "react-bootstrap";
import "../About.css";

const AboutPage = () => {
  return (
    <div>
      <NavbarComp />
      <SmoothScroll />
      <div className="about-page">
        <Container>
          <p>
            Hello! I am the creator of QR-ME. No, not the inventor of QR codes
            (what a revolutionary idea that would've been!), but I've built this
            nifty tool to transform your ideas into intricate patterns. While
            these patterns might look like hieroglyphics to us, our smartphones
            decipher them effortlessly. I suspect you're familiar with the
            process, but just in case, here's the rundown: Simply input the URL
            you're keen on, generate its corresponding QR code, download, and
            print. You can showcase it on business cards, at restaurants, family
            events, sporting venues – you name it! Anyone with a smartphone can
            then point and shoot, leading them straight to the desired section
            of your website, be it a landing page, menu, or any other
            destination. Best part? All QR codes crafted through QR-ME come at
            the unbeatable price of $0. That's right – they're entirely free!
            Cheers 🍻
          </p>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
