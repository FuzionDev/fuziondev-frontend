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

      <Services heading />

      <Footer />
    </React.Fragment>
  );
};

export default ServicesStyleOne;
