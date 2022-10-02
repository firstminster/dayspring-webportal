import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { dayspringLogo } from "../../utils/importAssets";

const ForgotPassword = () => {
  // Formik initial values
  const initialValues = {
    student_num: "",
    password: "",
  };

  // Formik validation schema
  const validationSchema = Yup.object().shape({
    student_num: Yup.string().required("Please enter a valid student number."),
    password: Yup.string()
      .min(5, "Password is too Short!")
      .required("Please enter a valid password."),
  });

  // Login submit handler
  const handleLogin = (payload, { setSubmitting }) => {
    console.log(payload);
    setSubmitting(false);
  };
  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-16 w-auto"
          src={dayspringLogo}
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-xl font-bold tracking-tight text-gray-900">
          Proceed to reset password!
        </h2>
        {/* <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            start your 14-day free trial
          </a>
        </p> */}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="student_num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Student Number / Email / Mobile
                  </label>
                  <div className="mt-1">
                    <Field
                      id="student_num"
                      name="student_num"
                      type="text"
                      placeholder="Student Number / Email / Mobile"
                      autoComplete="student_num"
                      className={`block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${
                        errors.student_num && touched.student_num
                          ? "border-red-500"
                          : null
                      }`}
                    />

                    <ErrorMessage
                      name="student_num"
                      component="div"
                      className="text-red-500 text-sm mt-2 "
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-dark-blue focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-2 transition-all duration-300 ease-out"
                  >
                    Proceed
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;