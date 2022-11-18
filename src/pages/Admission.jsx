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

// const _renderStepContent = (step) => {
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

  // submit handler
  const _handleSubmit = () => {
    setActiveStep(activeStep + 1);
  };

  // form back button handler
  const _handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const _renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <GeneralInfoForm
            formField={formField}
            handleBack={_handleBack}
            handleSubmit={_handleSubmit}
          />
        );
      case 1:
        return <FamilyInfoForm />;
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
        {/* Notice */}
        <div className="my-[27px]">
          <p className="text-center">
            On completing this form, you will be required to pay a registration
            fee of N10,000.
          </p>
        </div>
        {/* Forms */}
        <Formik
          initialValues={formInitialValues}
          validationSchema={currentValidationSchema}
          onSubmit={_handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form id={formId}>
              {_renderStepContent(activeStep)}

              <div className="flex items-center justify-center">
                <button className="flex items-center justify-center w-[180px] h-[37px] lg:w-[527px] lg:h-[49px] px-[20px] py-[8px] my-[48px] bg-blue-primary text-white text-[16px] xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out ">
                  {isLastStep ? "Submit & Make payment" : "Next"}
                  <FaArrowRight className="ml-3 w-[13.54px] h-[11.89px] text-white " />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Admission;
