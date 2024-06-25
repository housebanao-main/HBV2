"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slice/slice";
import { CommonHeading } from "../../Heading/CommonHeading";
import { SubHeading } from "../../SubHeading/SubHeading";
import { CustomField } from "../../Utils/CustomField/CustomField";
import { SubmitButton } from "../../Button/SubmitButton";
import Image from "next/image";
import logo from "../../../../../public/assets/images/logo.svg";

// Sample SVG for dropdown icon in brown color, thinner line
const dropdownIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10L12 15L17 10" stroke="brown" strokeWidth="2" />
  </svg>
);

// Sample SVG for services icon
const servicesIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-2.95-.49-5.26-2.8-5.75-5.75H4v-2h1.25c.49-2.95 2.8-5.26 5.75-5.75V4h2v1.25c2.95.49 5.26 2.8 5.75 5.75H20v2h-1.25c-.49 2.95-2.8 5.26-5.75 5.75V20h-2v-1.07z" fill="brown" />
  </svg>
);

const BookingPopTwo = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    location: "",
    budget: "",
    area: "",
    size: "",
    services: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    dispatch(closeModal({ visible: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    // Log the formData to check if it's correctly capturing the input values
    console.log("Form Data:", formData);

    // Basic client-side validation
    if (!formData.name || !formData.phoneNo || !formData.location) {
      // Log the missing required fields
      console.log("Missing required fields:", formData);

      // Set error message if required fields are missing
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      // Your fetch request and submission logic here...
    } catch (error) {
      console.error("Error booking appointment:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center">
      <div className="absolute top-12 flex items-center justify-center cursor-pointer text-brown" onClick={handleClose}>
        <span className="mr-2 text-[20px] font-semibold">LOAD MORE</span>
        {dropdownIcon}
      </div>
      <div className="bg-white border border-black-0.5 rounded-lg p-16 mt-12 w-full max-w-4xl">
        <div className="flex flex-col items-center mb-12">
          <CommonHeading className={"text-[25px] font-extrabold"}>
            Book your appointment
          </CommonHeading>
          <SubHeading className={"text-center mt-[7px]"}>
            Get free consultation
          </SubHeading>

          {successMessage && (
            <div className="text-green-500 text-center mb-4">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">{errorMessage}</div>
          )}
        </div>

        <form className="flex flex-col items-center gap-[20px]" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-12 md:gap-16">
            <div className="flex flex-col gap-4 rounded-md">
              <CustomField
                labelTitle="name"
                FieldType="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md"
              />
              <CustomField
                labelTitle="phoneNo"
                FieldType="text"
                placeholder="Phone Number"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="w-full rounded-md"
              />
              <CustomField
                labelTitle="areasize"
                FieldType="number"
                placeholder="Area Size"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full rounded-md"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-md">
              <CustomField
                labelTitle="location"
                FieldType="text"
                placeholder="Location of your Plot"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full rounded-md"
              />
              <CustomField
                labelTitle="budget"
                FieldType="number"
                placeholder="Budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-sm"
              />
              <CustomField
                labelTitle="Services"
                FieldType="text"
                placeholder="Services"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full rounded-md"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-md relative">
              
             
            </div>
          </div>

          <SubmitButton type="submit" className="mt-4">
            Book Now
          </SubmitButton>
        </form>
      </div>
    </section>
  );
};

export default BookingPopTwo;
