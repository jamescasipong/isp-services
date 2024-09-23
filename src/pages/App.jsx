import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccHome from "./AccHome/AccHome";
import AdminHome from "./Admin/AdminHome";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import HomeMain from "./HomeMain/HomeMain";
import ProtectedRoute from "./ProtectedRoute";
import Reset from "./Reset/Reset";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";

//axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://optinet-api-dev.vercel.app";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<HomeMain />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/adminhome" element={<AdminHome />} />

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
  );
}

export default App;
