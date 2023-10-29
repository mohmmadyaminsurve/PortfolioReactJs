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
        <VerticalTimeline lineColor="white">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#4d1adb", color: "#fff" }}
            icon={<FaBriefcase />}
            date="2014-2015"
          >
            <h3>it domain</h3>
            <p> BSC Computer science</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#4d1adb", color: "#fff" }}
            icon={<FaBriefcase />}
            date="2014-2015"
          >
            <h3>it domain</h3>
            <p> BSC Computer science</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
};

export default Work;
