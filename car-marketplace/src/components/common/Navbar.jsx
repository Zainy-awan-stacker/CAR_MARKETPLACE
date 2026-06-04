import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ menuOpened, setMenuOpened }) => {
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
      <nav className="hidden lg:flex items-center gap-8 ml-20">
        {navLinks.map((link) => (
          <NavLink
            key={link.title}
            to={link.path}
            onClick={handleClick}
            className={({ isActive }) =>
              ` font-bold uppercase tracking-[0.18em] text-slate-700 hover:text-slate-900 transition ${
                isActive ? "text-slate-900 border-b-2 border-sky-500 pb-1" : ""
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>

      {menuOpened && (
        <div className="absolute top-[76px] left-0 right-0 bg-white shadow-xl flex flex-col items-center gap-6 py-6 lg:hidden z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              onClick={handleClick}
              className={({ isActive }) =>
                `text-base font-semibold uppercase tracking-[0.18em] text-slate-700 hover:text-slate-900 transition ${
                  isActive ? "text-slate-900" : ""
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}

          {/* SEARCH in mobile menu */}
          <div className="w-full px-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-slate-200 rounded-full text-sm outline-none focus:border-sky-500"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
