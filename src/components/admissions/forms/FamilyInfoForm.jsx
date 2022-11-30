import React from "react";
import InputField from "../formFields/InputField";
import PhoneNumberField from "../formFields/PhoneInputField";
import SelectField from "../formFields/SelectField";

// born again array
const bornAgainArr = [
  {
    value: "",
    label: "Yes/No",
  },
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No",
  },
];

const FamilyInfoForm = (props) => {
  const {
    formField: {
      fatherName,
      fatherOccupation,
      fatherReligion,
      fatherPhoneNumber,
      motherName,
      motherOccupation,
      motherReligion,
      motherPhoneNumber,
      denominationName,
      denominationAddress,
      parentsBornAgain,
      objectionPreaching,
      enrollmentReason,
      pastorName,
    },
  } = props;

  return (
    // input fields
    <div className="flex flex-col items-center space-y-5 mt-[19px]">
      <div className="flex ">
        <InputField
          name={fatherName.name}
          label={fatherName.label}
          placeholder={fatherName.placeholder}
          inputType="text"
          style={`mr-[15px] w-[256px] h-[50px]`}
        />
        <InputField
          name={fatherOccupation.name}
          label={fatherOccupation.label}
          placeholder={fatherOccupation.placeholder}
          inputType="text"
          style={`w-[256px] h-[50px]`}
        />
      </div>
      <div className="flex">
        <InputField
          name={fatherReligion.name}
          label={fatherReligion.label}
          placeholder={fatherReligion.placeholder}
          inputType="text"
          style={`mr-[15px] w-[256px] h-[50px]`}
        />
        <PhoneNumberField
          name={fatherPhoneNumber.name}
          label={fatherPhoneNumber.label}
          inputType="tel"
          style={`mr-[0px]`}
        />
      </div>
      <div className="flex">
        <InputField
          name={motherName.name}
          label={motherName.label}
          placeholder={motherName.placeholder}
          inputType="text"
          style={`mr-[15px] w-[256px] h-[50px]`}
        />
        <InputField
          name={motherOccupation.name}
          label={motherOccupation.label}
          placeholder={motherOccupation.placeholder}
          inputType="text"
          style={`w-[256px] h-[50px]`}
        />
      </div>
      <div className="flex">
        <InputField
          name={motherReligion.name}
          label={motherReligion.label}
          placeholder={motherReligion.placeholder}
          inputType="text"
          style={`mr-[15px] w-[256px] h-[50px]`}
        />
        <PhoneNumberField
          name={motherPhoneNumber.name}
          label={motherPhoneNumber.label}
          inputType="tel"
          style={`mr-[0px]`}
        />
      </div>
      <InputField
        name={denominationName.name}
        label={denominationName.label}
        placeholder={denominationName.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={denominationAddress.name}
        label={denominationAddress.label}
        placeholder={denominationAddress.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <SelectField
        name={parentsBornAgain.name}
        label={parentsBornAgain.label}
        data={bornAgainArr}
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={objectionPreaching.name}
        label={objectionPreaching.label}
        placeholder={objectionPreaching.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={enrollmentReason.name}
        label={enrollmentReason.label}
        placeholder={enrollmentReason.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={pastorName.name}
        label={pastorName.label}
        placeholder={pastorName.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
    </div>
  );
};

export default FamilyInfoForm;
