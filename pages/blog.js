import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import useFetch from ".././components/hooks/useFetch";
import BlogCard from "../components/Cards/BlogCard";

const Blog = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`
  );
  if (!data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <React.Fragment>
      <Navbar />

      <div className="blog-column-two-area ptb-100">
        <div className="container">
          <div className="row">
            {data?.map((singleData) => (
              <BlogCard singleData={singleData} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Blog;
