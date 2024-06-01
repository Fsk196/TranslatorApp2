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

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsActive(true); // Close the menu on mobile after clicking a link
  };

  if (!isActive) {
    return (
      <div className="">
        <nav className="w-full h-20 flex justify-between px-4 items-center z-10">
          <a
            onClick={handleSmoothScroll}
            href="#home"
            className="font-rubik text-white text-2xl"
          >
            E2H
          </a>

          <button onClick={handleClick} className="sm:hidden">
            {isActive ? (
              <i className="fa-solid fa-bars text-white"></i>
            ) : (
              <i className="fa-solid fa-xmark text-white text-xl"></i>
            )}
          </button>
        </nav>

        {!isActive ? (
          <div className="">
            <nav className="h-screen flex flex-col text-white justify-center items-center gap-5 font-roboto z-10">
              <li className="list-none text-2xl">
                <a
                  href="#home"
                  onClick={handleSmoothScroll}
                  className="hover:text-[#566CDE]"
                >
                  Home
                </a>
              </li>
              <li className="list-none text-2xl">
                <a
                  href="#translation"
                  onClick={handleSmoothScroll}
                  className="hover:text-[#566CDE]"
                >
                  Translate
                </a>
              </li>
              <li className="list-none text-2xl">
                <a
                  href="#about"
                  onClick={handleSmoothScroll}
                  className="hover:text-[#566CDE]"
                >
                  About
                </a>
              </li>
              <li className="list-none text-2xl">
                <a
                  href="#contact"
                  onClick={handleSmoothScroll}
                  className="hover:text-[#566CDE]"
                >
                  Contact
                </a>
              </li>
              <li className="list-none text-2xl">
                <a
                  href="#footer"
                  onClick={handleSmoothScroll}
                  className="hover:text-[#566CDE]"
                >
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
      <nav className="w-full h-20 flex justify-between mx-auto px-4 items-center z-10">
        <a
          onClick={handleSmoothScroll}
          href="#home"
          className="font-rubik text-white text-3xl"
        >
          E2H
        </a>

        <ul className="sm:flex text-white font-roboto list-none gap-10 hidden">
          <li>
            <a
              href="#home"
              onClick={handleSmoothScroll}
              className="hover:text-[#566CDE]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#translation"
              onClick={handleSmoothScroll}
              className="hover:text-[#566CDE]"
            >
              Translate
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={handleSmoothScroll}
              className="hover:text-[#566CDE]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleSmoothScroll}
              className="hover:text-[#566CDE]"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#footer"
              onClick={handleSmoothScroll}
              className="hover:text-[#566CDE]"
            >
              Footer
            </a>
          </li>
        </ul>

        <button onClick={handleClick} className="sm:hidden">
          {isActive ? (
            <i className="fa-solid fa-bars text-white"></i>
          ) : (
            <i className="fa-solid fa-xmark text-white text-xl"></i>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
