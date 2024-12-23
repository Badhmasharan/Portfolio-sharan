import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import linkedin from "../assets/linkedin.png";

const Hero = () => {
  
  useEffect(() => {
    const options = {
      strings: ["Badhmasharan", "a Web Developer", "a React Enthusiast", "a JavaScript Ninja"],
      typeSpeed: 100,
      backSpeed: 35,
      loop: true,
    };

    const typed = new Typed(".typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={`relative w-full h-screen `} >
    <div
      className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className='flex flex-col justify-center items-center mt-5'>
        {/* <div className='w-5 h-5 rounded-full bg-[#915EFF]' /> */}
        <div className='w-1 sm:h-48 h-40 violet-gradient' />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hey!<br></br>
          I'm <span style={{ color: "#915EFF" }} className='typed-text'></span>
        </h1>

    
      </div>
    </div>

    <ComputersCanvas />
      <div className='absolute xs:bottom-22 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
