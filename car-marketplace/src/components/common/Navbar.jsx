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
      <nav className="hidden lg:flex items-center gap-3 ml-20 rounded-full bg-sky-500/80 backdrop-blur-xl border border-sky-300/40 shadow-xl shadow-sky-500/20 px-3 py-1.5">
        {navLinks.map((link) => (
          <NavLink
            key={link.title}
            to={link.path}
            onClick={handleClick}
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-[0.18em] transition ${
                isActive
                  ? "bg-sky-200 text-slate-900"
                  : "text-slate-700 hover:bg-white/20 hover:text-slate-900"
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>

      {menuOpened && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-xl flex flex-col items-center gap-6 py-6 lg:hidden z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              onClick={handleClick}
              className={({ isActive }) =>
                `w-full text-center text-base font-semibold uppercase tracking-[0.18em] transition px-4 py-3 rounded-full ${
                  isActive
                    ? "bg-sky-200 text-slate-900"
                    : "text-slate-700 hover:bg-sky-100/80 hover:text-slate-900"
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
