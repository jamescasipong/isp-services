import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminSignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isPassword, setType] = useState(true);

  const navigate = useNavigate();

  const SetType = () => {
    setType(!isPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://optinet-api-dev.vercel.app/adminusers", {
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        const { data } = response;
        if (data === "success") {
          login(); // Update auth state to logged in
          navigate("/adminhome"); // Redirect to home or another page upon successful signin
        } else {
          alert(data); // Show error message from backend
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            alert("Email or password is incorrect");
          } else {
            alert("Something went wrong. Please try again later.");
          }
        } else if (error.request) {
          alert("No response from server. Please try again.");
        } else {
          alert("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <div className="h-screen max-w-[100%] items-center flex justify-center sm:px-0 px-3">
      <div className="ss:w-[550px] flex flex-col items-center gap-3">
        <h3 className="font-semibold text-[24px]">Sign in to your account</h3>
        <p className="font-normal t-[16px]">Enter your credentials below:</p>

        <form className="w-full relative" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <div className="w-full mb-4">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md sm:max-w-[100%] w-full"
                required
              />
            </div>

            <div className={`flex mb-5 relative`}>
              <input
                type={isPassword ? "password" : "text"}
                id="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md sm:max-w-[100%] w-full"
                required
              />
              <i
                onClick={SetType}
                className={`fa-duotone ${
                  isPassword ? "fa-solid fa-unlock" : "fa-solid fa-lock"
                } absolute left-[92%] top-[40%] opacity-70 cursor-pointer hover:opacity-100`}
              ></i>
            </div>
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white rounded-md w-full button"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
