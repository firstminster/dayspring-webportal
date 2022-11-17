import React from "react";
import { Field, useField } from "formik";

const InputField = (props) => {
  const { errorText, name, label, placeholder, style } = props;
  const [field, meta] = useField(props);
  // console.log(field);
  // console.log(meta);
  // console.log(rest);

  return (
    <div className="flex flex-col">
      <label htmlFor="surname" className="">
        {label}
      </label>
      <Field
        name={name}
        type="text"
        placeholder={placeholder}
        className={`${style} rounded-[10px]`}
      />
    </div>
  );
};

export default InputField;
