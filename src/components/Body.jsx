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
        <btn className="rounded-3xl flex bg-gradient-to-r from-Gradient-1 to-Gradient-2 self-start text-white md text-2xl w-64 items-center justify-center h-14 mt-12 font-Public-Sans text-center">
            Request Invite
          </btn>
      </div>
      <div className="flex justify-center flex-auto overflow-visible">
        <img
          src={Background}
          alt="background splash"
          className="h-auto w-[5000px] scale-125 -skew-x-6 relative bottom-48 left-[550px]"
        ></img>
        <img
          src={Mockup}
          className="h-auto relative right-[330px] bottom-8 z-30"
        ></img>
      </div>
    </div>
  );
}

export default Body;
