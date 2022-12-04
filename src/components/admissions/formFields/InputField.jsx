import React from "react";
import { ErrorMessage, Field, useField } from "formik";
import { at } from "lodash";

const InputField = (props) => {
  const { name, label, placeholder, inputType, style, labelStyle } = props;
  // const [field, meta] = useField(props.name);
  // const [touched, error] = at(meta, "touched", "error");
  // const isError = touched && error && true;
  // console.log(field);
  // console.log(meta);
  // console.log(isError);

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className={`${labelStyle}`}>
        {label}
      </label>

      <Field
        min={1}
        name={name}
        type={inputType}
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
