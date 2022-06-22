import react from "react";
import Logo from "../images/logo.svg";
function Navbar() {
  return (
    <div className="flex bg-white items-center justify-center text-2xl  font-Public-Sans h-24 z-20">
      <img src={Logo} className="w-48 h-auto relative right-96 mr-2"></img>
      <nav className="flex z-10">
        <ul className="flex space-x-4">
          <li className="text-Grayish-Blue">Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
          <btn className="rounded-3xl bg-gradient-to-r from-Gradient-1 to-Gradient-2 relative left-96 text-white md w-64 h-14 pt-2.5 text-center">
            Request Invite
          </btn>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
