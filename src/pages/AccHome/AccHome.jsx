import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import axios from "axios";

const AccHome = () => {
  const [user, setUser] = useState(null); // State to hold user data
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://optinet-api-dev.vercel.app/user"
        ); // Replace with your API endpoint
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-row">
          <h1 className="text-2xl font-bold mb-4 flex-1">
            Welcome, {user ? user.firstName : "Loading..."}!
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 justify-end items-end mb-4"
          >
            Logout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Dashboard</h2>
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Go to Dashboard
            </button>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">My Plan</h2>
            <p>Your Current Plan: [Plan Details]</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Amount to Pay</h2>
            <p>$[Amount]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccHome;
