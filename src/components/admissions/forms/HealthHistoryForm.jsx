import React from "react";
import CheckboxInput from "../formFields/CheckboxInput";
import InputField from "../formFields/InputField";

const HealthHistoryForm = (props) => {
  const {
    formField: { checkedIllnesses },
  } = props;

  console.log(props);

  return (
    <div className="flex flex-col items-center space-y-5 mt-[19px]">
      <p className="w-[534px] text-center mt-[26px] mb-[32px]">
        Kindly tick any illnesses your child/ward has had from birth or as at
        the time of enrollment. If known, include dates.
      </p>

      <div className="flex justify-center">
        <p className="pr-[139px]">Illnesses</p>
        <p className="">Date</p>
      </div>

      <div className="">
        <CheckboxInput name={""} />
        {/* <InputField
          name=""
          label=""
          placeholder=""
          inputType="date"
          style={`mr-[15px] w-[256px] h-[50px] text-quick-silver uppercase `}
        /> */}
      </div>
    </div>
  );
};

export default HealthHistoryForm;
