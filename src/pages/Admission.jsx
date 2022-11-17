import React from "react";
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

// destructure the form model data
const { formId, formField } = admissionFormModel;

const _renderStepContent = (step) => {
  switch (step) {
    case 0:
      return <GeneralInfoForm />;
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

const Admission = () => {
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
        <Formik>
          {({ errors, touched, isSubmitting }) => (
            <Form id={formId}>{_renderStepContent(0)}</Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Admission;
