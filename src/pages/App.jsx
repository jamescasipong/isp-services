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
