import React, { useState } from "react";
import { Google } from "../../assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [isToggle, setToggle] = useState(false);
  const [isPassword, setType] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [signupError, setSignupError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, firstName, lastName, password } = formData;

    if (!isPasswordValid(formData.password)) {
      setPasswordError(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and be at least 8 characters long."
      );
      return;
    }

    setPasswordError("");
    setSignupError("");

    try {
      await axios.post("/api/signup", {
        email,
        firstName,
        lastName,
        password,
      });

      // Redirect to signin page
      navigate("/signin");
    } catch (err) {
      setSignupError(err.response?.data?.message || "An error occurred");
    }
  };

  const isPasswordValid = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <div className="h-screen max-w-[100%] items-center flex justify-center sm:px-0 px-3">
      <div className="ss:w-[550px] flex flex-col items-center gap-3">
        <h3 className="font-semibold text-[24px]">Create an account</h3>
        <p className="font-normal t-[16px]">
          Enter your email to sign up for this app
        </p>

        <form className="w-full" onSubmit={handleSubmit}>
          <div
            className={`${isToggle ? "flex" : "hidden"} flex-row w-full gap-5`}
          >
            <div className="w-full mb-4">
              <input
                type="text"
                id="firstname"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md sm:max-w-[100%] w-full"
                required
              />
            </div>

            <div className="w-full mb-4">
              <input
                type="text"
                id="lastname"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md sm:max-w-[100%] w-full"
                required
              />
            </div>
          </div>
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

            <div className={`${isToggle ? "flex" : "hidden"} mb-5 relative`}>
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
                onClick={() => setType(!isPassword)}
                className={`fa-duotone ${
                  isPassword ? "fa-solid fa-unlock" : "fa-solid fa-lock"
                } absolute left-[92%] top-[40%] opacity-70 cursor-pointer hover:opacity-100`}
              ></i>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mb-5">{passwordError}</p>
            )}
            {signupError && (
              <p className="text-red-500 text-sm mb-5">{signupError}</p>
            )}
          </div>
          <button
            onClick={() => setToggle(true)}
            type="submit"
            className="px-4 py-2 text-white rounded-md w-full button"
          >
            Sign up with email
          </button>
        </form>

        <div className="flex flex-row h-auto w-full m gap-3">
          <div className="flex-1 flex justify-center items-start flex-col">
            <div className=" bg-[#E6E6E6]  h-[2px] w-full "></div>
          </div>
          <p> or continue with </p>
          <div className="flex-1 flex justify-center items-start flex-col">
            <div className="bg-[#E6E6E6]  h-[2px] w-full"></div>
          </div>
        </div>

        <div className="px-4 py-2 bg-[#EEEEEE] text-black font-medium rounded-md w-full relative hover:bg-[#999999] transition-colors">
          <button type="button" className="font-medium rounded-md w-full">
            <p>Google</p>
          </button>
          <img className="absolute top-2.5 z-[2]" src={Google} alt="Google" />
        </div>

        <p className="text-[16px] text-black text-center">
          <span className="text-[#828282]">
            By clicking continue, you agree to our
          </span>{" "}
          Terms of <br className="ss:block hidden" /> Service{" "}
          <span className="text-[#828282]">and </span>
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Signup;
