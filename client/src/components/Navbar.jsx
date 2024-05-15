import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) {
      document.body.style.overflow = "hidden"; // Prevent scrolling on mobile devices
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
  }, [isActive]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  if (!isActive) {
    return (
      <div className="">
        <nav className="w-full h-20 flex justify-between px-4 items-center">
          <a href="#home" className="font-rubik text-white text-2xl">
            E2H
          </a>

          <button onClick={handleClick} className="sm:hidden">
            {isActive ? (
              <i class="fa-solid fa-bars  text-white"></i>
            ) : (
              <i class="fa-solid fa-xmark text-white text-xl"></i>
            )}
          </button>
        </nav>

        {!isActive ? (
          <div className="">
            <nav className="h-screen flex flex-col text-white justify-center items-center gap-5 font-roboto">
              <li className="list-none text-2xl">
                <a href="#home" className="hover:text-[#566CDE]">
                  Home
                </a>
              </li>
              <li className="list-none text-2xl">
                <a href="#translation" className="hover:text-[#566CDE]">
                  Translate
                </a>
              </li>
              <li className="list-none text-2xl">
                <a href="#about" className="hover:text-[#566CDE]">
                  About
                </a>
              </li>
              <li className="list-none text-2xl">
                <a href="#contact" className="hover:text-[#566CDE]">
                  Contact
                </a>
              </li>
              <li className="list-none text-2xl">
                <a href="#footer" className="hover:text-[#566CDE]">
                  Footer
                </a>
              </li>
            </nav>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
  return (
    <div>
      <nav className="w-full h-20 flex justify-between  mx-auto px-4 items-center">
        <a href="#home" className="font-rubik text-white text-3xl">
          E2H
        </a>

        <li className="sm:flex text-white font-roboto list-none gap-10 hidden">
          <a href="#home" className="hover:text-[#566CDE]">
            Home
          </a>
          <a href="#translation" className="hover:text-[#566CDE]">
            Translate
          </a>
          <a href="#about" className="hover:text-[#566CDE]">
            About
          </a>
          <a href="#contact" className="hover:text-[#566CDE]">
            Contact
          </a>
          <a href="#footer" className="hover:text-[#566CDE]">
            Footer
          </a>
        </li>

        <button onClick={handleClick} className="sm:hidden ">
          {isActive ? (
            <i class="fa-solid fa-bars  text-white"></i>
          ) : (
            <i class="fa-solid fa-xmark text-white text-xl"></i>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
