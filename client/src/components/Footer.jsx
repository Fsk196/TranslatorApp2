import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Footer = () => {
  useGSAP(() => {
    gsap.from("#footer", {
      opacity: 0,
      scrollTrigger: "#conBtn",
      duration: 1.5,
      y: 100,
      ease: "power1.in",
    });
  }, []);
  return (
    <div
      id="footer"
      className="flex flex-col sm:flex-row justify-center items-center w-full h-14 font-roboto mt-10 gap-5"
    >
      <h2 id="fooText" className="text-[#0038FF] text-lg">
        Copyright @2024 Fsk
      </h2>
      <div className="text-white flex gap-4 text-2xl">
        <a href="">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
