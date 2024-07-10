
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import HomeMain from "./HomeMain/HomeMain";
import Contact from "./Contact/Contact";
import Navbar from "../components/sections/Navbar";
import Features from "./Features/Features";
import Footer from "../components/sections/Footer";


function useLocations(name){

  const location = useLocation();

  location.pathname = name;

  console.log(name);
}

function App() {
  
  return (
    <div className="">

      <div className="flex justify-center items-center md:px-4 px-4 w-full">
        <div className='md:fixed initial flex  justify-center items-center bg-primary sm:shadow-sm drop-shadow-none w-full h-[85px] top-0'>
        <div className="xl:max-w-[1280px] w-full md:fixed initial top-0  px-4">
            <Navbar></Navbar>
        </div>
        </div>
      </div>
      
      <div>
      <BrowserRouter>
        <Routes >
          <Route index element={<HomeMain></HomeMain>}></Route>
          <Route path="/features" element={<Features></Features>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
      </div>


      <div className="flex justify-center items-star">
          <div className="xl:max-w-[1280px] w-full  md:px-4 px-4">
              <Footer></Footer>
          </div>
        </div>
    </div>

  )

}

export default App
