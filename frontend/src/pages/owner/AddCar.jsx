import React, { useState } from "react";

function AddCar() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    city: "",
    country: "",
    type: "Sedan",
    address: "",
    odometer: 0,
    rentPrice: "",
    salePrice: "",
    transmission: "",
    seats: 1,
    fuel: "",
    features: [],
  });

  const featuresList = [
    "Rear Camera",
    "Apple CarPlay",
    "Keyless Entry",
    "Adaptive Cruise",
    "Heated Seats",
    "Sunroof",
    "Parking Assist",
    "Cruise Control",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFeature = (feature) => {
    if (formData.features.includes(feature)) {
      setFormData({
        ...formData,
        features: formData.features.filter((f) => f !== feature),
      });
    } else {
      setFormData({
        ...formData,
        features: [...formData.features, feature],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // yahan API call kar sakte ho
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        {/* NAME */}
        <input
          name="name"
          placeholder="Car Name"
          className="w-full p-3 border rounded mb-4"
          onChange={handleChange}
        />

        {/* DESCRIPTION */}
        <textarea
          name="description"
          placeholder="Car Description"
          className="w-full p-3 border rounded mb-4"
          onChange={handleChange}
        />

        {/* ROW */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input name="city" placeholder="City" className="p-2 border rounded" onChange={handleChange} />
          <input name="country" placeholder="Country" className="p-2 border rounded" onChange={handleChange} />
          <select name="type" className="p-2 border rounded" onChange={handleChange}>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Hatch</option>
          </select>
        </div>

        {/* ADDRESS */}
        <input
          name="address"
          placeholder="Address"
          className="w-full p-2 border rounded mb-4"
          onChange={handleChange}
        />

        {/* PRICES */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input name="rentPrice" placeholder="Rent Price /day" className="p-2 border rounded" onChange={handleChange} />
          <input name="salePrice" placeholder="Sale Price" className="p-2 border rounded" onChange={handleChange} />
        </div>

        {/* TRANSMISSION + SEATS + FUEL */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <select name="transmission" className="p-2 border rounded" onChange={handleChange}>
            <option>Select Type</option>
            <option>Automatic</option>
            <option>Manual</option>
          </select>

          <input name="seats" type="number" className="p-2 border rounded" onChange={handleChange} />

          <select name="fuel" className="p-2 border rounded" onChange={handleChange}>
            <option>Select Type</option>
            <option>Petrol</option>
            <option>Diesel</option>
          </select>
        </div>

        {/* FEATURES */}
        <div className="mb-4">
          <p className="mb-2 font-semibold">Features</p>
          <div className="grid grid-cols-4 gap-2">
            {featuresList.map((f, i) => (
              <label key={i} className="flex items-center gap-2 text-sm">
                <input type="checkbox" onChange={() => handleFeature(f)} />
                {f}
              </label>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          Add Car
        </button>
      </form>
    </div>
  );
}

export default AddCar;