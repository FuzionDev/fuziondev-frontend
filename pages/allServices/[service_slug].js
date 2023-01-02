import React from "react";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import useFetch from "../../components/hooks/useFetch";
import Services from "../../components/Services/Services";

const singlepost = ({ service_slug }) => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/the-Services/${
      service_slug.split("-")[0]
    }?populate=*`
  );
  if (!data) return <div>Loading..</div>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <React.Fragment>
      <Navbar />
      <div className="services-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="services-details-content">
                <div>
                  {data && (
                    <div className="services-content">
                      <div className="services-details-one">
                        <img
                          src={data.attributes.image.data.attributes.url}
                          alt="Image"
                        />
                      </div>
                      <h2>{data.attributes.title}</h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.attributes.detail,
                        }}
                      ></p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <h1>Other Services Provided are</h1>
            <Services id={data.id} />
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export const getServerSideProps = async ({ params }) => {
  const service_slug = params.service_slug;
  return {
    props: { service_slug },
  };
};

export default singlepost;
