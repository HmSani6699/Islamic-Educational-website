import React from "react";

const SelectInputField = ({ title, options, setValue }) => {
  console.log(options);
  return (
    <div>
      <p className="text-[16px] font-[400] leading-[22px]">
        {title ? title : ""}
      </p>
      <select
        onChange={(e) => setValue(e.target.value)}
        className=" w-full py-2 px-2 text-[16px] font-[400] leading-[22px] border border-[#E3E5E8] outline-[#008000] input_filed_gray mt-1.5"
      >
        <option value="">-----অনুগ্রহ করে নির্বাচন করুন-----</option>

        {options &&
          options?.map((item) => {
            return <option value={item?.value}>{item?.value}</option>;
          })}
      </select>
    </div>
  );
};

export default SelectInputField;
