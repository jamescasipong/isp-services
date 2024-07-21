import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Google } from "../../assets"; // Assuming you have Google logo imported correctly

const Reset = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
      .get("https://optinet-api-dev.vercel.app/signin", {
        email: formData.email,
      })
      .then((response) => {
        const { data } = response;
        if (data === "success") {
          navigate("/home"); // Redirect to home or another page upon successful signin
        } else {
          alert(data); // Show error message from backend
        }
      })
      .catch((error) => {
        console.error("Signin Error:", error);
        alert("Signin failed. Please try again."); // Generic error message
      });
  };

  return (
    <div className="h-screen max-w-[100%] items-center flex justify-center sm:px-0 px-3">
      <div className="ss:max-w-[550px] flex-1 flex flex-col items-center gap-3">
        <h3 className="font-semibold text-[24px]">Reset your account</h3>
        <p className="font-normal t-[16px]">Enter your email</p>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <div className="w-full mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md sm:max-w-[100%] w-full"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-md w-full button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;
