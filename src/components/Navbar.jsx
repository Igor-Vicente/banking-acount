import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-32 h-8 cursor-pointer" />
      <ul className="sm:flex hidden items-center gap-6">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-dancing text-lg text-dimWhite ml-5 hover:underline"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex justify-end">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-7 h-7 object-contain"
          onClick={() => setToggle((prevState) => !prevState)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6  text-white bg-black-gradient absolute top-20 min-w-36 rounded-bl-xl sidebar`}
        >
          <ul className="flex-col w-full cursor-pointer">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-dancing text-lg text-dimWhite mb-4 hover:underline"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
