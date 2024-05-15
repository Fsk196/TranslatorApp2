import React from "react";

const Home = () => {
  const handleTranslateClick = () => {
    // Scroll to the translation section
    document
      .getElementById("translation")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center w-full h-96 font-roboto"
    >
      <h1 className="text-center text-white text-2xl font-bold my-5">
        Translate your English text to Hindi
      </h1>
      <p className="text-[#566CDE] text-center w-80 mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>
      <button
        onClick={handleTranslateClick}
        className="bg-[#0029FF] text-white text-lg px-4 py-2 rounded-md"
      >
        Translate
      </button>
    </div>
  );
};

export default Home;
