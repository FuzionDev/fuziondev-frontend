import React from "react";
import Navbar from "../components/_App/Navbar";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/_App/Footer";

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />

      <section className="main-contact-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <ContactForm />
            </div>

            <div className="col-lg-4">
              <div className="contact-info">
                <h3>Our contact details</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>

                <ul className="address">
                  <li className="location">
                    <i className="bx bxs-location-plus"></i>
                    <span>Address</span>
                    6890 Blvd, The Bronx, NY 1058 New York, USA
                  </li>
                  <li>
                    <i className="bx bxs-phone-call"></i>
                    <span>Phone</span>
                    <a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
                    <a href="tel:+1-(514)-312-6677">+1 (514) 312-6677</a>
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <span>Email</span>
                    <a href="mailto:hello@FuzionDev.com">hello@FuzionDev.com</a>
                    <a href="#">skype: example</a>
                  </li>
                </ul>

                <div className="sidebar-follow-us">
                  <h3>Follow us:</h3>

                  <ul className="social-wrap">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default Contact;
