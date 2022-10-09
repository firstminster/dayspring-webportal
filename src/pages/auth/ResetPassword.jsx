import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { dayspringLogo } from "../../assets/importAssets";

const ResetPassword = () => {
  // Formik initial values
  const initialValues = {
    otp_num: "",
    password: "",
    confirm_password: "",
  };

  // Formik validation schema
  const validationSchema = Yup.object().shape({
    otp_num: Yup.string().required("Please enter a valid OTP number."),
    password: Yup.string()
      .min(5, "Password is too Short!")
      .required("Please enter a valid password."),
    confirm_password: Yup.string()
      .min(5, "Password is too Short!")
      .required("Please confirm your password."),
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
          Reset Password!
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
                    htmlFor="_num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    OTP
                  </label>
                  <div className="mt-1">
                    <Field
                      id="otp_num"
                      name="otp_num"
                      type="text"
                      placeholder="Enter OTP"
                      autoComplete="otp_num"
                      className={`block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-primary focus:outline-none focus:ring-blue-primary sm:text-sm ${
                        errors.otp_num && touched.otp_num
                          ? "border-red-500"
                          : null
                      }`}
                    />

                    <ErrorMessage
                      name="otp_num"
                      component="div"
                      className="text-red-500 text-sm mt-2 "
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      autoComplete="current-password"
                      className={`block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-primary focus:outline-none focus:ring-blue-primary sm:text-sm ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : null
                      }`}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm  mt-2 "
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirm_password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <Field
                      id="confirm_password"
                      name="confirm_password"
                      type="password"
                      placeholder="Confirm Password"
                      autoComplete="current-password"
                      className={`block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-primary focus:outline-none focus:ring-blue-primary sm:text-sm ${
                        errors.confirm_password && touched.confirm_password
                          ? "border-red-500"
                          : null
                      }`}
                    />
                    <ErrorMessage
                      name="confirm_password"
                      component="div"
                      className="text-red-500 text-sm  mt-2 "
                    />
                  </div>
                </div>

                <div>
                  <button type="submit" className="btn">
                    Submit
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

export default ResetPassword;
