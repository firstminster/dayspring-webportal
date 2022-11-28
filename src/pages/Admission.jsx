import React, { useState } from "react";
import { Form, Formik } from "formik";
// components
import {
  validationSchema,
  admissionFormModel,
  formInitialValues,
  GeneralInfoForm,
  FamilyInfoForm,
  SchoolInfoForm,
  TransferPupilInfoForm,
  HealthHistoryForm,
} from "../components";
import { FaArrowRight } from "react-icons/fa";
import StepButton from "../components/admissions/formStepButtons/StepButton";

// muilti-form steps
const steps = [
  "General information",
  "Family information",
  "School information",
  "Transfer pupil info",
  "Health history",
];
// destructure the form model data
const { formId, formField } = admissionFormModel;

// const renderStepContent = (step) => {
//   switch (step) {
//     case 0:
//       return <GeneralInfoForm formField={formField} />;
//     case 1:
//       return <FamilyInfoForm />;
//     case 2:
//       return <SchoolInfoForm />;
//     case 3:
//       return <TransferPupilInfoForm />;
//     case 4:
//       return <HealthHistoryForm />;

//     default:
//       return <div>Not Found</div>;
//   }
// };

const Admission = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  // console.log(isLastStep);
  // console.log(steps.length);

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // submit form function
  const submitForm = async (values, actions) => {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  };

  // submit handler
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  // back button handler
  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  // next button handler
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <GeneralInfoForm
            formField={formField}
            // handleBack={handlePrev}
            // handleSubmit={handleSubmit}
          />
        );
      case 1:
        return (
          <FamilyInfoForm
            formField={formField}
            // handleBack={handlePrev}
            // handleSubmit={handleSubmit}
          />
        );
      case 2:
        return <SchoolInfoForm />;
      case 3:
        return <TransferPupilInfoForm />;
      case 4:
        return <HealthHistoryForm />;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <section className="relative">
      <div className="absolute top-[95px]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-white bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid w-screen h-[280px] ">
          <h1 className="text-6xl font-semibold">Admissions</h1>
          <p className="text-center mt-[21px] text-2xl ">
            To enrol your child at Dayspring Academy, kindly assist <br />
            them in filling the form below. This should take <br /> 30 minutes
            or less.
          </p>
        </div>

        <div className="container mx-auto flex flex-col items-center justify-center">
          {/* Notice */}
          <div className="my-[27px]">
            <p className="">
              On completing this form, you will be required to pay a
              registration fee of N10,000.
            </p>
          </div>
          <>
            {/* // <Step key={label}>
              //   <StepLabel>{label}</StepLabel>
              // </Step> */}
            {/* General Information */}
            <div className="flex items-center justify-between w-[527px]">
              <h2 className="text-3xl font-semibold mr-[160px]">
                {steps.find((label, idx) => {
                  return idx === activeStep;
                })}
              </h2>
              <StepButton
                handleBack={handlePrev}
                handleSubmit={handleSubmit}
                activeStep={activeStep}
                steps={steps}
              />
            </div>
            {/* Forms */}
            {activeStep === steps.length ? (
              <div className="">Submitted Successfully</div>
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form id={formId}>
                    {renderStepContent(activeStep)}

                    <div className="flex items-center justify-center">
                      <button
                        disabled={isSubmitting}
                        className="flex items-center justify-center w-[180px] h-[37px] lg:w-[527px] lg:h-[49px] px-[20px] py-[8px] my-[48px] bg-blue-primary text-white text-[16px] xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
                      >
                        {isLastStep ? "Submit & Make payment" : "Next"}
                        <FaArrowRight className="ml-3 w-[13.54px] h-[11.89px] text-white " />
                      </button>
                      {/* {isSubmitting && <p className="">loading</p>} */}
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </>
        </div>
      </div>
    </section>
  );
};

export default Admission;
