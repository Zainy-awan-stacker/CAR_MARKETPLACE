import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";

import Navbar from "./Navbar";

function Header({user,setUser}) {
  const [menuOpened, setMenuOpened] = useState(false);
  const [active] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header
      className={`sticky top-0 z-20 
  ${active ? "" : ""}
  ${!isHomePage && "bg-primary"}`}
    >
      <div className="main-div px-10 bg-primary">
        <div className="flexy flex justify-between items-center">
          {/* LOGO */}

          <div className="spany-icon items-center relative">
            <img src="/images/cars.png" alt="car" className="car w-20" />
            {/* <span className="uppercase text-xs absolute top-15 font-serif font-bold">
              Rentify
            </span> */}
          </div>

          {/* NAVBAR */}
          <Navbar 
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          user={user} setUser={setUser}
          />
          <div className="paint flex gap-10">
            <div className="search-sec flex relative ">
              <div
                className={`absolute right-1  transition-all duration-300 ease-in-out
          ring-1 ring-slate-900/10 bg-white rounded-full 
          ${showSearch ?"scale-x-100 opacity-100 px-4 py-2" : "scale-x-0 opacity-0 px-0 py-0"}`}
              >
                <input
                  type="text"
                  placeholder="Type here..."
                  className=" text-sm outline-none"
                />
              </div>

              {/* SEARCH ICON */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className=" z-20 ring-1 ring-slate-900/10
    bg-white px-2 rounded-full"
              >
                <img src="/images/SSS.png" alt="search" className="h-5 w-5" />
              </button>
            </div>
            {/* RIGHT SIDE */}
            <div className="relative flex items-center justify-end gap-4 ">
              {/* MOBILE MENU */}
              <button
                className="lg:hidden"
                onClick={() => setMenuOpened(!menuOpened)}
              >
                <img
                  src={menuOpened ? "/images/close.png" : "/images/menu.png"}
                  alt="menu"
                  className="h-5 w-5"
                />
              </button>
             
              <div>
                <button className="btn bg-black font-bold rounded-full text-white px-4 py-2 flex items-center gap-2">
                  Login
                  <RiLoginCircleFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

