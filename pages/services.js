import React from "react";
import Navbar from "../components/_App/Navbar";
import Services from "../components/Services/Services";
import Footer from "../components/_App/Footer";
import Features from "../components/Home/Features";

const ServicesStyleOne = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Features />
      <div className="section-title">
        <span>Cyber Security Services</span>
        <h2>
          You Can Protect Your Organization’s Cybersecurity By Services Us
        </h2>
      </div>
      <Services />

      <Footer />
    </React.Fragment>
  );
};

export default ServicesStyleOne;
