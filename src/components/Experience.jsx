import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* Company */}
      <div className="mb-5">
        <h3 className="text-white text-[28px] font-bold leading-none">
          {experience.company_name}
        </h3>

        <p className="text-secondary text-[15px] mt-2">
          {experience.location}
        </p>
      </div>
      {/* LinkedIn-style roles */}
      <div className="relative ml-3">
        {/* Vertical line */}
        <div className="absolute left-0 top-3 bottom-0 w-px bg-gray-700 opacity-70"></div>
        {experience.sub_experiences.map((job, index) => (
          <div key={index} className="relative pl-4 pb-8">
            {/* Dot */}
            <span className="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full bg-gray-100 border border-gray-400"></span>
            <h4 className="m-0 text-white text-[20px] font-semibold leading-none">
              {job.title}
            </h4>

            <p className="m-0 text-secondary text-[15px] leading-none">
              {job.type}
            </p>

            <p className="text-gray-400 text-sm">
              {job.date}
            </p>

            <ul className="mt-3 list-disc ml-5 space-y-2">
              {job.points.map((point, i) => (
                <li
                  key={i}
                  className="text-white-100 text-sm tracking-wide"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");