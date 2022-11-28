import React from "react";
import { ErrorMessage, useField } from "formik";
import ReactFlagsSelect from "react-flags-select";

const CountryInputField = (props) => {
  const { name, label, placeholder, inputStyle } = props;
  const [field, meta, helpers] = useField(props.name);

  return (
    <div className="">
      <label htmlFor={name} className="">
        {label}
      </label>
      <ReactFlagsSelect
        selected={field.value}
        onSelect={(value) => {
          helpers.setValue(value);
        }}
        searchable={true}
        placeholder={placeholder}
        className={`${inputStyle}  rounded-[10px] border border-quick-silver 
        placeholder-quick-silver  focus:border-blue-primary focus:outline-none 
        outline-0 focus:ring-blue-primary`}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-2 "
      />
    </div>
  );
};

export default CountryInputField;
