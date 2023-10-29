import { useState } from "react";
import React from "react";
import "./Portfolio.scss";
import websiteone from "./Images/darjeelingwelfare.png";
import Neharkar from "./Images/neharkar.png";
import Neuron from "./Images/neuron.png";
import Autoparts from "./Images/autoparts.png";
import Figureslim from "./Images/figureslim.png";
import Retreat from "./Images/retereat.png";
import FriendsFoundation from "./Images/frinedsfoundation.png";
import Guardain from "./Images/guardian.png";
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
                  <a href="https://darjeelingwelfaresociety.com/">
                    <div className="image-container">
                      <img src={websiteone} alt="" />
                    </div>
                    <div className="text-container">
                      <h3> Darjeeling Welfare Society </h3>
                      <p>
                        NGO website led by former Indian Foreign Secretary, Harsh Vardhan Shringla. Showcasing impactful
                        projects and initiatives dedicated to positive change and social betterment.
                      </p>
                    </div>
                  </a>
                </div>

                <div className={showtab === 1 ? "content content-active " : "content"}>
                  <a href="https://neharkarwigstudio.com/">
                    <div className="image-container">
                      <img src={Neharkar} alt="" />
                    </div>
                    <div className="text-container">
                      <h3> Nehar Kar Wig Studio </h3>
                      <p>
                        Tailored website design for Nehar Kar Wig Studio, showcasing their diverse range of wig products
                        and services. Designed to provide an intuitive and engaging user experience.
                      </p>
                    </div>
                  </a>
                </div>

                <div className={showtab === 1 ? "content content-active " : "content"}>
                  <a href="https://figureslim.in/">
                    <div className="image-container">
                      <img src={Figureslim} alt="" />
                    </div>
                    <div className="text-container">
                      <h3> FigureSlim </h3>
                      <p>
                        Custom website design for FigureSlim, dedicated to promoting health and wellness. Explore their
                        range of products and services for a healthier lifestyle, all within an intuitive online
                        environment.
                      </p>
                    </div>
                  </a>
                </div>

                <div className={showtab === 1 ? "content content-active " : "content"}>
                  <a href="https://bridgekash.net/neuroncapacitor/index.html">
                    <div className="image-container">
                      <img src={Neuron} alt="" />
                    </div>
                    <div className="text-container">
                      <h3> Neuron Capacitor</h3>
                      <p>
                        Innovative website design for "Neuron Capacitor," showcasing cutting-edge technology and
                        solutions. Explore the future of innovation in an engaging online environment.
                      </p>
                    </div>
                  </a>
                </div>

                <div className={showtab === 1 ? "content content-active " : "content"}>
                  <a href="https://friendsfoundation.in/">
                    <div className="image-container">
                      <img src={FriendsFoundation} alt="" />
                    </div>
                    <div className="text-container">
                      <h3> Friends Foundation</h3>
                      <p>
                        Tailored website design for "Friends Foundation," a platform dedicated to charitable initiatives
                        and community support. Discover their mission, projects, and how they're making a positive
                        impact, all within an easy-to-navigate digital space.
                      </p>
                    </div>
                  </a>
                </div>

                <div className={showtab === 1 ? "content content-active " : "content"}>
                  <a href="https://retreatpestmanagement.com/">
                    <div className="image-container">
                      <img src={Retreat} alt="" />
                    </div>
                    <div className="text-container">
                      <h3> Retreat Pest Management </h3>
                      <p>
                        Custom website design for "Retreat Pest Management," your go-to solution for pest control and
                        management. Explore their services and expertise in a user-friendly online environment.
                      </p>
                    </div>
                  </a>
                </div>

                <div className={showtab === 1 ? "content content-active " : "content"}>
                  <a href="https://guardianangelssecurity.in/">
                    <div className="image-container">
                      <img src={Guardain} alt="" />
                    </div>
                    <div className="text-container">
                      <h3> Guardian Angels Security</h3>
                      <p>
                        Tailored website design for "Guardian Angels Security," your trusted partner in safeguarding
                        homes and businesses. Explore their security solutions and services within a user-friendly
                        online platform.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className={showtab === 2 ? "content content-active " : "content"}>
                <div className="image-container">
                  <img src={Autoparts} alt="" />
                </div>
                <div className="text-container">
                  <h3> AutoParts24</h3>
                  <p>
                    Custom website design for "AutoParts24," your one-stop destination for automotive parts and
                    accessories. Explore their extensive inventory and find the right components for your vehicle, all
                    in a user-friendly online environment.
                  </p>
                </div>
              </div>

              <div className={showtab === 3 ? "content content-active " : "content "}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
