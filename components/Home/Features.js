import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

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
            <div className="">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3>Pen Testing</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <div className="feature-shape">
                    <img src="/images/feature-shape-2.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cybercrime"></i>
                    <h3>Cyber Threat Hunting</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <div className="feature-shape">
                    <img src="/images/feature-shape-2.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" offset-sm-3 offset-lg-0">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3>Security Center</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <div className="feature-shape">
                    <img src="/images/feature-shape-2.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className=" offset-sm-3 offset-lg-0">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3>Security ter</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <div className="feature-shape">
                    <img src="/images/feature-shape-2.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Features;
