import React from "react";
import { ErrorMessage, Field, useField } from "formik";
import { at } from "lodash";

const InputField = (props) => {
  const { errorText, name, label, placeholder, style } = props;
  const [field, meta] = useField(props);
  const [touched, error] = at(meta, "touched", "error");
  // const isError = touched && error && true;
  // console.log(field);
  // console.log(meta);
  // console.log(isError);

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="">
        {label}
      </label>
      <Field
        name={name}
        type="text"
        placeholder={placeholder}
        className={`${style} appearance-none rounded-[10px] border border-quick-silver placeholder-quick-silver focus:border-blue-primary focus:outline-none focus:ring-blue-primary `}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-2 "
      />
    </div>
  );
};

export default InputField;
