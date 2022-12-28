import React from "react";
import Link from "../../utils/ActiveLink";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header className="header-area">
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md">
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="/services" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Services
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/blog" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Blogs
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        About
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="others-option">
                <div className="get-quote">
                  <Link href="/contact">
                    <a className="default-btn">
                      <span>Get a Quote</span>
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
