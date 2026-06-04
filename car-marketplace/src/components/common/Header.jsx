import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

function Header({ setShowAuth, setAuthType }) {
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const dispatch = useDispatch();

const user = useSelector(
  (state) => state.auth.user
);

const isLoggedIn = useSelector(
  (state) => state.auth.isLoggedIn
);

  return (
    <header className={`sticky top-0 z-20 ${!isHomePage && "bg-primary"}`}>
      <div className="main-div px-10 bg-primary">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="relative">
            <img src="/images/cars.png" alt="car" className="w-20" />
          </div>

          {/* NAVBAR */}
          <Navbar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />

          {/* RIGHT SIDE */}
          <div className="flex gap-6 items-center">
            {/* SEARCH - only on lg */}
            <div className="hidden lg:block relative">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate(`/listing?keyword=${search}`);
                  }
                }}
                className={`absolute right-10 transition-all duration-300 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none shadow-sm ${
                  showSearch
                    ? "w-52 opacity-100"
                    : "w-0 opacity-0 px-0 border-transparent"
                }`}
              />

              <button
                onClick={() => {
                  if (!showSearch) {
                    setShowSearch(true);
                  }
                  if (search.trim()) {
                    navigate(`/listing?search=${search}`);
                  }
                }}
                className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm"
              >
                <img src="/images/SSS.png" alt="search" className="w-5" />
              </button>
            </div>

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

            {/* 🔥 AUTH BUTTONS */}
            <div className="flex gap-3">
              <div className="flex gap-3 relative">
                {!isLoggedIn ? (
                  <button
                    onClick={() => {
                      setAuthType("login");
                      setShowAuth(true);
                    }}
                    className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    Login <FaRegUser />
                  </button>
                ) : (
                  <div className="relative">
                    {/* PROFILE IMAGE */}

                    <img
                      src="https://i.pravatar.cc/40"
                      alt="profile"
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="w-12 h-12 rounded-full cursor-pointer border-2 border-sky-500"
                    />

                    {/* DROPDOWN */}

                    {showDropdown && (
                      <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl overflow-hidden z-50 border">
                        {/* TOP USER INFO */}

                        <div className="p-4 border-b flex items-center gap-3">
                          <img
                            src="https://i.pravatar.cc/40"
                            alt="profile"
                            className="w-12 h-12 rounded-full"
                          />

                          <div>
                            <h3 className="font-bold text-gray-800">
                              {user?.username}
                            </h3>

                            <p className="text-sm text-gray-500">
                              {user?.email}
                            </p>
                          </div>
                        </div>

                        {/* MENU ITEMS */}

                        <button
                          onClick={() => navigate("/owner")}
                          className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-100 transition"
                        >
                          <MdDashboard />
                          Dashboard
                        </button>

                        <button
                          onClick={() => navigate("/my-bookings")}
                          className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-100 transition"
                        >
                          <FaCarSide />
                          My Bookings
                        </button>

                        {/* LOGOUT */}

                        <button
                          onClick={() => {
                            dispatch(logout());
                            navigate("/");
                          }}
                          className="w-full flex items-center gap-3 px-5 py-4 text-red-500 hover:bg-red-50 transition"
                        >
                          <IoLogOutOutline />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
