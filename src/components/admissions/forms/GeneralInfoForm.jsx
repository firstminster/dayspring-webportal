import React from "react";
import InputField from "../formFields/InputField";
import SelectField from "../formFields/SelectField";
import PhoneNumberField from "../formFields/PhoneInputField";
import CountryInputField from "../formFields/CountryInputField";

// gender array
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

// class category array
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
    value: "nursery-two",
    label: "Nursery Two",
  },
  {
    value: "nursery-three",
    label: "Nursery Three",
  },
  {
    value: "primary-one",
    label: "Primary One",
  },
  {
    value: "primary-two",
    label: "Primary Two",
  },
  {
    value: "primary-three",
    label: "Primary Three",
  },
  {
    value: "primary-four",
    label: "Primary Four",
  },
  {
    value: "primary-five",
    label: "Primary Five",
  },
  {
    value: "primary-six",
    label: "Primary six",
  },
  {
    value: "junior-sec-one",
    label: "JS One",
  },
  {
    value: "junior-sec-two",
    label: "JS Two",
  },
  {
    value: "junior-sec-three",
    label: "JS Three",
  },
  {
    value: "senior-sec-one",
    label: "SS One",
  },
  {
    value: "senior-sec-two",
    label: "SS Two",
  },
  {
    value: "senior-sec-three",
    label: "SS Three",
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
  } = props;

  console.log(props);

  return (
    // input fields
    <div className="flex flex-col items-center space-y-5 mt-[19px]">
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0">
        <InputField
          name={surname.name}
          label={surname.label}
          placeholder={surname.placeholder}
          inputType="text"
          style={`w-[316px] lg:mr-[15px] lg:w-[256px] h-[50px]`}
        />
        <InputField
          name={firstName.name}
          label={firstName.label}
          placeholder={firstName.placeholder}
          inputType="text"
          style={`w-[316px] lg:w-[256px] h-[50px]`}
        />
      </div>
      <InputField
        name={middleName.name}
        label={middleName.label}
        placeholder={middleName.placeholder}
        inputType="text"
        style={`w-[316px] lg:w-[527px] h-[50px]`}
      />
      <InputField
        name={email.name}
        label={email.label}
        placeholder={email.placeholder}
        inputType="email"
        style={`w-[316px] lg:w-[527px] h-[50px]`}
      />
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0">
        <InputField
          name={dateOfBirth.name}
          label={dateOfBirth.label}
          placeholder={dateOfBirth.placeholder}
          inputType="date"
          style={`w-[316px] lg:mr-[15px] lg:w-[256px] h-[50px] text-quick-silver uppercase `}
        />
        <SelectField
          name={gender.name}
          label={gender.label}
          data={genderArr}
          style={`w-[316px] lg:w-[256px] h-[50px]`}
        />
      </div>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0">
        <InputField
          name={age.name}
          label={age.label}
          placeholder={age.placeholder}
          inputType="number"
          style={`w-[316px] lg:mr-[15px] lg:w-[256px] h-[50px]`}
        />
        <InputField
          name={placeOfBirth.name}
          label={placeOfBirth.label}
          placeholder={placeOfBirth.placeholder}
          inputType="text"
          style={`w-[316px] lg:w-[256px] h-[50px]`}
        />
      </div>
      {/* phone number & Nationality */}
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0">
        <PhoneNumberField
          name={phoneNumber.name}
          label={phoneNumber.label}
          inputType="tel"
          style={`w-[316px] lg:w-[256px] lg:mr-[15px]`}
        />
        <CountryInputField
          name={nationality.name}
          label={nationality.label}
          placeholder={nationality.placeholder}
          inputStyle={`w-[316px] lg:w-[256px] h-[50px]`}
        />
      </div>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0">
        <InputField
          name={stateOfOrigin.name}
          label={stateOfOrigin.label}
          placeholder={stateOfOrigin.placeholder}
          inputType="text"
          style={`w-[316px] lg:mr-[15px] lg:w-[256px] h-[50px]`}
        />
        <InputField
          name={town.name}
          label={town.label}
          placeholder={town.placeholder}
          inputType="text"
          style={`w-[316px] lg:w-[256px] h-[50px]`}
        />
      </div>
      <SelectField
        name={classCategory.name}
        label={classCategory.label}
        data={classCatArr}
        style={`w-[316px] lg:w-[527px] h-[50px]`}
      />
      <InputField
        name={address.name}
        label={address.label}
        placeholder={address.placeholder}
        inputType="text"
        style={`w-[316px] lg:w-[527px] h-[50px]`}
      />
    </div>
  );
};

export default GeneralInfoForm;
