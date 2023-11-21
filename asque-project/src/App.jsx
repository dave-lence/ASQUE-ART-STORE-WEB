import { useState } from 'react'
import './App.css'
import './pages/page-styles.css'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/auth/SignUp"
import Login from "./pages/auth/Login"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import ErrorPage from "./pages/ErrorPage"
import ForgotPassword from "./pages/auth/ForgotPassword"
import RecoverPassword from "./pages/auth/RecoverPassword"
import ResetPassword from "./pages/auth/ResetPassword"
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import SingleCategory from "./pages/SingleCategory";
import SingleProduct from "./pages/SingleProduct";
import EditBio from "./pages/EditBio";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop/checkout" element={<CheckOut />} />
        <Route path="/shop/art/:artSlug" element={<SingleProduct />} />
        <Route path="/shop/category/:category" element={<SingleCategory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login/forgot-password" element={<ForgotPassword />} />
        <Route path="/login/recover-password" element={<RecoverPassword />} />
        <Route path="/login/reset-password" element={<ResetPassword />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/dashboard/edit-profile" element={<EditBio />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
