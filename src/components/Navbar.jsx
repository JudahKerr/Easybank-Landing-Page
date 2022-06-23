import react, { useState } from "react";
import Logo from "../images/logo.svg";

function Navbar() {
  return (
    <div className="flex bg-white items-center justify-center text-2xl  font-Public-Sans h-24 z-20">
      <img
        src={Logo}
        className="w-48 h-auto relative right-96 mr-2 cursor-pointer"
      ></img>
      <nav className="flex z-10 flex-grow-0">
        <ul className="flex space-x-4 text-xl items-baseline flex-grow-0 text-Grayish-Blue">
          <div className="group">
            <li className="cursor-pointer hover:text-Dark-Blue group">Home</li>
            <div className="w-14 h-1 bg-gradient-to-r from-Gradient-1 to-Gradient-2 hidden group-hover:block relative top-6"></div>
          </div>
          <div className="group">
            <li className="cursor-pointer hover:text-Dark-Blue group">About</li>
            <div className="w-14 h-1 bg-gradient-to-r from-Gradient-1 to-Gradient-2 hidden group-hover:block relative top-6"></div>
          </div>
          <div className="group">
            <li className="cursor-pointer hover:text-Dark-Blue group">Contact</li>
            <div className="w-18 h-1 bg-gradient-to-r from-Gradient-1 to-Gradient-2 hidden group-hover:block relative top-6"></div>
          </div>
          <div className="group">
            <li className="cursor-pointer hover:text-Dark-Blue group">Blog</li>
            <div className="w-11 h-1 bg-gradient-to-r from-Gradient-1 to-Gradient-2 hidden group-hover:block relative top-6"></div>
          </div>
          <div className="group">
            <li className="cursor-pointer hover:text-Dark-Blue group">Careers</li>
            <div className="w-18 h-1 bg-gradient-to-r from-Gradient-1 to-Gradient-2 hidden group-hover:block relative top-6"></div>
          </div>


          {/* <li className="">About</li>
          <li className="cursor-pointer hover:text-Dark-Blue">Contact</li>
          <li className="cursor-pointer hover:text-Dark-Blue">Blog</li>
          <li className="cursor-pointer hover:text-Dark-Blue">Careers</li> */}
          <btn className="rounded-3xl flex bg-gradient-to-r from-Gradient-1 to-Gradient-2 relative left-96 text-white md w-64 items-center cursor-pointer justify-center h-14 font-Public-Sans text-center transform transition hover:from-Gradient-3 hover:to-Gradient-4">
            Request Invite
          </btn>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
