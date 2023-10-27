import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="section-wrap">
          <p className="footer__title">Yamin</p>
          <div className="footer__social">
            <a href="/" className="footer__icon">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="/" className="footer__icon">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="/" className="footer__icon">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
          <p className="footer__copy">&copy; Yamin. All rigths reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
