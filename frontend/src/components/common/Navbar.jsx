import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ menuOpened, setMenuOpened,}) => {

  const navLinks = [
  { path: "/", title: "Home" },
  { path: "/listing", title: "Listing" },  
  { path: "/blog", title: "Blog" },       
  { path: "/contact", title: "Contact" }, 
];

  const handleClick = () => {
    setMenuOpened(false);
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden lg:flex gap-5">
        {navLinks.map((link) => (
          <NavLink
            key={link.title}
            to={link.path}
            onClick={handleClick}
            className={({ isActive }) =>
              `${isActive ? "active-link" : ""} font-bold`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Dropdown */}
      {menuOpened && (
        <div className="absolute top-[70px] left-0  bg-white shadow-md flex flex-col items-center gap-6 py-6 lg:hidden z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              onClick={handleClick}
              className={({ isActive }) =>
                `${isActive ? "active-link" : ""} font-bold`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
