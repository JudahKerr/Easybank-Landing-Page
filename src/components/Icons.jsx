import Online from "../images/icon-online.svg";
import Budgeting from "../images/icon-budgeting.svg";
import Onboarding from "../images/icon-onboarding.svg";
import API from "../images/icon-api.svg";

function Icons() {
  return (
    <div className="bg-gray-200 xl:z-10 2xl:relative xl:bottom-[165px] 2xl:pt-[100px] pt-8 pb-36 xl:overflow-hidden">
      <div>
        <h1 className="text-5xl text-Dark-Blue  font-Public-Sans h-24 xl:pl-44 mx-auto md:mx-0 leading-tight text-center xl:text-left">
          Why choose Easybank?
        </h1>
        <p className="text-Grayish-Blue font-Public-Sans xl:w-[950px] w-[80%] mx-auto xl:mx-0 xl:pl-44 text-xl self-start leading-normal  md:mt-0 mt-24 text-center xl:text-left">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="mt-20 xl:pl-44 px-16 grid md:grid-cols-4 md:grid-rows-none grid-cols-1 mx-auto xl:text-left text-center">
        <div className="grid grid-cols-1 grid-rows-3 xl:place-items-start place-items-center md:px-0 px-12 xl:py-0 py-12">
          <img src={Online} alt="online"className=""></img>
          <h2 className="text-2xl text-Dark-Blue  font-Public-Sans h-24 mt-4 -mb-24">
            Online Banking
          </h2>
          <p className="text-Grayish-Blue font-Public-Sans text-xl leading-normal xl:pr-12 md:pt-0 pt-0 px-2">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 xl:place-items-start place-items-center md:px-0 px-12 xl:py-0 py-12">
          <img src={Budgeting} alt="budgeting"></img>
          <h2 className="text-2xl text-Dark-Blue  font-Public-Sans h-24 mt-4 -mb-24">
            Simple Budgeting
          </h2>
          <p className="text-Grayish-Blue font-Public-Sans text-xl leading-normal xl:pr-12 md:pt-0 pt-0 px-2">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 xl:place-items-start place-items-center md:px-0 px-12 xl:py-0 py-12">
          <img src={Onboarding} alt="onboarding"></img>
          <h2 className="text-2xl text-Dark-Blue  font-Public-Sans h-24 mt-4 -mb-24">
            Fast Onboarding
          </h2>
          <p className="text-Grayish-Blue font-Public-Sans text-xl leading-normal xl:pr-12 md:pt-0 pt-0 px-2">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 xl:place-items-start place-items-center md:px-0 xl:py-0 py-12 px-2">
          <img src={API} alt="api"></img>
          <h2 className="text-2xl text-Dark-Blue  font-Public-Sans h-24 mt-4 -mb-24">
            Open API
          </h2>
          <p className="text-Grayish-Blue font-Public-Sans text-xl leading-normal xl:pr-12 md:pt-0 pt-0">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Icons;
