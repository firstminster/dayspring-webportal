import React from "react";
import InputField from "../formFields/InputField";
import StepButton from "../formStepButtons/StepButton";

const SchoolInfoForm = (props) => {
  const {
    formField: {
      lastSchool,
      schoolAddress,
      lastClassPassed,
      presentClass,
      specialInterest,
      academicGoal,
      reasonChangingSchool,
      disciplinaryDifficulty,
      academicDifficulty,
      emotionalChallenge,
    },
  } = props;
  return (
    <div className="flex flex-col items-center space-y-5 mt-[19px]">
      <InputField
        name={lastSchool.name}
        label={lastSchool.label}
        placeholder={lastSchool.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={schoolAddress.name}
        label={schoolAddress.label}
        placeholder={schoolAddress.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <div className="flex ">
        <InputField
          name={lastClassPassed.name}
          label={lastClassPassed.label}
          placeholder={lastClassPassed.placeholder}
          inputType="text"
          style={`mr-[15px] w-[256px] h-[50px]`}
        />
        <InputField
          name={presentClass.name}
          label={presentClass.label}
          placeholder={presentClass.placeholder}
          inputType="text"
          style={`w-[256px] h-[50px]`}
        />
      </div>
      <InputField
        name={specialInterest.name}
        label={specialInterest.label}
        placeholder={specialInterest.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={academicGoal.name}
        label={academicGoal.label}
        placeholder={academicGoal.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={reasonChangingSchool.name}
        label={reasonChangingSchool.label}
        placeholder={reasonChangingSchool.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={disciplinaryDifficulty.name}
        label={disciplinaryDifficulty.label}
        placeholder={disciplinaryDifficulty.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
        labelStyle={`w-[521px]`}
      />
      <InputField
        name={academicDifficulty.name}
        label={academicDifficulty.label}
        placeholder={academicDifficulty.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={emotionalChallenge.name}
        label={emotionalChallenge.label}
        placeholder={emotionalChallenge.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
        labelStyle={`w-[521px]`}
      />
    </div>
  );
};

export default SchoolInfoForm;
