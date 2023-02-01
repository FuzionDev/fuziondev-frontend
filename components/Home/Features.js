import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import FeatureCard from "../Cards/FeatureCard";
import useFetch from ".././hooks/useFetch";

const Features = ({ id, heading }) => {
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
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/features?populate=*`
  );
  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="feature-area feature-area-three">
      <div className="container">
        {heading && (
          <div className="section-title mt-5">
            <h2>
              You Can Protect Your Organization’s Cybersecurity By Services Us
            </h2>
          </div>
        )}
        <div className="row">
          <OwlCarousel
            className="partner-slide owl-carousel owl-theme"
            {...options}
          >
            {id
              ? data
                  ?.filter((singleData) => singleData.id !== id)
                  .map((singleData) => <FeatureCard singleData={singleData} />)
              : data?.map((singleData) => (
                  <FeatureCard singleData={singleData} />
                ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Features;
