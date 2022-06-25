import { useState, useRef } from "react";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const mobileMenu = useRef(null);
  const logo = useRef(null);

  function handleClick() {
    setActive(!isActive);
    mobileMenu.current.classList.toggle("mt-[500px]");
  }

  return (
    <div className="flex bg-white items-center md:justify-evenly text-2xl font-Public-Sans lg:mx-48 mx-2 h-24 z-20">
      <img
        src={Logo}
        useRef={logo}
        alt="logo"
        className={
          isActive
            ? "absolute bottom-[2000px] md:static"
            : "md:w-48 w-72 h-auto mr-2 static cursor-pointer"
        }
      ></img>

      {/* Mobile Menu */}
      <div
        class={
          isActive
            ? "z-50 w-[100%] static md:absolute bottom-[2000px]"
            : "absolute bottom-[2000px]"
        }
      >
        <ul
          ref={mobileMenu}
          className=" bg-white  w-[100%] ml-0 border-solid border-black border-2 flex px-8 flex-col items-center justify-center transition-all ease-in-out duration-100"
        >
          <li className="py-8 cursor-pointer hover:text-Dark-Blue text-gray-500 text-3xl">
            Home
          </li>
          <hr className="border-solid border-black border-x-2 w-[50%]"></hr>
          <li className="py-8 cursor-pointer hover:text-Dark-Blue text-gray-500 text-3xl">
            About
          </li>
          <hr className="border-solid border-black border-x-2 w-[50%]"></hr>

          <li className="py-8 cursor-pointer hover:text-Dark-Blue text-gray-500 text-3xl">
            Contact
          </li>
          <hr className="border-solid border-black border-x-2 w-[50%]"></hr>

          <li className="py-8 cursor-pointer hover:text-Dark-Blue text-gray-500 text-3xl">
            Blog
          </li>
          <hr className="border-solid border-black border-x-2 w-[50%]"></hr>

          <li className="py-8 cursor-pointer hover:text-Dark-Blue text-gray-500 text-3xl">
            Careers
          </li>
        </ul>
      </div>
      <img
        src={Hamburger}
        alt="mobile menu"
        onClick={handleClick}
        className={isActive ? "md:hidden flex h-auto w-16 ml-2 cursor-pointer" : "md:hidden flex h-auto w-16 ml-auto cursor-pointer" }
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
