import React from "react";
import useFetch from "../hooks/useFetch";
import Link from "next/link";
import BlogCard from "../Cards/BlogCard";

const LatestNews = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`
  );

  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="blog-area pb-70">
      <div className="container">
        <div className="section-title">
          <span>Latest News</span>
          <h2>Read The Latest Articles From Us</h2>
        </div>

        <div className="row">
          {data
            ?.sort(
              (a, b) =>
                Date.parse(b.attributes.DatePublished) -
                Date.parse(a.attributes.DatePublished)
            )
            .slice(0, 3)
            .map((singleData) => (
              <BlogCard singleData={singleData} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
