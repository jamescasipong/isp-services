import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccHome from "./AccHome/AccHome";
import AdminHome from "./Admin/AdminHome";
import { AuthProvider } from "./AuthContext";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import HomeMain from "./HomeMain/HomeMain";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Reset from "./Reset/Reset";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";

//axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://optinet-api-dev.vercel.app";
axios.defaults.withCredentials = true;

import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Optinet ISP Services</title>
        <meta
          name="description"
          content="Optinet ISP Services offers the best internet solutions for your home and business in the Philippines."
        />
        <meta
          name="keywords"
          content="ISP, Internet Service Provider, Optinet, Internet Solutions, Home Internet, Business Internet, Philippines"
        />
      </Helmet>
      <BrowserRouter>
        <AuthProvider>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
