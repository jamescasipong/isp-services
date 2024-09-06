import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [isCodeSent, setIsCodeSent] = useState(false); // To check if the code is sent
  const [verificationCode, setVerificationCode] = useState(""); // Store the entered verification code
  const [inputCode, setInputCode] = useState(""); // Store the user input for verification code

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

    // Step 1: Send email to backend to receive verification code
    axios
      .post("/api/sendVerificationCode", {
        email: formData.email,
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "OK") {
          setVerificationCode(data.verificationCode); // Store verification code from backend
          setIsCodeSent(true); // Change state to show verification input
          alert("Verification code sent to your email");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error sending verification code:", error);
        alert("Failed to send verification code. Please try again.");
      });
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();

    // Step 2: Verify the entered code with the code sent by backend
    if (inputCode === verificationCode) {
      alert("Code verified successfully. You can reset your password now.");
      navigate("/reset-password"); // Navigate to password reset page
    } else {
      alert("Invalid verification code. Please try again.");
    }
  };

  return (
    <div className="h-screen max-w-[100%] items-center flex justify-center sm:px-0 px-3">
      <div className="ss:max-w-[550px] flex-1 flex flex-col items-center gap-3">
        <h3 className="font-semibold text-[24px]">
          {isCodeSent ? "Enter your Verification Code" : "Reset your account"}
        </h3>
        <p className="font-normal t-[16px]">
          {isCodeSent
            ? "Enter the verification code sent to your email"
            : "Enter your email"}
        </p>

        {!isCodeSent ? (
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
        ) : (
          <form className="w-full" onSubmit={handleVerificationSubmit}>
            <div className="flex flex-col w-full">
              <div className="w-full mb-4">
                <input
                  type="text"
                  id="verificationCode"
                  name="verificationCode"
                  placeholder="Enter Verification Code"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="mt-1 p-2 border rounded-md sm:max-w-[100%] w-full"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-md w-full button"
            >
              Verify Code
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Reset;
