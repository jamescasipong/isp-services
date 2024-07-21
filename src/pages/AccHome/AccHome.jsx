import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const AccHome = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to your account home!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AccHome;
