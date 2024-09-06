import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/logout");
      navigate("/signin");
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleLogout} className="button text-white">
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;
