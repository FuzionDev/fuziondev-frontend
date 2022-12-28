import React from "react";
import TeamMemberCard from "../Cards/TeamMemberCard";
import useFetch from ".././hooks/useFetch";

const TeamMember = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/team-members?populate=*`
  );
  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="team-area dark-bg pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Professionals</span>
          <h2 className="text-white">Meet Our Skilled Team</h2>
        </div>

        <div className="row">
          {data?.map((singleData) => (
            <TeamMemberCard singleData={singleData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
