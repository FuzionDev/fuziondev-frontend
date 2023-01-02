import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import useFetch from "../hooks/useFetch";

const options = {
  loop: true,
  margin: 30,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1000,
  autoplayTimeout: 1000,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};

const PartnersTwo = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/partners?populate=*`
  );
  console.log(data);
  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="partner-area bg-color ptb-100">
      <div className="container">
        <OwlCarousel {...options} className="partner-slide owl-carousel ">
          {data?.map((singleData) => (
            <div className="partner-item">
              <a href={singleData.attributes.websiteLink} target="_blank">
                <img
                  src={singleData.attributes.logo.data.attributes.url}
                  alt="image"
                  style={{
                    maxHeight: "120px",
                    objectFit: "contain",
                  }}
                />
              </a>
              {singleData.attributes.name && (
                <p>{singleData.attributes.name}</p>
              )}
              *
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default PartnersTwo;
