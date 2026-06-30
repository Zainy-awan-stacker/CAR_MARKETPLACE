import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import {
  RiGoogleFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";

function Login({ closeModal, setAuthType }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/user/login", formData);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      dispatch(loginSuccess({
        user:{
          id: res.data.id,
          username: res.data.username,
          email: res.data.email,
        },
        token: res.data.token,
      }));

      closeModal();
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-130 w-full max-w-200 rounded-4xl overflow-hidden bg-white shadow-[0_35px_90px_rgba(32,32,55,0.15)]">
      <div className="md:grid md:grid-cols-[1.15fr_0.85fr]">
        <div className="px-8 py-10 md:px-12 md:py-14">
          <h2 className="text-3xl font-bold text-slate-900">Login</h2>
          <p className="mt-3 text-sm text-slate-500">
            or use your email password
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: RiGoogleFill, label: "Google" },
              { icon: RiFacebookBoxFill, label: "Facebook" },
              { icon: RiTwitterFill, label: "Twitter" },
              { icon: RiLinkedinFill, label: "LinkedIn" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                  aria-label={item.label}
                >
                  <Icon size={18} />
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <p className="text-sm text-slate-500">or use your email account</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && <p className="text-sm text-red-500">{error}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500"
              required
            />

            <div className="flex justify-between items-center text-sm text-slate-500">
              <span className="font-medium text-slate-700">
                Forget Your Password
              </span>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-linear-to-r from-sky-300 to-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:opacity-95"
            >
              Login
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center bg-linear-to-br from-violet-600 via-blue-600 to-sky-500 p-10 text-white">
          <div className="max-w-70 text-center">
            <h3 className="text-3xl font-bold">Hello, Friend!</h3>
            <p className="mt-4 text-sm leading-6 text-white/85">
              Register with your personal details to use all of site featured.
            </p>
            <button
              type="button"
              onClick={() => setAuthType("register")}
              className="mt-10 rounded-full border border-white/70 px-10 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Register Agency
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
