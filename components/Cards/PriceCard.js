import React from "react";
import Link from "next/link";

const PriceCards = ({ singleData }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="single-pricing overly-one">
        <div className="overly-two">
          <div className="pricing-title">
            <h3>{singleData.attributes.Title}</h3>
            <h2>{singleData.attributes.Price}</h2>
            <span>/ Per month</span>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: singleData.attributes.Description,
            }}
          ></div>

          <Link href="/">
            <a className="default-btn">
              <span>Register Now</span>
            </a>
          </Link>

          <div className="pricing-shape">
            <img src="/images/pricing-shape.png" alt="Image" />
          </div>

          <div className="pricing-shape-2">
            <img src="/images/pricing-shape-2.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCards;
