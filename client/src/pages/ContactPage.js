import React, { useState } from "react";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import "../Contact.css";
import SmoothScroll from "../components/SmoothScroll";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [invalidSubmit, setInvalidSubmit] = useState(false); // New state for invalid submission
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleButtonClick = (event) => {
    event.preventDefault(); // To prevent the form from refreshing the page
    if (message.trim() !== "") {
      setShowSuccess(true);
      setInvalidSubmit(false); // Reset invalid submission state
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    } else {
      setInvalidSubmit(true); // Set invalid submission state to true if message field is empty
      setTimeout(() => {
        setInvalidSubmit(false); // Reset invalid submission state after a short period of time
      }, 500); // Change this value to adjust the vibration duration
    }
  };

  return (
    <div>
      <NavbarComp />
      <SmoothScroll />
      <div className="contact-page">
        <h1>CONTACT</h1>
        <p>Want to talk to my creator?</p>
        <div>
          <motion.input
            value={name}
            onChange={(e) => setName(e.target.value)}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            placeholder="Name"
            className="my-5 dark-placeholder"
          />
          <motion.input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            placeholder="Email"
            className="my-5 dark-placeholder"
          />
          <motion.input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            placeholder="Subject"
            className="my-5 dark-placeholder"
          />
          <motion.input
            value={message}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            placeholder="Message"
            className="my-5 dark-placeholder"
            onChange={(event) => setMessage(event.target.value)}
          />
          <button
            className={`contactus-submitbtn ${showSuccess ? "success" : ""} ${
              invalidSubmit ? "vibrate" : ""
            }`} // Apply "vibrate" class when invalid submission state is true
            type="submit"
            onClick={handleButtonClick}
          >
            {showSuccess ? "Success!" : "Submit"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
