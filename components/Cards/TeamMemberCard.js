import React from "react";

const TeamMemberCard = ({ singleData }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="single-team">
        <img
          src={singleData.attributes.ProfilePic.data.attributes.url}
          alt="Image"
          style={{
            height: "25rem",
            width: "100%",
            objectFit: "cover",
          }}
        />

        <div className="team-content">
          <h3>{singleData.attributes.Name}</h3>
          <span>{singleData.attributes.Title}</span>

          <ul>
            <li>
              <a href={singleData.attributes.github} target="_blank">
                <i className="bx bxl-github"></i>
              </a>
            </li>
            <li>
              <a href={singleData.attributes.insta} target="_blank">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href={singleData.attributes.facebook} target="_blank">
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a href={singleData.attributes.linkedin} target="_blank">
                <i className="bx bxl-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
