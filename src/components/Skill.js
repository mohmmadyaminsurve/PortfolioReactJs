import React, { useEffect } from "react";
import "./Skill.scss";
import Skillimage from "./Images/Skillimage.png";
import Group from "./Images/Group1.svg";
import UIUX from "./Images/UIX.png";
import Php from "./Images/php.png";
import Asp from "./Images/aspnet.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, startEvent: "load", once: false });
  }, []);

  return (
    <>
      <section className="Skills" id="skill" style={{ backgroundImage: `url(${Group})` }}>
        <div className="section-wrap">
          <h2 className="title">Skills</h2>
          <div className="flex-container">
            <div className="text-container" data-aos="fade-down">
              <h3>Professional Skills</h3>
              <div className="container-skill">
                <div className="skill-name">
                  <p>
                    <span className="bx bxl-html5 "></span>Html/<span className="bx bxl-sass"></span>Sass/
                    <span className="bx bxl-javascript"></span>Javascript
                  </p>
                </div>
                <div className="skill-per">
                  <p>80%</p>
                </div>
              </div>

              <div className="container-skill">
                <div className="skill-name">
                  <p>
                    <span className="bx bxl-react"></span>Reactjs/<span className="bx bxl-jquery"></span>Jquery
                  </p>
                </div>
                <div className="skill-per">
                  <p>30%</p>
                </div>
              </div>
              <div className="container-skill">
                <div className="skill-name">
                  <p>
                    <span className="bx bxl-wordpress"></span>Wordpress/ <span className="bx bxl-shopify"></span>Shopify
                  </p>
                </div>
                <div className="skill-per">
                  <p>30%</p>
                </div>
              </div>
              <div className="container-skill">
                <div className="skill-name">
                  <p>
                    <span>
                      <img src={Asp} alt="" />
                    </span>
                    Asp.net/
                    <span>
                      <img src={Php} alt="" />
                    </span>
                    Php
                  </p>
                </div>
                <div className="skill-per">
                  <p>20%</p>
                </div>
              </div>
              <div className="container-skill">
                <div className="skill-name">
                  <p>
                    <span>
                      <img src={UIUX} alt="" />
                    </span>
                    Ui/Ux
                  </p>
                </div>
                <div className="skill-per">
                  <p>20%</p>
                </div>
              </div>
            </div>
            <div className="image-container" data-aos="fade-down">
              <img src={Skillimage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
