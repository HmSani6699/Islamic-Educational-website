import React from "react";

const InputField = ({ title, type, placeholder, setValue }) => {
  return (
    <div>
      <p className="text-[14px] font-[500] text-[#202C4B] leading-[22px]">
        {title ? title : ""}
      </p>
      <input
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : "Wright the text"}
        onChange={(e) => setValue(e.target.value)}
        className=" w-full py-2 px-2 text-[14px] font-[400] rounded-[5px] leading-[22px] border border-[#E3E5E8] outline-[#506EE4] input_filed_gray mt-1.5"
      />
    </div>
  );
};

export default InputField;
