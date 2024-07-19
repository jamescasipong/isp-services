import React, { useState } from "react";
import { Google } from "../../assets";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    console.log(formData);
    // Reset form after submission (optional)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="h-screen max-w-[100%] items-center flex justify-center sm:px-0 px-3">
      <div className="flex flex-col items-center gap-3">
        <h3 className="font-semibold text-[24px]">Create an account</h3>
        <p className="font-normal t-[16px]">
          Enter your email to sign up for this app
        </p>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex sm:flex-row flex-col gap-5 w-full">
            <div className="w-full mb-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter Email"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md sm:max-w-[100%] w-full"
                required
              />
            </div>
            {/* Add other form fields similarly */}
          </div>
          <button
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
          <p className=""> or continute with </p>

          <div className="flex-1 flex justify-center items-start flex-col">
            <div className="bg-[#E6E6E6]  h-[2px] w-full"></div>
          </div>
        </div>

        <div className="px-4 py-2 bg-[#EEEEEE] text-black font-medium rounded-md w-full relative hover:bg-[#999999] transition-colors">
          <button type="submit" className="font-medium rounded-md w-full">
            <p>Google</p>
          </button>

          <img className="absolute top-2.5 z-[2]" src={Google} alt="" />
        </div>

        <p className="text-[16px] text-black text-center">
          <span className="text-[#828282]">
            By clicking continue, you agree to our
          </span>{" "}
          Terms of <br /> Service <span className="text-[#828282]">and </span>
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Signup;
