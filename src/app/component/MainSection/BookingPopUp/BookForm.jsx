import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slice/slice";
import { CommonHeading } from "../../Heading/CommonHeading";
import { SubHeading } from "../../SubHeading/SubHeading";
import { CustomField } from "../../Utils/CustomField/CustomField";
import { SubmitButton } from "../../Button/SubmitButton";
import Image from "next/image";
import logo from "../../../../../public/assets/images/logo.svg";

export const BookForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    location: "",
    budget: "",
    area: "",
    size: "",
    services: ""
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
    <section className="relative lg:w-[450px] w-full h-auto bg-white lg:rounded-[20px] rounded-none flex flex-col shadow-md mt-[70px] m-[10px] p-[20px] border-[0.5px] z-10">
      <div className="flex flex-col items-center mt-[8px]">
        <Image src={logo} alt="Company Logo" width={100} height={100} />
        <CommonHeading className={"text-[25px] font-extrabold"}>
          Book your appointment
        </CommonHeading>
        <SubHeading className={"text-center mt-[7px]"}>
          Get free consultation
        </SubHeading>

        {successMessage && (
          <div className="text-green-500 text-center mb-4">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        <form className="flex flex-col items-center gap-[10px] mt-[18px]" onSubmit={handleSubmit}>
          <CustomField
            labelTitle="name"
            FieldType="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <CustomField
            labelTitle="phoneNo"
            FieldType="text"
            placeholder="Phone Number"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          <CustomField
            labelTitle="location"
            FieldType="text"
            placeholder="Location of your Plot"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
         
          <CustomField
            labelTitle="area"
            FieldType="number"
            placeholder="Area"
            name="area"
            value={formData.area}
            onChange={handleChange}
          />
         
          <CustomField
            labelTitle="services"
            FieldType="text"
            placeholder="Services "
            name="services"
            value={formData.services}
            onChange={handleChange}
          />
          <SubmitButton type="submit">Book Now</SubmitButton>
        </form>
      </div>
    </section>
  );
};