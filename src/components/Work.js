import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import "./Work.scss";

const Work = () => {
  return (
    <>
      <section className="Work" id="work">
        <div className="section-wrap">
          <h2 className="title">Work Timeline</h2>
          <VerticalTimeline lineColor="white">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#4d1adb", color: "#fff" }}
              icon={<FaBriefcase />}
              date="March 2023 to April 2023"
            >
              <h4>Web Developer Internship at Bridgekash International Pvt Ltd</h4>
              <p>
                Internship in web development. Collaborated with developers, worked on front-end and back-end projects,
                and gained valuable coding experience.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#4d1adb", color: "#fff" }}
              icon={<FaBriefcase />}
              date="April 2023 (Ongoing)"
            >
              <h4>Web Developer at Bridgekash International Pvt Ltd</h4>
              <p>
                Transitioned from intern to permanent web developer role. Enhanced web applications, contributed to new
                features, and optimized user experience.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default Work;
