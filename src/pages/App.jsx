import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import HomeMain from "./HomeMain/HomeMain";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import AccHome from "./AccHome/AccHome";
import Reset from "./Reset/Reset";

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
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/home" element={<AccHome />}></Route>
            <Route path="/ResetPage" element={<Reset />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
