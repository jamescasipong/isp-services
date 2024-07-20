import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token from localStorage or sessionStorage
    localStorage.removeItem("token"); // or sessionStorage.removeItem('token');

    // Redirect to login page
    navigate("/signin");
  };

  return (
    <button className="button text-white" onClick={handleLogout}>
      Logouts
    </button>
  );
};

export default LogoutButton;
