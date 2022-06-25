import Background from "../images/bg-intro-desktop.svg";
import Mockup from "../images/image-mockups.png";
function Body() {
  return (
    <div className="bg-Light-Grayish-Blue flex md:justify-center justify-center md:mx-0 mx-auto md:p-12 xl:w-7/8 xl:text-left text-center overflow-hidden ">
      <div className="flex flex-justify-center items-center flex-wrap xl:flex-1 flex-col lg:pt-60 xl:pl-44 mx-auto p-12 md:p-0">
        <h1 className="text-7xl text-Dark-Blue  font-Public-Sans h-24 md:self-end md:w-[650px] px-2 leading-tight w-screen">
          Next generation digital banking
        </h1>
        <p className="text-Grayish-Blue font-Public-Sans md:mt-32 mt-72 md:w-[525px] w-screen px-2 text-xl xl:self-start leading-normal">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <btn className="rounded-3xl flex cursor-pointer bg-gradient-to-r from-Gradient-1 to-Gradient-2 xl:self-start text-white md text-2xl w-64 items-center justify-center h-14 mt-12 font-Public-Sans text-center md:mx-0 mx-auto transform transition hover:from-Gradient-3 hover:to-Gradient-4 mb-2">
          Request Invite
        </btn>
      </div>
      <div className="justify-center flex-auto overflow-visible xl:flex xl:static absolute bottom-[2000px]">
        <img
          src={Background}
          alt="background splash"
          className="h-auto w-[5000px] scale-125 -skew-x-6 relative bottom-48 left-[550px] hidden lg:block"
        ></img>
        <img
          src={Mockup}
          alt="mockup"
          className="h-auto relative right-[330px] bottom-8 z-30 hidden xl:block"
        ></img>
      </div>
    </div>
  );
}

export default Body;
