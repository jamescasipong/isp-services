import Navbar from '../components/sections/Navbar';
import Home from '../components/sections/Home';
import Heading from '../components/sections/Heading';
import Footer from '../components/sections/Footer';

function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">

      
      <div className="flex justify-center items-center md:px-4 px-4 w-full">
        <div className='md:fixed initial flex  justify-center items-center bg-primary sm:shadow-sm drop-shadow-none w-full h-[85px] top-0'>
        <div className="xl:max-w-[1280px] w-full md:fixed initial top-0 ">
            <Navbar></Navbar>
        </div>
        </div>
      </div>
      
      <div className='block'>
        <div className="flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full  md:px-4 px-8">
              <Home></Home>
          </div>
        </div>

        <div className="flex justify-center items-start bg-bg mt-20">
          <div className="xl:max-w-[1280px] w-full  md:px-4 px-4">
              <Heading></Heading>
          </div>
        </div>
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
