import React, { useState } from "react";
import "./Navbar.scss";
import { Cross as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setclick] = useState(false);

  const ToogleHamburger = () => {
    setclick(!click);
  };

  const closeMenu = () => {
    setclick(false);
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="brandname">
            <h3> Yamin</h3>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-link" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="process"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
              >
                Process
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="skill"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="portfolio"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </li>
          </ul>

          <div className="hamburger" onClick={ToogleHamburger}>
            <Hamburger size={20} duration={0.8} direction="right" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
