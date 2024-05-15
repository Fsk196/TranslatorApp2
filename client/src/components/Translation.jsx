import React from "react";

const Translation = ({ lang, text, setText }) => {
  return (
    <div className="flex flex-col my-4 sm:my-0">
      <div>
        <button className="bg-[#040F6A] border-[#000AFB] border-2 text-white text-md px-3 py-1 rounded-full">
          {lang}
        </button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-80 h-36 rounded-lg mt-4 bg-[#040F6A] border-[#000AFB] border-2 p-1 text-white focus:outline-none resize-none"
        placeholder="Type Here..."
      />
    </div>
  );
};

export default Translation;
