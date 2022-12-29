import React from "react";
import MainBanner from "../components/Home/MainBanner";
import Features from "../components/Home/Features";
import Solution from "../components/Home/Solution";
import PriceTable from "../components/Common/PriceTable";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import FaqSection from "../components/Home/FaqSection";
import Partners from "../components/Common/Partners";
import LatestNews from "../components/Common/LatestNews";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import Testimonials from "../components/Common/Testimonials";
import TeamMember from "../components/Common/TeamMember";
import Services from "../components/Services/Services";

const Index = () => {
  return (
    <React.Fragment>
      <div className="bg-f5f7fa">
        <Navbar />
        <MainBanner />
        <div style={{ marginTop: "-200px" }}>
          <Features />
        </div>
        <Partners />
        <Services />
        <TeamMember />
        <Solution />
        <WhyChooseUs />
        <PriceTable />
        <Testimonials />
        <FaqSection />
        <div className="bg-white">
          <LatestNews />
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Index;
