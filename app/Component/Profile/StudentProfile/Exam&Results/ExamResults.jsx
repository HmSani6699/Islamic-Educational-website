import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const ExamResults = () => {
  const [openResult, setOpenResult] = useState();
  const handleClickResults = (id) => {
    setOpenResult((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="card_shadow mt-[30px]">
      <div className="px-[20px] py-[15px] border-b flex items-center justify-between">
        <h2 className="text-[#202C4B] text-[16px] font-[500] ">
          Exams & Results
        </h2>
      </div>

      {/* ====> More content <===== */}
      <div className="p-[20px]">
        <div className="border ">
          <div
            onClick={() => handleClickResults(1)}
            className={`flex items-center justify-between p-[10px] ${
              openResult === 1 && "bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-[10px]">
              <div className="p-[6px] rounded-[5px] bg-[#3d5ee1]">
                <IoCheckmarkDoneSharp className="text-white" />
              </div>
              <h2>First periodical</h2>
            </div>
            <IoIosArrowDown className={`${openResult === 1 && "hidden"}`} />
          </div>

          {/* ====> Open content <==== */}
          {openResult === 1 && <div>hallo</div>}
        </div>
      </div>
    </div>
  );
};

export default ExamResults;
