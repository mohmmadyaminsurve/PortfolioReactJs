import React from "react";
import "./Navbar.scss";
import "./About.scss";
import Aboutme from "./Images/Aboutme.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, startEvent: "load", once: true });
  }, []);
  return (
    <>
      <section className="About-Us" id="about">
        <div className="section-wrap">
          <h2 className="title">About Me</h2>
          <div className="flex-container">
            <div className="image-container">
              <img data-aos="fade-down" src={Aboutme} alt="" />
            </div>
            <div className="text-container">
              <h3 data-aos="fade-down"> I am Yamin</h3>
              <p data-aos="fade-down">
                A passionate web developer blending code and design for seamless online experiences. With expertise in
                both front-end and back-end, I turn ideas into pixel-perfect realities. Let's collaborate to bring your
                digital vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
