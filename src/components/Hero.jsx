import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import linkedin from "../assets/linkedin.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
    <section className={`relative w-full h-screen ${styles.heroSection}`}>
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center md:items-start gap-5`} style={{ marginTop: "50px" }}>
        {!isMobile && <div className='w-1 sm:h-80 h-40 violet-gradient md:ml-0 md:mr-5' style={{ marginTop: "50px" }} />}
        <h1 className={`${styles.heroHeadText} text-white`} style={{ fontSize: isMobile ? "5vw" : "80px", maxWidth: "90vw", textAlign: isMobile ? "center" : "left", paddingLeft: isMobile ? "10px" : "-390px" }}>
          Hey! I'm <br />
          <span style={{ color: "#915EFF" }} className='typed-text'></span>
        </h1>
        <div className='w-full md:w-1/2 md:ml-auto flex justify-center items-center mt-5 md:mt-0'>
          <ComputersCanvas style={{ width: "600px", height: "600px" }} />
        </div>
      </div>

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
