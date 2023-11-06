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
import TestLogin from "./pages/auth/TestLogin";

function App() {
  localStorage.setItem("isAuthenticated", false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-login" element={<TestLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login/forgot-password" element={<ForgotPassword />} />
        <Route path="/login/recover-password" element={<RecoverPassword />} />
        <Route path="/login/reset-password" element={<ResetPassword />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
