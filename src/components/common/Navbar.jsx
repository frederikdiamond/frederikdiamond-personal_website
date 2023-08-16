import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  // Background opacity
  const [opacity, setOpacity] = useState(0);
  // Blurry effect behind the navbar
  const [blurValue, setBlurValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (0.3 * window.innerHeight)) * 100;
      const newOpacity = Math.min(0.75, scrollPercent / 100); // Maximum 75% opacity
      setOpacity(newOpacity);

      const maxScroll = document.body.clientHeight * 0.05;
      const newBlurValue = Math.min(15, (window.scrollY / maxScroll) * 15); // Maximum 15px for backdrop blur
      setBlurValue(newBlurValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    backdropFilter: `blur(${blurValue}px)`,
  };

  return (
    <nav
      className="navbar w-full flex justify-center fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0)] backdrop-blur-0"
      style={navbarStyle}
    >
      <div className="flex justify-between w-[90%] mt-[15px] mb-[15px]">
        {/* Brand */}
        <div className="text-center leading-[25px] group">
          <p className="text-[20px] font-black text-[#4FACFE] group-hover:drop-shadow-[0_0px_15px_rgba(79,172,254,1)] transition-all ease-in-out duration-200">
            FREDERIK
          </p>
          <p className="text-[20px] font-black text-[#FE5196] group-hover:drop-shadow-[0_0px_15px_rgba(254,81,150,1)] transition-all ease-in-out duration-200">
            DIAMOND
          </p>
        </div>
        {/* Menu */}
        <div className="flex items-center">
          <NavHashLink
            to="#home"
            smooth
            className="text-[15px] font-medium px-[15px]"
          >
            HOME
          </NavHashLink>
          <NavHashLink
            to="#projects"
            smooth
            className="text-[15px] font-medium px-[15px]"
          >
            PROJECTS
          </NavHashLink>
          <NavHashLink
            to="#about"
            smooth
            className="text-[15px] font-medium px-[15px] mr-[10px]"
          >
            ABOUT
          </NavHashLink>
          <NavHashLink
            to="#contact"
            smooth
            className="text-[15px] font-medium px-[15px] py-[10px] border-[2px] border-white rounded-full hover:bg-white hover:text-black transition-all ease-in-out"
          >
            CONTACT
          </NavHashLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
