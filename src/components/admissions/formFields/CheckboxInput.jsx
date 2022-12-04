import { Field } from "formik";
import React from "react";

const CheckboxInput = () => {
  return (
    <div className={"flex"}>
      <label>
        <Field type="checkbox" name="checkedIllnesses" value="Allergy" />
        Allergy
      </label>
    </div>
  );
};

export default CheckboxInput;
