import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const useLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const logout = async () => {
    try {
      await axios.post("api/logout");
      setUser(null); // Send a POST request to the logout endpoint
      navigate("/"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return logout;
};

export default useLogout;
