import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import useLogout from "../useLogout";
import axios from "axios";

const AccHome = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [ipData, setIp] = useState({});
  const navigate = useNavigate();
  const logout = useLogout();

  useEffect(() => {
    if (!user || !user.accountId) {
      console.error("User ID is not defined");
      return;
    }

    axios
      .get(`api/user/accountId/${user.accountId}/secured`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        const errorMessage = error.response
          ? `Error: ${error.response.status} - ${error.response.data}`
          : `Error: ${error.message}`;
        console.error("There was an error fetching the data:", errorMessage);
      });
  }, [user]);

  useEffect(() => {
    if (data.ipAdd) {
      fetch(`https://ipinfo.io/${data.ipAdd}?token=78faf81d1e8caf`, {
        method: "GET",
        // Ensure that credentials are not included, avoiding CORS issues
        credentials: "omit",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((ipData) => setIp(ipData))
        .catch((error) =>
          console.error("There was an error fetching IP info:", error)
        );
    }
  }, [data.ipAdd]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-row">
          <h1 className="text-2xl font-bold mb-4 flex-1">
            Welcome {data.firstName} {data.lastName}!<br></br> Your IP!!!:{" "}
            {ipData && ipData.ip ? ipData.ip : <p>loading...</p>}
            <p>
              Current Network:{" "}
              {ipData.company && ipData.company.name
                ? ipData.company.name
                : "loading..."}
            </p>
          </h1>

          <button
            onClick={logout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 justify-end items-end mb-4"
          >
            Logout
          </button>
        </div>
        <div>
          <h1>AccountId: {data.accountId}</h1>
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
