import { borderRadius, height } from "@mui/system";
import { ErrorMessage, useField } from "formik";
import React from "react";
import PhoneInput from "react-phone-input-2";

const PhoneInputField = (props) => {
  const { name, label, inputType, style } = props;
  const [field, meta, helpers] = useField(props.name);

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="">
        {label}
      </label>
      <PhoneInput
        country={"ng"}
        value={field.value}
        type={inputType}
        className={`${style}`}
        inputStyle={{
          color: "#A0A0A0",
          width: "256px",
          height: "50px",
          borderRadius: "10px",
          borderColor: "#A0A0A0",
        }}
        onChange={(value) => {
          helpers.setValue(value);
        }}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-2 "
      />
    </div>
  );
};

export default PhoneInputField;
