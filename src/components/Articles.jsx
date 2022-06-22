import Currency from "../images/image-currency.jpg"
import Restaurant from "../images/image-restaurant.jpg"
import Plane from "../images/image-plane.jpg"
import Confetti from "../images/image-confetti.jpg"

function Articles() {
  return (
    <div className="bg-gray-100 -mt-[170px] pt-36 pb-48">
      <h1 className="text-5xl text-Dark-Blue  font-Public-Sans h-24 pl-44 leading-tight mb-8">Latest Articles</h1>
      <div className="grid grid-cols-4 pl-44 pr-44 gap-10">
        <div className="grid grid-cols-1 auto-rows-f3 bg-white rounded-lg pb-12">
          <img src={Currency} className="w-[480px] h-auto rounded-lg"></img>
          <div className="bg-white bord"></div>
          <p className="text-Grayish-Blue font-Public-Sans  text-md self-start leading-normal mt-8 ml-8">By Claire Robinson</p>
          <h3 className="text-2xl text-Dark-Blue  font-Public-Sans leading-tight ml-8 mt-4 w-3/4">Receive money in any currency with no fees</h3>
          <p className="text-Grayish-Blue font-Public-Sans  text-lg self-start leading-normal mt-8 ml-8 mr-8">The world is
      getting smaller and we’re becoming more mobile. So why should you be
      forced to only receive money in a single …</p>
        </div>
        <div className="grid grid-cols-1 auto-rows-3 bg-white rounded-lg pb-12">
          <img src={Restaurant} className=" h-auto  rounded-lg"></img>
          <p className="text-Grayish-Blue font-Public-Sans  text-md self-start leading-normal mt-8 ml-8">By Wilson Hutton</p>
          <h3 className="text-2xl text-Dark-Blue  font-Public-Sans leading-tight ml-8 mt-4 w-3/4">Treat yourself
      without worrying about money</h3>
          <p className="text-Grayish-Blue font-Public-Sans  text-lg self-start leading-normal mt-8 ml-8">Our simple budgeting feature allows you to
      separate out your spending and set realistic limits each month. That means
      you …</p>
        </div>
        <div className="grid grid-cols-1 auto-rows-3 bg-white rounded-lg pb-12">
          <img src={Plane} className="w-94 h-auto rounded-lg"></img>
          <p className="text-Grayish-Blue font-Public-Sans  text-md self-start leading-normal mt-8 ml-8">By Wilson Hutton</p>
          <h3 className="text-2xl text-Dark-Blue  font-Public-Sans leading-tight ml-8 mt-4 w-3/4">Take your Easybank card wherever you go</h3>
          <p className="text-Grayish-Blue font-Public-Sans  text-lg self-start leading-normal mt-8 ml-8">We want you
      to enjoy your travels. This is why we don’t charge any fees on purchases
      while you’re abroad. We’ll even show you …</p>
        </div>
        <div className="grid grid-cols-1 auto-rows-3 bg-white rounded-lg pb-12">
          <img src={Confetti} className="w-94 h-auto rounded-lg"></img>
          <p className="text-Grayish-Blue font-Public-Sans  text-md self-start leading-normal mt-8 ml-8">By Claire Robinson</p>
          <h3 className="text-2xl text-Dark-Blue  font-Public-Sans leading-tight ml-8 mt-4 w-3/4">Our
      invite-only Beta accounts are now live!</h3>
          <p className="text-Grayish-Blue font-Public-Sans  text-lg self-start leading-normal mt-8 ml-8">After a lot of hard work by the
      whole team, we’re excited to launch our closed beta. It’s easy to request
      an invite through the site ...</p>
        </div>
      </div>
                 
    </div>
  );
}

export default Articles;
