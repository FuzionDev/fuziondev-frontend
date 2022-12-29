import React from "react";
import Link from "next/link";

const ServiceCard = () => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="single-services">
        <div className="services-img">
          <Link href="/services-details">
            <a>
              <img src="/images/services/services-1.jpg" alt="Image" />
            </a>
          </Link>
        </div>
        <div className="services-content">
          <h3>
            <Link href="/services-details">
              <a>Website Scanning</a>
            </Link>
          </h3>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.
            </p>
            <Link href="/services-details">
              <a className="read-more">
                Read More <i className="flaticon-right-arrow"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
