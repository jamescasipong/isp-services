import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import HomeMain from "./HomeMain/HomeMain";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import AdminHome from "./Admin/AdminHome";
import AccHome from "./AccHome/AccHome";
import Reset from "./Reset/Reset";

import ProtectedRoute from "./ProtectedRoute";
import axios from "axios";

const baseURL =
  process.env.REACT_APP_API_URL || process.env.REACT_APP_API_URL_LOCAL;
//axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<HomeMain />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/adminhome" element={<AdminHome />} />

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
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
