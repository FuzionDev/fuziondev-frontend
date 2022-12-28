import React from "react";
import Link from "next/link";

const BlogCard = ({ singleData }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-blog-posts">
        <Link href={`/blogs/${singleData.id}-${singleData.attributes.Slug}`}>
          <a>
            <img
              src={singleData.attributes.FeaturedImage.data.attributes.url}
              alt="Image"
            />
          </a>
        </Link>
        <div className="single-blog-content">
          <span>{singleData.attributes.Category}</span>

          <h3>
            <Link
              href={`/blogs/${singleData.id}-${singleData.attributes.Slug}`}
            >
              <a>{singleData.attributes.Title}</a>
            </Link>
          </h3>

          <ul className="admin">
            <li>
              <a href={`/blogs/${singleData.id}-${singleData.attributes.Slug}`}>
                <i className="bx bx-user-circle"></i>
                {singleData.attributes.author.data?.attributes.Name}
              </a>
            </li>
            <li className="float">
              <i className="bx bx-calendar-alt"></i>
              {new Date(singleData.attributes.DatePublished).toLocaleDateString(
                undefined,
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </li>
          </ul>
          <div className="btn btn-success mt-3">
            <Link
              className="text-whit"
              href={`/blogs/${singleData.id}-${singleData.attributes.Slug}`}
            >
              <p style={{ margin: "0" }}>Read More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
