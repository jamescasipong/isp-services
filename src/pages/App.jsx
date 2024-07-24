// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import HomeMain from "./HomeMain/HomeMain";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import AccHome from "./AccHome/AccHome";
import Reset from "./Reset/Reset";
import ProtectedRoute from "./ProtectedRoute"; // Ensure this is properly defined
import AdminHome from "./Admin/AdminHome";
import AdminSignIn from "./Admin/AdminSignIn";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";
//axios.defaults.baseURL = "https://optinet-api-dev.vercel.app/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeMain />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/admin" element={<AdminSignIn />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <AccHome />
              </ProtectedRoute>
            }
          />
          <Route path="/resetpage" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
