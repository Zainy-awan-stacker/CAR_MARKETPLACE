import { useState } from "react";
import API from "../../api/api";

function AgencyModal({ closeModal }) {

  const [formData,setFormData] = useState({
    name:"",
    address:"",
    city:"",
    contact:"",
    email:""
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = async(e)=>{
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

      window.location.reload();

    }catch(error){

      alert(
        error.response?.data?.message ||
        "Agency Registration Failed"
      );

    }
  };

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-[500px] rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-5">
          Register Agency
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >

          <input
            type="text"
            name="name"
            placeholder="Agency Name"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <div className="flex gap-3 mt-4">

            <button
              type="submit"
              className="bg-sky-500 text-white px-5 py-3 rounded"
            >
              Register
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 px-5 py-3 rounded"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AgencyModal;