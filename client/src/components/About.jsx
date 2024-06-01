import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#aboutTitle",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        duration: 1.5,
        y: 0,
        // delay: 1,
        scrollTrigger: "#aboutTitle",
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      "#aboutPara",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: "#aboutTitle",
        y: 0,
        // delay: 1.4,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center w-full h-96 font-roboto my-10"
    >
      <h1
        id="aboutTitle"
        className="text-center text-white text-xl font-bold mb-4 mt-5"
      >
        About Translation
      </h1>
      <p
        id="aboutPara"
        className="text-[#566CDE] text-center sm:w-[30rem] w-80 "
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  );
};

export default About;
