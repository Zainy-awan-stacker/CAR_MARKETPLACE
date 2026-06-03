import API from "../api/api";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", formData);
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      console.log(res.data);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="enter your password"
              required
            />
          </div>
          <button className="bg-blue-500 w-full p-3 mt-5 rounded-md text-2xl text-white cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
