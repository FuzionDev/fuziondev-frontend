import Link from "next/link";
import React from "react";

const FeatureCard = ({ singleData }) => {
  return (
    <div className="" style={{ cursor: "pointer" }}>
      <Link href={`/features/${singleData.id}-${singleData.attributes.Slug}`}>
        <div className="single-feature overly-one">
          <div className="overly-two">
            <div className="title">
              <i className="flaticon-testing"></i>

              <h3>{singleData.attributes.title}</h3>
            </div>
            <p>{singleData.attributes.detail}</p>
            <a className="read-more">
              Click to Read More <i className="flaticon-right-arrow"></i>
            </a>
            <div className="feature-shape">
              <img src="/images/feature-shape-2.png" alt="Image" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeatureCard;
