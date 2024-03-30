import { useState } from "react";
import { close2, logo, menu2 } from "../assets";
import { navLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
 
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <Link to="/#home" className="">
        <img
          src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1711744596/branding%20hopes/logo2_ojoinx.png"
          alt="Delta-Management"
          className="w-[248px] h-[64px] cursor-pointer "
        />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-blue" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            {/*  */}
            <a
              className="text-black"
              href={
                nav.id === "contact"
                  ? "/contact"
                  : nav.id === "about"
                  ? "/about"
                  : `/#${nav.id} `
              }
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close2 : menu2}
          alt="menu"
          className="w-[28px] h-[28px] object-contain "
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-light-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a
                  className="text-black"
                  href={
                    nav.id === "contact"
                      ? "/contact"
                      : nav.id === "about"
                      ? "about"
                      : `/#${nav.id}`
                  }
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
