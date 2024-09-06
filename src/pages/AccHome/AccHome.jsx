import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarHome from "../../components/sections/NavbarHome";
import { AuthContext } from "../AuthContext";

const AccHome = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (!user || !user.accountId) {
      console.error("User ID is not defined");
      return;
    }
  }, [user]);

  const getDate = () => {
    let date = "unknown";
    if (user.dateCreated){
        date = user.dateCreated;
    }

    return date;
  }

  return (
    <div>
      <div className="flex justify-center items-center md:px-4 px-4 w-full">
        <div className="md:fixed initial flex  justify-center items-center bg-primary sm:shadow-md drop-shadow-none w-full h-[75px] top-0">
          <div className="xl:max-w-[1280px] w-full md:fixed initial top-0  px-4">
            <NavbarHome userz={user.firstName}></NavbarHome>
          </div>
        </div>
      </div>
      <div className="min-h-screen  p-6 mt-20">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-row">
            <h1 className="text-2xl font-bold mb-4 flex-1">
              Hi {user.firstName} {user.lastName}!
            </h1>
          </div>
          <div className="flex mb-5">
            <h1>Account Id: {user.accountId}</h1>
          </div>
          <div className="flex mb-5">
            <h1>Member since: {getDate()}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Dashboard</h2>
              <button
                onClick={() => navigate("/adminhome")}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Check out Subscribers' Data lmao!
              </button>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">My Plan</h2>
              <p>Your Current Plan: Fiber X</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Amount to Pay</h2>
              <p>$1500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccHome;
