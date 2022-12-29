import React from "react";
import Link from "next/link";
import ServiceCard from "../Cards/ServiceCard";

const Services = () => {
  return (
    <div className="services-area pb-70">
      <div className="container">
        <div className="section-title">
          <span>Cyber Security Services</span>
          <h2>
            You Can Protect Your Organization’s Cybersecurity By Services Us
          </h2>
        </div>

        <div className="row">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Services;
