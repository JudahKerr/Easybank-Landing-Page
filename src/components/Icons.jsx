import Online from "../images/icon-online.svg";
import Budgeting from "../images/icon-budgeting.svg";
import Onboarding from "../images/icon-onboarding.svg";
import API from "../images/icon-api.svg";

function Icons() {
  return (
    <div className="bg-gray-200 z-10 relative bottom-[165px] pt-[100px] pb-36">
      <div>
        <h1 className="text-5xl text-Dark-Blue  font-Public-Sans h-24 pl-44 leading-tight">
          Why choose Easybank?
        </h1>
        <p className="text-Grayish-Blue font-Public-Sans w-[950px] pl-44 text-xl self-start leading-normal">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="mt-20 pl-44 grid grid-cols-4 ">
        <div className="grid grid-cols-1 grid-rows-3 place-items-start ">
          <img src={Online} className=""></img>
          <h2 className="text-2xl text-Dark-Blue  font-Public-Sans h-24 mt-4 -mb-24">
            Online Banking
          </h2>
          <p className="text-Grayish-Blue font-Public-Sans text-xl leading-normal pr-12">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 place-items-start">
          <img src={Budgeting}></img>
          <h2 className="text-2xl text-Dark-Blue  font-Public-Sans h-24 mt-4 -mb-24">
            Simple Budgeting
          </h2>
          <p className="text-Grayish-Blue font-Public-Sans text-xl pr-12 leading-normal">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 place-items-start">
          <img src={Onboarding}></img>
          <h2 className="text-2xl text-Dark-Blue  font-Public-Sans h-24 mt-4 -mb-24">
            Fast Onboarding
          </h2>
          <p className="text-Grayish-Blue font-Public-Sans text-xl pr-12 leading-normal">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 place-items-start">
          <img src={API}></img>
          <h2 className="text-2xl text-Dark-Blue  font-Public-Sans h-24 mt-4 -mb-24">
            Open API
          </h2>
          <p className="text-Grayish-Blue font-Public-Sans text-xl pr-12 leading-normal">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Icons;
