import React, { useState } from "react";
import { hero } from "../../assets/index";

const ContactSections = () => {
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
    <div className="flex ss:flex-row flex-col-reverse w-full ss:items-start items-center justify-center mt-40 gap-5">
      <div className="flex-1 flex-col justify-start items-start">
        <h1 className="font-bold sm:text-6xl text-[40px] mb-5 mt-0">
          Contact Us
        </h1>

        <p className="mb-5 sm:text-[24px] text-[18px] text-third">
          Subheading for description or instructions
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex sm:flex-row flex-col gap-5 w-full">
            <div className="w-full mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md sm:max-w-[100%] w-full"
                required
              />
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md sm:max-w-[100%] w-full"
                required
              />
            </div>
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="button text-white  py-2 px-4 rounded-md w-full"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex flex-1 justify-end">
        <img src={hero} className="w-auto max-h-[650px]" alt="hero" />
      </div>
    </div>
  );
};

export default ContactSections;
