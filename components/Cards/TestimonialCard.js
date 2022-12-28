import React from "react";

const TestimonialCard = ({ singleData }) => {
  return (
    <div className="testimonials-item">
      <img
        className="testimonialImage"
        style={{ width: "100px", marginBottom: "10px" }}
        src={singleData.attributes.image.data.attributes.url}
        alt=""
      />
      <p>"{singleData.attributes.feedback}"</p>

      <ul>
        <li>
          <i className="bx bxs-star"></i>
        </li>
        <li>
          <i className="bx bxs-star"></i>
        </li>
        <li>
          <i className="bx bxs-star"></i>
        </li>
        <li>
          <i className="bx bxs-star"></i>
        </li>
        <li>
          <i className="bx bxs-star"></i>
        </li>
      </ul>

      <h3>{singleData.attributes.name}</h3>
      <span>{singleData.attributes.title}</span>
    </div>
  );
};

export default TestimonialCard;
