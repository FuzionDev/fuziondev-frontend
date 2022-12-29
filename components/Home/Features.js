import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import FeatureCard from "../Cards/FeatureCard";

const Features = () => {
  const options = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoplayTimeout: 1000,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },

      1200: {
        items: 3,
      },
    },
  };

  return (
    <div className="feature-area feature-area-three">
      <div className="container">
        <div className="row">
          <OwlCarousel
            className="partner-slide owl-carousel owl-theme"
            {...options}
          >
            <FeatureCard />
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Features;
