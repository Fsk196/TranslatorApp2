import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Contact = () => {
  useGSAP(() => {
    gsap.from("#conInput", {
      opacity: 0,
      scrollTrigger: "#conInput",
      x: -200,
      duration: 1.5,
      ease: "power1.in",
    });

    gsap.from("#conText", {
      opacity: 0,
      scrollTrigger: "#conInput",
      x: 200,
      duration: 1.5,
      ease: "power1.in",
    });

    gsap.from("#conBtn", {
      opacity: 0,
      scrollTrigger: "#conInput",
      y: 100,
      duration: 1.5,
      ease: "power1.in",
    });
  }, []);

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center w-full h-96 font-roboto my-10"
    >
      <h1 className="text-center text-white text-xl font-bold mb-4">Contact</h1>
      <form className="flex flex-col gap-y-5">
        <input
          type="text"
          id="conInput"
          placeholder="Name"
          className="bg-[#040F6A] border-[#000AFB] border-2 rounded-md text-white focus:outline-none resize-none w-72 p-2"
        />
        <input
          type="email"
          id="conInput"
          placeholder="Email"
          className="bg-[#040F6A] border-[#000AFB] border-2 rounded-md text-white focus:outline-none resize-none w-72 p-2"
        />
        <textarea
          id="conText"
          className="bg-[#040F6A] border-[#000AFB] border-2 rounded-md text-white focus:outline-none resize-none w-72 p-2 h-36"
          placeholder="Message"
        ></textarea>
        <div className="flex justify-center">
          <button
            id="conBtn"
            className="bg-[#0029FF] text-white text-lg px-4 py-2 rounded-md"
          >
            <a href="#">Send</a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
