import React from "react";
import "./Herosection.scss";
import Heroimageone from "./Images/Heroimageone.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, startEvent: "load", once: true });
  }, []);

  return (
    <>
      <section className="Hero-Section" data-aos="fade-down">
        <div className="section-wrap">
          <div className="flex-container">
            <div className="text-container">
              <h1 className="line-1 anim-typewriter">
                Hi, <br /> I'am <span>Yamin</span> <br /> Web Developer
              </h1>
              <div className="btn">
                <span>
                  <a href="yaminsurve-cv.pdf" download={"one.pdf"}>
                    Download Cv
                  </a>
                </span>
              </div>
            </div>
            <div className="image-container">
              <img src={Heroimageone} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
