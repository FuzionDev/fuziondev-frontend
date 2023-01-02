import React from "react";
import Link from "next/link";

const ServiceCard = ({ singleData }) => {
  console.log(singleData);
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="single-services">
        <div className="services-img">
          <img
            src={singleData.attributes.image.data.attributes.url}
            alt="Image"
          />
        </div>
        <div className="services-content">
          <h3>
            <Link
              href={`/allServices/${singleData.id}-${singleData.attributes.Slug}`}
            >
              <a>{singleData.attributes.title}</a>
            </Link>
          </h3>
          <div className="content">
            <Link
              href={`/allServices/${singleData.id}-${singleData.attributes.Slug}`}
            >
              <a>
                <div
                  dangerouslySetInnerHTML={{
                    __html: singleData.attributes.detail
                      .split(" ")
                      .slice(0, 10)
                      .join(" "),
                  }}
                ></div>
              </a>
            </Link>
            <Link
              href={`/allServices/${singleData.id}-${singleData.attributes.Slug}`}
            >
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
