import React from "react";

const FeatureCard = ({ singleData }) => {
  return (
    <div className="">
      <div className="single-feature overly-one">
        <div className="overly-two">
          <div className="title">
            <i className="flaticon-testing"></i>
            <h3>{singleData.attributes.title}</h3>
          </div>
          <p>{singleData.attributes.detail}</p>
          <div className="feature-shape">
            <img src="/images/feature-shape-2.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
