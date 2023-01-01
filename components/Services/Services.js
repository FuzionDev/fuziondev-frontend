import React from "react";

import ServiceCard from "../Cards/ServiceCard";
import useFetch from "../hooks/useFetch";

const Services = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/the-Services?populate=*`
  );

  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="services-area pb-70">
      <div className="container">
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
