import react from "react";

function Navbar() {
  return (
    <div className="flex bg-Light-Grayish-Blue items-center justify-center text-2xl  font-Public-Sans h-24">
      <nav className="">
        <ul className="flex align-items-center space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
          <li className="flex self-end">Request Invite</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
