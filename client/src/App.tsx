import React, { useEffect, useState } from "react"
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/Views/About/About"
import Home from "./components/Views/Home/Home"
import Login from "./components/Views/LogIn/Login"
import MyProfile from "./components/Views/MyProfile/MyProfile"
import ProfilePage from "./components/Views/ImagePage/ImagePage"
import Register from "./components/Views/Register/Register"
import TattooWrapper from "./components/TattooCard/TattooWrapper"
import ImagePage from "./components/Views/ImagePage/ImagePage"




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Navbar/>}>
        <Route path="/home" element={<Home/>} />
        <Route path='/' element={<TattooWrapper/>} />
        <Route path='/imagePage' element={<ImagePage/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/myProfile" element={<MyProfile/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
