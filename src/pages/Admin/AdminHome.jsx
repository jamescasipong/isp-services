import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingUI from "../../components/LoadingUI";
import Button from "../../components/Button";

const AdminHome = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin"); // Redirect to admin sign-in page after logout
  };

  useEffect(() => {
    // Fetch data when component mounts
    fetch("https://optinet-api-dev.vercel.app")
      .then((response) => response.json())
      .then((data) => {
        setItems(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingUI />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      {/*<button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mb-4"
      >
        Logout
      </button>*/}
      <div className="overflow-x-auto">
        <div className="shadow-md  border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delete Row
                </th>
                {/*<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Password
                </th>*/}
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {item.firstName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.lastName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      label="Delete"
                    />
                  </td>
                  {/*<td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.password}</div>
                  </td>*/}
                  {/* Add more td for additional data */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

/**import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingUI from "../../components/LoadingUI";

const AdminHome = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin"); // Redirect to admin sign-in page after logout
  };

  useEffect(() => {
    // Fetch data when component mounts
    fetch("http://localhost:3001")
      .then((response) => response.json())
      .then((data) => {
        setItems(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      {/*<button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mb-4"
      >
        Logout
      </button>
      <div className="overflow-x-auto">
        <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                {/*<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Password
                </th>
                {/* Add more table headers as needed *
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="3" className="px-6 py-4 text-center">
                    <LoadingUI />
                  </td>
                </tr>
              ) : items.length > 0 ? (
                items.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.firstName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.lastName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/*<div className="text-sm text-gray-900">{item.password}</div>
                    </td>
                    /* Add more td for additional data }
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;**/
