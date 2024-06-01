import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Translation = ({ lang, text, setText }) => {
  useGSAP(() => {
    gsap.from("#btn", {
      scrollTrigger: "#btnid",
      duration: 2,
      x: -100,
      opacity: 0,
      ease: "bounce",
    });
    gsap.from("#text", {
      scrollTrigger: "#text",
      duration: 2,
      x: 100,
      opacity: 0,
      ease: "bounce",
    });
  }, []);

  return (
    <div className="flex flex-col my-4 sm:my-0">
      <div id="btnid">
        <button
          id="btn"
          className="bg-[#040F6A] border-[#000AFB] border-2 text-white text-md px-3 py-1 rounded-full"
        >
          {lang}
        </button>
      </div>
      <textarea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-80 h-36 rounded-lg mt-4 bg-[#040F6A] border-[#000AFB] border-2 p-1 text-white focus:outline-none resize-none"
        placeholder="Type Here..."
      />
    </div>
  );
};

export default Translation;
