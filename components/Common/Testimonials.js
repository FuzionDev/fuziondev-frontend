import React, { useState } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import useFetch from ".././hooks/useFetch";
import TestimonialCard from "../Cards/TestimonialCard";

const options = {
  items: 1,
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  navText: [
    "<i class='flaticon-left-arrow'></i>",
    "<i class='flaticon-right-arrow'></i>",
  ],
};

const Testimonials = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonials?populate=*`
  );
  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="testimonials-area ptb-100 jarallax">
      <div className="container">
        <div className="testimonials">
          <span>What our customers say</span>

          <OwlCarousel
            className="testimonials-slide owl-carousel owl-theme"
            {...options}
          >
            {data?.map((singleData) => (
              <TestimonialCard singleData={singleData} />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
