import React from "react";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import useFetch from "../../components/hooks/useFetch";

const singlepost = ({ article_slug }) => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs/${
      article_slug?.split("-")[0]
    }?populate=*`
  );
  if (!data) return <div>Loading..</div>;
  if (error) return <p>Error :(</p>;
  return (
    <React.Fragment>
      <Navbar />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {data && (
                <div className="blog-details-content">
                  <div className="blog-details-img">
                    <img
                      src={data.attributes.FeaturedImage.data.attributes.url}
                      alt="Image"
                    />
                  </div>

                  <div className="blog-top-content">
                    <div className="news-content">
                      <ul className="admin">
                        <li>
                          <a href="#">
                            <i className="bx bx-user-circle"></i>
                            Posted by:{" "}
                            {data.attributes.author.data?.attributes.Name}
                          </a>
                        </li>

                        <li>
                          <a href="#">{data.attributes.Category}</a>
                        </li>

                        <li className="float">
                          <i className="bx bx-calendar-alt"></i>
                          {new Date(
                            data.attributes.DatePublished
                          ).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </li>
                      </ul>

                      <h3>{data.attributes.Title}</h3>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.attributes.Body,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export const getServerSideProps = async ({ params }) => {
  const article_slug = params.article_slug;
  return {
    props: { article_slug },
  };
};

export default singlepost;
