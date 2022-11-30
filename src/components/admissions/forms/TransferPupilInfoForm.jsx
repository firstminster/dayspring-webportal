import React from "react";
import InputField from "../formFields/InputField";
import SelectField from "../formFields/SelectField";

// last class category array
const lastClassCatArr = [
  {
    value: "",
    label: "Select class last passed",
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

// class attended category array
const classAttendedCatArr = [
  {
    value: "",
    label: "Select class last attended",
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

const TransferPupilInfoForm = (props) => {
  const {
    formField: {
      lastSchoolTransfer,
      schoolAddressTransfer,
      lastClassPassedTransfer,
      lastClassAttendedTransfer,
      specialInterestTransfer,
      hearAboutTheSchool,
      academicGoalTransfer,
      disciplinaryDifficultyTransfer,
      academicDifficultyTransfer,
      emotionalChallengeTransfer,
    },
  } = props;
  return (
    <div className="flex flex-col items-center space-y-5 mt-[19px]">
      <InputField
        name={lastSchoolTransfer.name}
        label={lastSchoolTransfer.label}
        placeholder={lastSchoolTransfer.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={schoolAddressTransfer.name}
        label={schoolAddressTransfer.label}
        placeholder={schoolAddressTransfer.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <div className="flex ">
        <SelectField
          name={lastClassPassedTransfer.name}
          label={lastClassPassedTransfer.label}
          data={lastClassCatArr}
          style={`w-[256px] h-[50px] mr-[15px]`}
        />
        <SelectField
          name={lastClassAttendedTransfer.name}
          label={lastClassAttendedTransfer.label}
          data={classAttendedCatArr}
          style={`w-[256px] h-[50px]`}
        />
      </div>
      <InputField
        name={specialInterestTransfer.name}
        label={specialInterestTransfer.label}
        placeholder={specialInterestTransfer.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={hearAboutTheSchool.name}
        label={hearAboutTheSchool.label}
        placeholder={hearAboutTheSchool.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={academicGoalTransfer.name}
        label={academicGoalTransfer.label}
        placeholder={academicGoalTransfer.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={disciplinaryDifficultyTransfer.name}
        label={disciplinaryDifficultyTransfer.label}
        placeholder={disciplinaryDifficultyTransfer.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
        labelStyle={`w-[521px]`}
      />
      <InputField
        name={academicDifficultyTransfer.name}
        label={academicDifficultyTransfer.label}
        placeholder={academicDifficultyTransfer.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
      />
      <InputField
        name={emotionalChallengeTransfer.name}
        label={emotionalChallengeTransfer.label}
        placeholder={emotionalChallengeTransfer.placeholder}
        inputType="text"
        style={`w-[527px] h-[50px]`}
        labelStyle={`w-[521px]`}
      />
    </div>
  );
};

export default TransferPupilInfoForm;
