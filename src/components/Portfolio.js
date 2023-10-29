import { useState } from "react";
import React from "react";
import "./Portfolio.scss";
import websiteone from "./Images/darjeelingwelfare.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, startEvent: "load", once: true });
  }, []);

  const [showtab, hidetab] = useState(1);

  const toggletabs = (index) => {
    hidetab(index);
  };

  return (
    <>
      <section className="Portfolio" id="portfolio">
        <div className="section-wrap">
          <h2 className="title"> My Portfolio</h2>
          <div className="Portfolio-tab-container">
            <div className="tabs-container">
              <div className={showtab === 1 ? "tabs tabs-active" : "tabs"} onClick={() => toggletabs(1)}>
                B2B
              </div>
              <div className={showtab === 2 ? "tabs tabs-active" : "tabs"} onClick={() => toggletabs(2)}>
                E-commerce
              </div>
              <div className={showtab === 3 ? "tabs tabs-active" : "tabs"} onClick={() => toggletabs(3)}>
                Personal Projects
              </div>
            </div>

            <div className="content-tabs " data-aos="fade-up">
              <div className="container-holder">
                <div className={showtab === 1 ? "content content-active " : "content"}>
                  <div className="image-container">
                    <img src={websiteone} alt="" />
                  </div>
                  <div className="text-container">
                    <h3> content1 </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus at corporis amet autem tempora
                      ut culpa dolore totam a, vero est, aspernatur molestias ex deleniti cum. Repudiandae officiis
                      quaerat doloremque?
                    </p>
                  </div>
                </div>

                <div className={showtab === 1 ? "content content-active " : "content"}>
                  <div className="image-container">
                    <img src="/" alt="" />
                  </div>
                  <div className="text-container">
                    <h3> content1 </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus at corporis amet autem tempora
                      ut culpa dolore totam a, vero est, aspernatur molestias ex deleniti cum. Repudiandae officiis
                      quaerat doloremque?
                    </p>
                  </div>
                </div>

                <div className={showtab === 1 ? "content content-active " : "content"}>
                  <div className="image-container">
                    <img src="/" alt="" />
                  </div>
                  <div className="text-container">
                    <h3> content1 </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus at corporis amet autem tempora
                      ut culpa dolore totam a, vero est, aspernatur molestias ex deleniti cum. Repudiandae officiis
                      quaerat doloremque?
                    </p>
                  </div>
                </div>
              </div>

              <div className={showtab === 2 ? "content content-active " : "content"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus at corporis amet autem tempora ut
                  culpa dolore totam a, vero est, aspernatur molestias ex deleniti cum. Repudiandae officiis quaerat
                  doloremque?
                </p>
                <h3> Content 2</h3>
              </div>

              <div className={showtab === 3 ? "content content-active " : "content "}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus at corporis amet autem tempora ut
                  culpa dolore totam a, vero est, aspernatur molestias ex deleniti cum. Repudiandae officiis quaerat
                  doloremque?
                </p>
                <h3> Content 3</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
