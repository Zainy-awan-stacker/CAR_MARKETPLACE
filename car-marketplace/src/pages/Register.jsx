import axios from "axios";
import React, { useState } from "react";
import {
  RiGoogleFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";

function Register({ setUser, closeModal, setAuthType }) {
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/register", formData);
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      closeModal();
    } catch (error) {
      setError(error.response?.data?.message || "registration failed");
    }
  };

  return (
    <div className="min-h-[520px] w-full max-w-[880px] rounded-[32px] overflow-hidden bg-white shadow-[0_35px_90px_rgba(32,32,55,0.15)]">
      <div className="md:grid md:grid-cols-[1.15fr_0.85fr]">
        <div className="px-8 py-10 md:px-12 md:py-14">
          <h2 className="text-3xl font-bold text-slate-900">Sign Up</h2>
          <p className="mt-3 text-sm text-slate-500">Create your account quickly below</p>

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
            <p className="text-sm text-slate-500">or use a secure email address</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && <p className="text-sm text-red-500">{error}</p>}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500"
              required
            />
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

            <button className="mt-4 w-full rounded-full bg-gradient-to-r from-sky-300 to-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:opacity-95">
              Sign Up
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center bg-gradient-to-br from-sky-600 via-blue-400 to-sky-500 p-10 text-white">
          <div className="max-w-[280px] text-center">
            <h3 className="text-3xl font-bold">Welcome Back!</h3>
            <p className="mt-4 text-sm leading-6 text-white/85">
              Already have an account? Sign in with your personal info to continue.
            </p>
            <button
              type="button"
              onClick={() => setAuthType("login")}
              className="mt-10 rounded-full border border-white/70 px-10 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
