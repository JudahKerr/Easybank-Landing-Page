import react from "react";
import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Youtube from "../images/icon-youtube.svg";
import Twitter from "../images/icon-twitter.svg";
import Pintrest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";
function Footer() {
  return (
    <div className="bg-Dark-Blue h-[200px] pt-10">
      <footer>
        <div className="grid grid-cols-3 pl-44 pr-44 gap-10">
          <div className="grid grid-cols-1 grid-rows-2 items-stretch justify-items-start gap-10">
            <img src={Logo} className="relative top-1.5"></img>
            <h2 className="text-3xl font-Public-Sans text-white absolute font-bold leading-snug left-[235px]">
              easybank
            </h2>
            <div className="grid grid-cols-5 gap-3">
              <img src={Facebook} className="h-8 w-8 cursor-pointer filter hover:brightness-[25%] hover:hue-rotate-[30deg] hover:saturate-[200]"></img>
              <img src={Youtube} className="h-8 w-8 cursor-pointer filter hover:brightness-[25%] hover:hue-rotate-[30deg] hover:saturate-[200]"></img>
              <img src={Twitter} className="h-8 w-8 cursor-pointer filter hover:brightness-[25%] hover:hue-rotate-[30deg] hover:saturate-[200]"></img>
              <img src={Pintrest} className="h-8 w-8 cursor-pointer filter hover:brightness-[25%] hover:hue-rotate-[30deg] hover:saturate-[200]"></img>
              <img src={Instagram} className="h-8 w-8 cursor-pointer filter hover:brightness-[25%] hover:hue-rotate-[30deg] hover:saturate-[200]"></img>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-3">
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">About Us</h3>
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">Contact</h3>
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">Blog</h3>
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">Careers</h3>
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">Support</h3>
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">Privacy Policy</h3>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 justify-items-end items-end">
            <btn className="rounded-3xl flex bg-gradient-to-r from-Gradient-1 to-Gradient-2 text-white cursor-pointer md w-48 items-center justify-center h-14 text-center transform transition hover:from-Gradient-3 hover:to-Gradient-4">
              Request Invite
            </btn>
            <p className="text-gray-500 font-Public-Sans">© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
