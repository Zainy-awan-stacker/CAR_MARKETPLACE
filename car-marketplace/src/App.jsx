import { Route, Routes, useLocation } from "react-router-dom";
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
import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ListCar from "./pages/owner/ListCar";
import OwnerLayout from "./pages/owner/OwnerLayout";
import Item from "./components/userScreenComponents/Item";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";

function App() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState("login");

  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith("/owner");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch(() => localStorage.removeItem("token"));
    }
  }, []);

  return (
    <>
      {!isOwnerPath && (
        <Header
          user={user}
          setUser={setUser}
          setShowAuth={setShowAuth}
          setAuthType={setAuthType}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:id" element={<CarDetails />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancel" element={<PaymentCancel />} />
        {/* OWNER */}
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="list-car" element={<ListCar />} />
        </Route>
      </Routes>

      {/* 🔥 AUTH MODAL */}
      {showAuth && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-2 right-2 text-black"
            >
              ✖
            </button>

            {authType === "login" ? (
              <Login
                setUser={setUser}
                closeModal={() => setShowAuth(false)}
                setAuthType={setAuthType}
              />
            ) : (
              <Register
                setUser={setUser}
                closeModal={() => setShowAuth(false)}
                setAuthType={setAuthType}
              />
            )}
          </div>
        </div>
      )}

      {!isOwnerPath && <Footer />}
    </>
  );
}

export default App;
