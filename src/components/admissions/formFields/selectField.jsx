import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";

const SelectField = (props) => {
  const { name, label, data, style } = props;

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="">
        {label}
      </label>
      <Field
        as="select"
        name={name}
        className={`${style} appearance-none rounded-[10px] border border-quick-silver placeholder-quick-silver text-quick-silver focus:border-blue-primary focus:outline-none focus:ring-blue-primary`}
      >
        {data.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-2 "
      />
    </div>
  );
};

SelectField.defaultProps = {
  data: [],
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SelectField;
