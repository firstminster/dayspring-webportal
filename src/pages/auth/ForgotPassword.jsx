import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { dayspringLogo } from "../../assets/importAssets";

const ForgotPassword = () => {
  // Formik initial values
  const initialValues = {
    student_num: "",
  };

  // Formik validation schema
  const validationSchema = Yup.object().shape({
    student_num: Yup.string().required("Please enter a valid student number."),
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
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
          Forgot Password?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your student number or email to proceed.
          {/* <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            start your 14-day free trial
          </a> */}
        </p>
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
                      // autoComplete="student_num"
                      className={`block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-primary focus:outline-none focus:ring-blue-primary sm:text-sm ${
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
                  <button type="submit" className="btn">
                    Proceed
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <Link
                  to="/login"
                  className="bg-white px-2 font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Remember your password? Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
