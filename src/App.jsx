import Navbar from './components/sections/Navbar';
import Home from './components/sections/Home';

function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="flex justify-center items-center sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
            <Navbar></Navbar>
        </div>
      </div>

      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full  sm:px-16 px-6">
            <Home></Home>
        </div>
      </div>
    </div>
  )
}

export default App
