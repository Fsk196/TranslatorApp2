import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Home = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      "#para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.4,
        stagger: 0.1,
      }
    );

    gsap.to("#homeBtn", {
      opacity: 1,
      y: 10,
      delay: 1.5,
      ease: "bounce.in",
    });
  }, []);

  const handleTranslateClick = () => {
    // Scroll to the translation section
    document
      .getElementById("translation")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full h-screen rounded-md bg-gradient-to-l from-[#030000] to-[#001664] relative flex flex-col items-center justify-center antialiased">
      <div
        id="home"
        className="flex flex-col justify-center items-center w-full h-96 font-roboto relative z-10"
      >
        <h1
          id="title"
          className="text-center opacity-0 text-white text-2xl md:text-5xl font-bold my-5"
        >
          Translate your English text to Hindi
        </h1>
        <p id="para" className="text-[#566CDE] text-center w-80 mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <button
          id="homeBtn"
          onClick={handleTranslateClick}
          className="bg-[#0029FF] opacity-0 text-white text-lg px-4 py-2 rounded-md "
        >
          Translate
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Home;
