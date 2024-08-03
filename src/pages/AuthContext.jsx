import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingUI from "../components/LoadingUI"; // Assuming this is a loading spinner or similar component

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/profile", {
          withCredentials: true,
        });
        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setUser(null);
      } /*finally {
        setLoading(false);
      }*/
    };

    fetchUser();
  }, [navigate]);

  /*if (loading) {
    return <LoadingUI />; // Or <Button> if Button is indeed your loading indicator
  }*/

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
