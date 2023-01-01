import React from "react";
import Navbar from "../components/_App/Navbar";
import AboutUsContent from "../components/AboutUs/AboutUsContent";
import Services from "../components/Services/Services";

import Testimonials from "../components/Common/Testimonials";
import Partners from "../components/Common/Partners";
import Footer from "../components/_App/Footer";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="pt-100 pb-70">
        <AboutUsContent />
      </div>

      <Services heading />

      <Testimonials />

      <Partners />

      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
