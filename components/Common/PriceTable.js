import React from "react";
import useFetch from ".././hooks/useFetch";
import PriceCard from "../Cards/PriceCard";

const PriceTable = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pricings?populate=*`
  );
  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="pricing-area dark-bg pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Security Packages</span>
          <h2 className="text-white">
            We have different types of pricing plans
          </h2>
        </div>

        <div className="row">
          {data
            ?.sort(
              (a, b) =>
                parseFloat(a.attributes.Price) - parseFloat(b.attributes.Price)
            )
            .map((singleData) => (
              <PriceCard singleData={singleData} />
            ))}
        </div>
      </div>

      <div className="pricing-shape shape-three">
        <img src="/images/pricing-right-shape.png" alt="Image" />
      </div>
    </div>
  );
};

export default PriceTable;
