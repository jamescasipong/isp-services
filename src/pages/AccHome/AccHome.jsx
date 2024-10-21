import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarHome from "../../components/sections/NavbarHome";
import { AuthContext } from "../AuthContext";
import { Google } from "../../assets";
import { useState } from "react";
import axios from "axios";
import LoadingUI from "../../components/LoadingUI";

const AccHome = () => {
  const { user } = useContext(AuthContext);
  const [isToggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.accountId) {
      console.error("User ID is not defined");
      return;
    }
  }, [user]);

  const getDate = () => {
    let date = "Unknown";
    if (user.dateCreated) {
      date = user.dateCreated;
    }

    return date;
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/logout");

      if (response.data === "Logged out successfully") {
        alert("Logged out successfully");
      }

      setTimeout(() => {
        setLoading(false);
      }, 5000);

      navigate("/signin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return <LoadingUI />;
  }

  return (
    <div>
      <nav className="bg-white shadow-sm border-b-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="font-medium text-[20px]">Optinet</h1>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button
                    className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="user-menu-button"
                    onClick={() => {
                      setToggle((prev) => !prev);
                    }}
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={Google}
                      alt="Profile"
                    />
                  </button>
                </div>
                <div
                  className={`origin-top-right absolute ${
                    isToggle ? "" : "hidden"
                  } right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-slate-100 text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-slate-100 text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block hover:bg-slate-100 px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    onClick={handleLogout}
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="min-h-screen mt-5 px-2">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg border shadow-md">
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
            <div className="bg-blue-50 p-4 rounded-lg shadow-md border">
              <h2 className="text-lg font-semibold mb-2">Dashboard</h2>
              <button
                onClick={() => navigate("/adminhome")}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Check out Subscribers' Data lmao!
              </button>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md border">
              <h2 className="text-lg font-semibold mb-2">My Plan</h2>
              <p>Your Current Plan: Fiber X</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md border">
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
