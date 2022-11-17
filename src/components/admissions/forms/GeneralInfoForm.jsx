import React from "react";
import { Field } from "formik";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import InputField from "../formFields/InputField";

const GeneralInfoForm = (props) => {
  const {
    formField: {
      surname,
      firstName,
      middleName,
      email,
      dateOfBirth,
      gender,
      age,
      placeOfBirth,
      phoneNumber,
      nationality,
      stateOfOrigin,
      town,
      classCategory,
      address,
    },
  } = props;

  return (
    <div className="container mx-auto flex flex-col items-center justify-center ">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold mr-[160px]">General Information</p>
        <div className="flex">
          <button className=" bg-gray-x-11-gray w-[30px] h-[30px] flex items-center justify-center mr-2 rounded-full">
            <FaArrowLeft className="w-[13.54px] h-[11.89px]" />
          </button>
          <button className="bg-blue-primary w-[30px] h-[30px]w-[30px] h-[30px] flex items-center justify-center rounded-full">
            <FaArrowRight className="w-[13.54px] h-[11.89px] text-white " />
          </button>
        </div>
      </div>

      {/* input fields */}
      <div className="flex flex-col mt-[19px]">
        <div className="flex">
          <InputField
            name={surname.name}
            label={surname.label}
            placeholder={surname.placeholder}
            style={`mr-[15px] w-[256px] h-[50px]`}
          />
          <InputField
            name={firstName.name}
            label={firstName.label}
            placeholder={firstName.placeholder}
            style={`w-[256px] h-[50px]`}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfoForm;
