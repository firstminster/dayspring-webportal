import React from "react";
import StepButton from "../formStepButtons/StepButton";

const FamilyInfoForm = (props) => {
  const {
    formField: {},
    handleBack,
    handleSubmit,
  } = props;

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      {/* <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold mr-[160px]">
          Family Information
        </h2>
        <StepButton handleBack={handleBack} handleSubmit={handleSubmit} />
      </div> */}
      Family Info Form
    </div>
  );
};

export default FamilyInfoForm;
