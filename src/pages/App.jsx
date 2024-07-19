import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import HomeMain from "./HomeMain/HomeMain";
import Contact from "./Contact/Contact";
import Navbar from "../components/sections/Navbar";
import Features from "./Features/Features";
import Signup from "./Signup/Signup";

function useLocations(name) {
  const location = useLocation();

  location.pathname = name;

  console.log(name);
}

function App() {
  return (
    <div className="">
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomeMain></HomeMain>}></Route>
            <Route path="/features" element={<Features></Features>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/SignUp" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
