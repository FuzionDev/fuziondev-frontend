import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer className="footer-area pt-100 pb-70 jarallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  d-flex justify-content-center  col-md-12">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="logo">
                    <img src="/images/logo.png" alt="Image" />
                  </a>
                </Link>

                <p>
                  Enhancing the productivity and growth of your business by
                  providing 'Smart Solutions' and 'Digitally Transforming' your
                  business processes by using latest State-Of-The-Art
                  Technologies.
                </p>

                <ul className="social-icon">
                  <li>
                    <a
                      href="https://www.facebook.com/FuzionDEV"
                      target="_blank"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/fuziondev/?hl=en"
                      target="_blank"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/77573908/admin/"
                      target="_blank"
                    >
                      <i className="bx bxl-linkedin-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/dev_fuzion" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/FuzionDev/"
                      target="_blank"
                    >
                      <i className="bx bxl-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4  d-flex justify-content-center  col-md-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="address">
                  <li className="location">
                    <i className="bx bxs-location-plus"></i>
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <a href="mailto:hello@FuzionDev.com">admin@FuzionDev.com</a>
                    <a href="#" target="_blank"></a>
                  </li>
                  <li>
                    <i className="bx bxs-phone-call"></i>
                    <a href="tel:+92-349-1754334">+92-349-1754334</a>
                    <a href="tel:+92-303-9239298">+92-303-9239298</a>
                    <a href="tel:+92-304-5172021">+92-304-5172021</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4  d-flex justify-content-center  col-md-6">
              <div className="single-footer-widget">
                <h3>Resources</h3>

                <ul className="import-link">
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Our Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy-right-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>Copyright &copy; {currentYear} FuzionDev. </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul className="footer-menu">
                <li>
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
