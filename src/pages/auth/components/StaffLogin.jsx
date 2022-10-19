import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { dayspringLogo, purpleShelvesImg } from "../../../assets/importAssets";

const StaffLogin = () => {
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
    <div className="flex min-h-screen bg-slate-50">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            {/* <img
              className="h-16 w-auto"
              src={dayspringLogo}
              alt="Your Company"
            /> */}
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            {/* <p className="mt-2 text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </p> */}
          </div>

          <div className="mt-8">
            <div className="mt-6">
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
                        Student Number
                      </label>
                      <div className="mt-1">
                        <Field
                          id="student_num"
                          name="student_num"
                          type="text"
                          placeholder="Student Number"
                          autoComplete="student_num"
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
                          placeholder="Password"
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

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <Link
                          to="/forgot"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </div>

                    <div>
                      <button type="submit" className="btn">
                        Sign in
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
                      to="#"
                      className="bg-slate-50 px-2 font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      New student enrollment?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute top-[98px] inset-0 h-[90%] w-full object-cover"
          src={purpleShelvesImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default StaffLogin;
