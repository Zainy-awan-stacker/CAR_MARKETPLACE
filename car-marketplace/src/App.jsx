import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import CarDetails from "./pages/CarDetails";
import Contact from "./pages/Contact";
import MyBooking from "./pages/MyBooking";
import Blogs from "./pages/Blogs";
import Footer from "./components/common/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ListCar from "./pages/owner/ListCar";
import OwnerLayout from "./pages/owner/OwnerLayout";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith("/owner");

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("/api/user/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
        } catch (error) {
          setError("failed to fetch user data");
          localStorage.removeItem("token");
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      {!isOwnerPath && <Header />}
      <Routes>
        <Route path="/" element={<Home user={user} error={error} />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:id" element={<CarDetails />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="list-car" element={<ListCar />} />
        </Route>
        {/* login signup routing */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register setUser={setUser} />}
        />
      </Routes>
      {!isOwnerPath && <Footer />}
    </>
  );
}

export default App;
