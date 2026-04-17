import React from 'react'
import { Route,Routes,Navigate} from 'react-router-dom'
import Header from './components/common/Header'
import Home from './pages/Home'
import Listing from './pages/Listing'
import CarDetails from './pages/CarDetails'
import Contact from './pages/Contact'
import MyBooking from './pages/MyBooking'
import Blogs from './pages/Blogs'
import Footer from './components/common/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"


function App() {
   const [user,setUser] =useState(null);
  const [error,setError] =useState('');

  useEffect(()=>{
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const res = await axios.get('/api/user/me',{
          headers: {Authorization: `Bearer ${token}`}
        })
        setUser(res.data)
      } catch (error) {
        setError("failed to fetch user data")
        localStorage.removeItem("token")
      }
    }
  };
  fetchUser();
  },[])

  
  return (
   <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home user={user} error={error}/>}/>
      <Route path='/listing' element={<Listing/>}/>
      <Route path='/listing/:id' element={<CarDetails/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/my-bookings' element={<MyBooking/>}/>
      <Route path="/login" element={ user ? <Navigate to='/'/> : <Login setUser={setUser}/>}/>
        <Route path="/register" element={ user ? <Navigate to='/'/> : <Register setUser={setUser}/>}/>
    </Routes>
    <Footer/>
    
    </>
   
  )
}

export default App