import React from "react";
import services from "../../assets/images/services/services-7.jpg";

const ServiceCard = ({ singleData }) => {
  console.log(services);
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="single-services">
        <div className="services-img">
          <img src={services?.src} alt="Image" />
        </div>
        <div className="services-content">
          <h3>
            <a href={singleData.attributes.link} target="_blank">
              {singleData.attributes.title}
            </a>
          </h3>
          <div className="content">
            <a href={singleData.attributes.link} target="_blank">
              <div
                dangerouslySetInnerHTML={{
                  __html: singleData.attributes.detail
                    .split(" ")
                    .slice(0, 10)
                    .join(" "),
                }}
              ></div>
            </a>

            <a
              className="read-more"
              href={singleData.attributes.link}
              target="_blank"
            >
              Go to Website <i className="flaticon-right-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
