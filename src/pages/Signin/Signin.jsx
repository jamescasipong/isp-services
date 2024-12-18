import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Google } from "../../assets"; // Assuming you have Google logo imported correctly
import { AuthContext } from "../AuthContext";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isPassword, setType] = useState(true);
  const [loading, setLoading] = useState(false); // Loading state
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

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
    setLoading(true); // Start loading

    axios
      .post("/api/signin", {
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        const { data } = response;

        if (data.success) {
          // Success, navigate to /home
          setLoading(false); // End loading
          alert("Sign in successful!");
          navigate("/home");
        } else {
          setLoading(false); // End loading
          alert(data.message || "An unknown error occurred.");
        }
      })
      .catch((error) => {
        setLoading(false); // End loading
        const errorMessage =
          error.response?.data?.message || "An unknown error occurred.";
        if (errorMessage === "Invalid email") {
          alert("Invalid email");
        } else if (errorMessage === "Invalid password") {
          alert("Invalid password");
        } else {
          alert(errorMessage);
        }
      });
  };

  return (
    <div className="h-screen max-w-[100%] items-center flex justify-center sm:px-0 px-3">
      <div className="ss:w-[550px] flex flex-col items-center gap-3">
        <h3 className="font-semibold text-[24px]">Sign in to your account</h3>
        <p className="font-normal text-[16px]">Enter your credentials below:</p>

        <form className="w-full relative" onSubmit={handleSubmit}>
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

            <div className="flex mb-5 relative">
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
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
        <p
          onClick={() => {
            window.location.href = "/resetpage";
          }}
          className="cursor-pointer hover:text-orange-500"
        >
          Forgot your password?
        </p>

        <div className="flex flex-row h-auto w-full gap-3">
          <div className="flex-1 flex justify-center items-start flex-col">
            <div className="bg-[#E6E6E6] h-[2px] w-full"></div>
          </div>
          <p> or continue with </p>
          <div className="flex-1 flex justify-center items-start flex-col">
            <div className="bg-[#E6E6E6] h-[2px] w-full"></div>
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
          <span className="text-[#828282]">and</span> Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Signin;
