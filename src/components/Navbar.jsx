import { useState, useRef } from "react";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const mobileMenu = useRef(null);
  const logo = useRef(null);

  function handleClick() {
    setActive(!isActive);
    mobileMenu.current.classList.toggle("opacity-100");
    // logo.current.classList.toggle("absolute top-[2000px]")
  }

  return (
    <div className="flex bg-white items-center md:justify-between text-2xl font-Public-Sans md:mx-44 mx-8 h-24 z-20">
      <img
        src={Logo}
        useRef={logo}
        alt="logo"
        className="md:w-48 w-72 h-auto mr-2 cursor-pointer"
      ></img>

      {/* Mobile Menu */}
      <div class={isActive ? "z-50" : "absolute bottom-[1000px]"}>
        <ul
          ref={mobileMenu}
          className=" bg-white mt-[550px] w-[100%] flex px-8 flex-col items-center justify-center transition-all ease-in duration-150"
        >
          <li className="py-8 cursor-pointer hover:text-Dark-Blue text-gray-500">
            Home
          </li>
          <li className="py-8 cursor-pointer hover:text-Dark-Blue text-gray-500">
            About
          </li>
          <li className="py-8 cursor-pointer hover:text-Dark-Blue text-gray-500">
            Contact
          </li>
          <li className="py-8 cursor-pointer hover:text-Dark-Blue text-gray-500">
            Blog
          </li>
          <li className="py-8 cursor-pointer hover:text-Dark-Blue text-gray-500">
            Careers
          </li>
        </ul>
      </div>
      <img
        src={Hamburger}
        alt="mobile menu"
        onClick={handleClick}
        className="md:hidden flex h-auto w-16 ml-auto cursor-pointer"
      ></img>
      <nav className="md:flex hidden z-10 flex-grow-0 max-w-7xl mx-auto pl-8 pr-8">
        <ul className="md:static md:flex space-x-4 text-xl items-baseline  text-Grayish-Blue">
          <div className="group">
            <li className="cursor-pointer hover:text-Dark-Blue group">Home</li>
            <div className="w-14 h-1 bg-gradient-to-r from-Gradient-1 to-Gradient-2 hidden group-hover:block relative top-6"></div>
          </div>
          <div className="group">
            <li className="cursor-pointer hover:text-Dark-Blue group">About</li>
            <div className="w-14 h-1 bg-gradient-to-r from-Gradient-1 to-Gradient-2 hidden group-hover:block relative top-6"></div>
          </div>
          <div className="group">
            <li className="cursor-pointer hover:text-Dark-Blue group">
              Contact
            </li>
            <div className="w-18 h-1 bg-gradient-to-r from-Gradient-1 to-Gradient-2 hidden group-hover:block relative top-6"></div>
          </div>
          <div className="group">
            <li className="cursor-pointer hover:text-Dark-Blue group">Blog</li>
            <div className="w-11 h-1 bg-gradient-to-r from-Gradient-1 to-Gradient-2 hidden group-hover:block relative top-6"></div>
          </div>
          <div className="group">
            <li className="cursor-pointer hover:text-Dark-Blue group">
              Careers
            </li>
            <div className="w-18 h-1 bg-gradient-to-r from-Gradient-1 to-Gradient-2 hidden group-hover:block relative top-6"></div>
          </div>
        </ul>
      </nav>
      <btn className="rounded-3xl md:flex hidden bg-gradient-to-r from-Gradient-1 to-Gradient-2 text-white items-center cursor-pointer justify-center h-14 font-Public-Sans text-center md:text-xl text-sm md:w-64 w-36 p-4 transform transition hover:from-Gradient-3 hover:to-Gradient-4">
        Request Invite
      </btn>
    </div>
  );
}

export default Navbar;
