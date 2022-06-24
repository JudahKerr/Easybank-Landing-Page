import react, { useState } from "react";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";

function Navbar() {

  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
  }


  return (
    <div className="flex bg-white md:items-center justify-center items-center text-2xl  font-Public-Sans max-w-[1650px] md:max-w-auto ml-auto md:ml-44 md:mr-44 h-24 z-20">
      <img
        src={Logo}
        className="md:w-48 w-72 h-auto mr-2 mx-auto md:mx-0 cursor-pointer"
      ></img>
      <img src={Hamburger} onClick={handleClick} className="md:hidden flex h-auto w-16 ml-auto cursor-pointer"></img>
        <div class={isActive ? "block bg-white p-12 clear-both" : "hidden"}>
          <ul class="">
            <li class="active">Home</li>
            <li class="active">About</li>
            <li class="active">Contact</li>
            <li class="active">Blog</li>
            <li class="active">Careers</li>
          </ul>
        </div>
      <nav className="flex z-10 flex-grow-0 max-w-7xl mx-auto pl-8 pr-8">
        <ul className="absolute left-[1000px] md:static md:flex space-x-4 text-xl items-baseline  text-Grayish-Blue">
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
