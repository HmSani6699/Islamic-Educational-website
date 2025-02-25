import React from "react";
import { BsInfoCircle, BsInfoSquare } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";

const ParentsInformation = () => {
  return (
    <div className="bg-white border shadow-md rounded-[5px]">
      <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px]">
        <div className="bg-white p-[5px] rounded-[5px]">
          <IoMdInformationCircleOutline className="text-[#202C4B] text-[14px]" />
        </div>
        <h2 className="text-[#202C4B] font-semibold text-[18px]">
          Personal Information
        </h2>
      </div>
      {/*  */}
      <div className="flex items-center gap-[15px] mt-[20px] px-[20px]">
        <div className="border-dotted h-[80px] w-[80px] border-2 text-[#202C4B] border-[#e9edf4] rounded-[5px] flex items-center justify-center">
          <FiUploadCloud className="text-[#202C4B] text-[20px]" />
        </div>
        <div>
          <div className="flex items-center gap-[10px] mb-[15px]">
            <button className="text-[14px] text-[#202c4bab] py-[6px] px-[15px] hover:bg-[#506EE4] hover:text-white rounded-[5px]  border">
              Upload
            </button>
            <button className="text-[14px] text-[#fff] bg-[#506EE4] py-[6px] px-[15px] rounded-[5px]  border">
              Remobe
            </button>
          </div>
          <p className="text-[12px] text-[#515B73]">
            Upload image size 4MB, Format JPG, PNG, SVG
          </p>
        </div>
      </div>
      {/*  */}
      <div></div>
    </div>
  );
};

export default ParentsInformation;
