import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="banner-area banner-area-three ">
      <div className="d-table mt-5 pt-3">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="banner-content">
                  <span className="top-title">World Class Software Agency</span>
                  <h1>Leading the new digital world</h1>
                  <p>
                    FuzionDev aspires to enhance the productivity and growth of
                    your business by providing 'Smart Solutions' and 'Digitally
                    Transforming' your business processes by using latest
                    State-Of-The-Art Technologies
                  </p>

                  <div className="banner-btn">
                    <Link href="/contact">
                      <a className="default-btn">
                        <span>Contact Us</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="banner-image">
                  <img
                    style={{ border: "1px solid gray", background: "#294985 " }}
                    src="/images/banner/banner-img.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
