import { HiOutlineMenuAlt4 } from "react-icons/hi"; 
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import React from "react";
import tfsLogo from "../assets/TFS-logo.png";

const 

const Nav = () => {
  return (
    <div className="flex items-center justify-between mx-5 lg:mx-24">
      <div className="flex items-center gap-2 mt-4">
        <img src={tfsLogo} className="h-20"></img>
        <p className="font-martires lg:text-3xl">THE FILIPINO MINIMALIST</p>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-4">
        <a>
          <BsFacebook size={25} />
        </a>
        <a>
          <BsInstagram size={25} />
        </a>
        <a>
          <svg
            width="33"
            height="33"
            viewBox="0 0 22 22"
            color=""
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4538 4H17.8288L12.6402 9.93026L18.7442 18H13.9648L10.2214 13.1057L5.93812 18H3.56171L9.11145 11.6569L3.25586 4H8.15658L11.5403 8.47354L15.4538 4ZM14.6203 16.5785H15.9363L7.4415 5.34687H6.0293L14.6203 16.5785Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>

      <ul className="hidden lg:flex items-center justify-center gap-4 text-xl">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="lg:hidden">
        <HiOutlineMenuAlt4 size={25} />
      </div>
    </div>
  );
};

export default Nav;
