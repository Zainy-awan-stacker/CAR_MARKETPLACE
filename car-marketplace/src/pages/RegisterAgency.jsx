import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function RegisterAgency() {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name:"",
    address:"",
    city:"",
    contact:"",
    email:""
  });

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try{

      const token = localStorage.getItem("token");

      await API.post(
        "/agency/registerAgency",
        formData,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );

      alert("Agency Registered Successfully");

      navigate("/owner");

    }catch(error){

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Agency registration failed"
      );

    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-[500px]"
      >

        <h1 className="text-2xl font-bold mb-5">
          Register Agency
        </h1>

        <input
          name="name"
          placeholder="Agency Name"
          onChange={handleChange}
          className="border p-3 w-full mb-3"
        />

        <input
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="border p-3 w-full mb-3"
        />

        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="border p-3 w-full mb-3"
        />

        <input
          name="contact"
          placeholder="Contact"
          onChange={handleChange}
          className="border p-3 w-full mb-3"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-3 w-full mb-3"
        />

        <button
          className="bg-sky-500 text-white px-5 py-3 rounded"
        >
          Register Agency
        </button>

      </form>

    </div>
  );
}

export default RegisterAgency;