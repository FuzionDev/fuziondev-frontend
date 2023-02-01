import React from "react";

import ServiceCard from "../Cards/ServiceCard";
import useFetch from "../hooks/useFetch";
import Link from "next/link";

const Services = ({ heading }) => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/the-Services?populate=*`
  );

  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="services-area pb-70">
      <div className="container">
        {heading && (
          <div className="section-title">
            <span>Cyber Security Services</span>
            <h2>
              You Can Protect Your Organization’s Cybersecurity By Services Us
            </h2>
          </div>
        )}
        <div className="row">
          {data?.map((singleData) => (
            <ServiceCard singleData={singleData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
