import React, { useState } from "react";
import Translation from "./Translation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Translate = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const targetLanguage = "hi_IN";

  useGSAP(() => {
    gsap.from("#translateBtn", {
      scrollTrigger: "#translation",
      x: -100,
      opacity: 0,
      ease: "bounce",
    });
  }, []);

  const translateText = async () => {
    setIsTranslating(true);
    try {
      const response = await fetch("http://localhost:5000/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, "target-language": targetLanguage }),
      });
      console.log("Response Sended");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setTranslatedText(data.translation);
      console.log(data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsTranslating(false); // Set isTranslating to false when translation completes or encounters an error
    }
  };

  return (
    <div
      id="translation"
      className="flex flex-col justify-center items-center w-full h-96 font-roboto my-20 sm:my-10"
    >
      <h1 className="text-center text-white text-xl font-bold mb-10">
        Translate Here
      </h1>
      <div className="flex flex-col sm:flex-row gap-x-4">
        <Translation lang="English" text={text} setText={setText} />
        {translatedText && <Translation lang="hindi" text={translatedText} />}
      </div>
      <button
        id="translateBtn"
        onClick={translateText}
        disabled={isTranslating}
        className="bg-[#0029FF] text-white opacity-1 text-lg px-4 py-2 rounded-md mt-4 hover:scale-105"
      >
        {isTranslating ? "Translating..." : "Translate"}
      </button>
    </div>
  );
};

export default Translate;
