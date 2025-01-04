import React, { useState } from "react";
import About from "./About/About";
import Address from "./Address/Address";
import LearningStatus from "./LearningStatus/LearningStatus";
import FeeDetails from "./FeeDetails/FeeDetails";

const AdmissionForm = () => {
  const [currentPage, setCurrentPage] = useState("about");
  return (
    <div>
      <div className="px-[20px] py-[30px] bg-white mt-[40px]  rounded-t-[20px] border-t-[2px] border-[#008000]">
        <h2 className="text-[25px] font-semibold text-center mb-[40px]">
          ভর্তি ফরম
        </h2>
        {/* =====> Progress  <===== */}
        <div className="mb-[20px]">
          <div className="">
            <div className="flex items-center justify-between z-10">
              <div className=" bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
            </div>
            <div className="border-[3px] rounded-full -mt-[15.5px]"></div>
          </div>
          <div className="-mt-[15.5px]">
            <div className="flex items-center justify-between z-10">
              <div className=" bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-[#008000] rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-[#008000] rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-[#008000] rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
              <div className="h-[25px] w-[25px] bg-gray-200 rounded-full"></div>
            </div>
            <div className="border-[3px] border-[#008000] rounded-full -mt-[15.5px] w-[50%]"></div>
          </div>
        </div>
      </div>
      {currentPage === "about" ? (
        <About setCurrentPage={setCurrentPage} />
      ) : currentPage === "address" ? (
        <Address setCurrentPage={setCurrentPage} />
      ) : currentPage === "learningStatus" ? (
        <LearningStatus setCurrentPage={setCurrentPage} />
      ) : currentPage === "feeDetails" ? (
        <FeeDetails setCurrentPage={setCurrentPage} />
      ) : (
        <h2>page nai</h2>
      )}
    </div>
  );
};

export default AdmissionForm;
