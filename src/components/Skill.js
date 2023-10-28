import React, { useEffect, useRef } from "react";
import "./Skill.scss";
import Skillimage from "./Images/Skillimage.png";
import Group from "./Images/Group1.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, startEvent: "load", once: false });
  }, []);

  const myRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2, // Adjust this threshold as needed
  });

  useEffect(() => {
    if (inView) {
      fillSkillBars();
    }
  }, [inView]);

  const fillSkillBars = () => {
    const skillBars = myRef.current.querySelectorAll(".container-skill");

    skillBars.forEach((bar, index) => {
      const fill = bar.querySelector(".skill-per");
      const fillWidth = bar.getAttribute("data-fill");
      fill.style.width = fillWidth;
    });
  };

  return (
    <>
      <section
        className="Skills"
        id="skill"
        style={{ backgroundImage: `url(${Group})` }}
        data-aos="fade-down"
        ref={ref}
      >
        <div className="section-wrap">
          <h2 className="title">Skills</h2>
          <div className="flex-container">
            <div className="text-container">
              <h3>Professional Skills</h3>
              <div className="container-skill" ref={myRef} data-fill="80%">
                <div className="skill-name">
                  <p>Html/Sass/Ux</p>
                </div>
                <div className="skill-per">
                  <p>80%</p>
                </div>
              </div>
              <div className="container-skill" ref={myRef} data-fill="60%">
                <div className="skill-name">
                  <p>Javascript/Jquery</p>
                </div>
                <div className="skill-per">
                  <p>60%</p>
                </div>
              </div>
              <div className="container-skill" ref={myRef} data-fill="30%">
                <div className="skill-name">
                  <p>React js/Shopify</p>
                </div>
                <div className="skill-per">
                  <p>30%</p>
                </div>
              </div>
              <div className="container-skill" ref={myRef} data-fill="40%">
                <div className="skill-name">
                  <p>Asp.net/MySql</p>
                </div>
                <div className="skill-per">
                  <p>40%</p>
                </div>
              </div>
              <div className="container-skill" ref={myRef} data-fill="30%">
                <div className="skill-name">
                  <p>Wordpress/Php</p>
                </div>
                <div className="skill-per">
                  <p>30%</p>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img src={Skillimage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
