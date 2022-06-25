import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Youtube from "../images/icon-youtube.svg";
import Twitter from "../images/icon-twitter.svg";
import Pintrest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";
function Footer() {
  return (
    <div className="bg-Dark-Blue xl:h-[200px] h-auto pt-10 overflow-hidden">
      <footer>
        <div className="grid md:grid-cols-3 grid-cols-1 xl-px-44 px-12 gap-10">
          <div className="grid grid-cols-1 xl:grid-rows-2 xl:items-stretch items-center md:justify-items-start justify-items-center gap-10">
            <img src={Logo} alt="logo" className="md:relative top-1.5 hidden md:visible"></img>
            <h2 className="text-3xl font-Public-Sans text-white  font-bold leading-snug left-[235px]">
              easybank
            </h2>
            <div className="grid grid-cols-5 md:gap-3 gap-6 items-center">
              <img
                src={Facebook}
                alt="facebook"
                className="h-8 w-8 cursor-pointer filter hover:brightness-[25%] hover:hue-rotate-[30deg] hover:saturate-[200]"
              ></img>
              <img
                src={Youtube}
                alt="youtube"
                className="h-8 w-8 cursor-pointer filter hover:brightness-[25%] hover:hue-rotate-[30deg] hover:saturate-[200]"
              ></img>
              <img
                src={Twitter}
                alt="twitter"
                className="h-8 w-8 cursor-pointer filter hover:brightness-[25%] hover:hue-rotate-[30deg] hover:saturate-[200]"
              ></img>
              <img
                src={Pintrest}
                alt="pintrest"
                className="h-8 w-8 cursor-pointer filter hover:brightness-[25%] hover:hue-rotate-[30deg] hover:saturate-[200]"
              ></img>
              <img
                src={Instagram}
                alt="instagram"
                className="h-8 w-8 cursor-pointer filter hover:brightness-[25%] hover:hue-rotate-[30deg] hover:saturate-[200]"
              ></img>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 md:mx-0 mx-auto md:text-xl text-2xl justify-items-center md:gap-0 gap-2">
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">
              About Us
            </h3>
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">
              Contact
            </h3>
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">
              Blog
            </h3>
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">
              Careers
            </h3>
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">
              Support
            </h3>
            <h3 className="text-white font-Public-Sans cursor-pointer hover:text-emerald-600">
              Privacy Policy
            </h3>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 md:justify-items-end md:items-end justify-center justify-items-center">
            <btn className="rounded-3xl flex bg-gradient-to-r from-Gradient-1 to-Gradient-2 text-white cursor-pointer md w-48 items-center justify-center h-14 text-center transform transition hover:from-Gradient-3 hover:to-Gradient-4">
              Request Invite
            </btn>
            <p className="text-gray-500 font-Public-Sans md:py-0 py-2">
              © Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
