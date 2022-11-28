import React from "react";
import { Field } from "formik";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import InputField from "../formFields/InputField";
import SelectField from "../formFields/SelectField";
import PhoneNumberField from "../formFields/PhoneInputField";
import CountryInputField from "../formFields/CountryInputField";
import StepButton from "../formStepButtons/StepButton";

// gender
const genderArr = [
  {
    value: "",
    label: "Choose your gender",
  },
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

// class category
const classCatArr = [
  {
    value: "",
    label: "Class Category",
  },
  {
    value: "creche",
    label: "Crèche",
  },
  {
    value: "nursery-one",
    label: "Nursery One",
  },
  {
    value: "primary-one",
    label: "Primary One",
  },
  {
    value: "junior-sec-one",
    label: "JS One",
  },
  {
    value: "senior-sec-one",
    label: "SS One",
  },
];

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
    handleBack,
    handleSubmit,
  } = props;

  // console.log(props);

  return (
    // <div className="container mx-auto flex flex-col items-center justify-center">
    // <div className="flex items-center justify-between">
    //   <h2 className="text-3xl font-semibold mr-[160px]">
    //     General Information
    //   </h2>
    //   <StepButton handleBack={handleBack} handleSubmit={handleSubmit} />
    // </div>

    // {/* input fields */}
    <div className="flex flex-col space-y-5 mt-[19px]">
      <div className="flex">
        <InputField
          name={surname.name}
          label={surname.label}
          placeholder={surname.placeholder}
          inputType="text"
          style={`mr-[15px] w-[256px] h-[50px]`}
        />
        <InputField
          name={firstName.name}
          label={firstName.label}
          placeholder={firstName.placeholder}
          inputType="text"
          style={`w-[256px] h-[50px]`}
        />
      </div>
      <InputField
        name={middleName.name}
        label={middleName.label}
        placeholder={middleName.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={email.name}
        label={email.label}
        placeholder={email.placeholder}
        inputType="email"
        style={`w-[527px] h-[50px]`}
      />
      <div className="flex">
        <InputField
          name={dateOfBirth.name}
          label={dateOfBirth.label}
          placeholder={dateOfBirth.placeholder}
          inputType="date"
          style={`mr-[15px] w-[256px] h-[50px] text-quick-silver uppercase `}
        />
        <SelectField
          name={gender.name}
          label={gender.label}
          data={genderArr}
          style={`w-[256px] h-[50px]`}
        />
      </div>
      <div className="flex">
        <InputField
          name={age.name}
          label={age.label}
          placeholder={age.placeholder}
          inputType="number"
          style={`mr-[15px] w-[256px] h-[50px]`}
        />
        <InputField
          name={placeOfBirth.name}
          label={placeOfBirth.label}
          placeholder={placeOfBirth.placeholder}
          inputType="text"
          style={`w-[256px] h-[50px]`}
        />
      </div>
      {/* phone number & Nationality */}
      <div className="flex">
        <PhoneNumberField
          name={phoneNumber.name}
          label={phoneNumber.label}
          inputType="tel"
          style={`mr-[15px]`}
        />
        <CountryInputField
          name={nationality.name}
          label={nationality.label}
          placeholder={nationality.placeholder}
          // inputType="text"
          inputStyle={`w-[256px] h-[50px]`}
        />
      </div>
      <div className="flex">
        <InputField
          name={stateOfOrigin.name}
          label={stateOfOrigin.label}
          placeholder={stateOfOrigin.placeholder}
          inputType="text"
          style={`mr-[15px] w-[256px] h-[50px]`}
        />
        <InputField
          name={town.name}
          label={town.label}
          placeholder={town.placeholder}
          inputType="text"
          style={`w-[256px] h-[50px]`}
        />
      </div>
      <SelectField
        name={classCategory.name}
        label={classCategory.label}
        data={classCatArr}
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={address.name}
        label={address.label}
        placeholder={address.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
    </div>
    // </div>
  );
};

export default GeneralInfoForm;
