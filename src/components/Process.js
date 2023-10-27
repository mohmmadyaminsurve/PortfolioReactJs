import React from "react";
import "./Process.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import searchimg from "./Images/search.svg";
import support from "./Images/support.svg";
import layout from "./Images/layout.svg";
import Development from "./Images/vs-code.svg";
import Bug from "./Images/bug.svg";
import Client from "./Images/customer.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Process = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, startEvent: "load", once: true });
  }, []);

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="Process" id="process" data-aos="fade-down" data-os-offset="50">
        <div className="section-wrap">
          <h2 className="title">Process</h2>
          <div className="slider-rough">
            <Slider {...settings}>
              <div className="card">
                <div className="icon-container">
                  <img src={searchimg} alt="" />
                </div>
                <h3>Discovery & Research</h3>
                <p>
                  {" "}
                  Understand project goals, target audience, and requirements through client meetings and research.
                </p>
              </div>
              <div className="card">
                <div className="icon-container">
                  <img src={layout} alt="" />
                </div>
                <h3>Planning & Strategy</h3>
                <p> Develop a project plan, define milestones, and select technologies for a structured approach.</p>
              </div>

              <div className="card">
                <div className="icon-container">
                  <img src={Development} alt="" />
                </div>
                <h3>Design & Development</h3>
                <p>
                  Create user-friendly designs and implement both front-end and back-end functionalities using chosen
                  technologies.
                </p>
              </div>

              <div className="card">
                <div className="icon-container">
                  <img src={Bug} alt="" />
                </div>
                <h3>Testing & Quality Assurance</h3>
                <p>
                  Conduct thorough testing for bugs, usability, and responsive design to ensure a flawless user
                  experience.
                </p>
              </div>

              <div className="card">
                <div className="icon-container">
                  <img src={Client} alt="" />
                </div>
                <h3>Client Collaboration</h3>
                <p> Involve clients throughout, gather feedback, and make revisions to align with their vision.</p>
              </div>

              <div className="card">
                <div className="icon-container">
                  <img src={support} alt="" />
                </div>
                <h3>Launch & Support</h3>
                <p>
                  Deploy the project smoothly, offering post-launch support to address issues and ensure satisfaction.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
