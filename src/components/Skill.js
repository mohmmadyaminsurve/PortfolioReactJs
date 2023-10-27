import React from "react";
import "./Skill.scss";
import Skillimage from "./Images/Skillimage.png";
import Group from "./Images/Group1.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRef } from "react";

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, startEvent: "load", once: true });
  }, []);

  const myRef = useRef();
  useEffect(() => {
    console.log("myref", myRef.current);
  }, []);
  return (
    <>
      <section className="Skills" id="skill" style={{ backgroundImage: "url(" + Group + ")" }} data-aos="fade-down">
        <div className="section-wrap">
          <h2 className="title"> Skills</h2>
          <div className="flex-container">
            <div className="text-container">
              <h3>Profesional Skills</h3>

              <div className="container-skill" ref={myRef}>
                <div className="skill-name">
                  <p>Html/Sass/Ux</p>
                </div>
                <div className="skill-per">
                  <p>80%</p>
                </div>
              </div>

              <div className="container-skill">
                <div className="skill-name">
                  <p>Javascript/Jquery </p>
                </div>
                <div className="skill-per">
                  <p>60%</p>
                </div>
              </div>

              <div className="container-skill">
                <div className="skill-name">
                  <p>React js/Shopify </p>
                </div>
                <div className="skill-per">
                  <p>30%</p>
                </div>
              </div>

              <div className="container-skill">
                <div className="skill-name">
                  <p>Asp.net/MySql </p>
                </div>
                <div className="skill-per">
                  <p>40%</p>
                </div>
              </div>

              <div className="container-skill">
                <div className="skill-name">
                  <p>Wordpress/Php </p>
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
