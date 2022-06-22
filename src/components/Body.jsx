import react from "react";
import Background from "../images/bg-intro-desktop.svg";
import Mockup from "../images/image-mockups.png";
function Body() {
  return (
    <div className="bg-Light-Grayish-Blue flex justify-center h-screen overflow-hidden">
      <div className="flex flex-justify-center items-center flex-wrap flex-1 flex-col pt-60 pl-44">
        <h1 className="text-7xl text-Dark-Blue  font-Public-Sans h-24 self-end w-[650px] leading-tight">
          Next generation digital banking
        </h1>
        <p className="text-Grayish-Blue font-Public-Sans mt-32 w-[525px] text-xl self-start leading-normal">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <btn className="rounded-3xl bg-gradient-to-r from-Gradient-1 to-Gradient-2 text-white md w-64 h-14 pt-2.5 text-xl text-center mt-12 self-start ">
          Request Invite
        </btn>
      </div>
      <div className="flex justify-center flex-auto">
        <img
          src={Background}
          alt="background splash"
          className="h-auto w-[5000px] scale-125 -skew-x-6 relative bottom-48 left-[550px]"
        ></img>
        <img
          src={Mockup}
          className="h-auto relative right-[330px] bottom-12 scale-125"
        ></img>
      </div>
    </div>
  );
}

export default Body;
