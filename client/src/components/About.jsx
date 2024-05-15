import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center w-full h-96 font-roboto my-10"
    >
      <h1 className="text-center text-white text-xl font-bold mb-4 mt-5">
        About Translation
      </h1>
      <p className="text-[#566CDE] text-center sm:w-[30rem] w-80 ">
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
