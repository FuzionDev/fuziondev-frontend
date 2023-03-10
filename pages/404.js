import React from "react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="error-area ptb-100">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="error-content">
            <h1>
              <span className="a">4</span> <span className="red">0</span>{" "}
              <span className="b">4</span>
            </h1>
            <h3>Oops! Page Not Found</h3>
            <p>The page you were for could not be found.</p>

            <Link href="/">
              <a className="default-btn two">
                <span>Return To Home Page</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
