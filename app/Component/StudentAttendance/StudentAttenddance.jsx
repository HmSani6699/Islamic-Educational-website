import React from "react";
import CustomSearchForm from "../CustomSearchForm/CustomSearchForm";

const StudentAttenddance = () => {
  return (
    <div>
      {/* =====> Banner <===== */}
      <div className="h-[200px] px-[20px] py-[30px] bg-white mt-[40px]  rounded-t-[20px] border-t-[2px] border-[#008000]">
        <h2 className="text-[30px]  font-semibold text-center">
          Pakunda Islamia Hafezia Madrasa & Etimkhana
        </h2>
        <p className="text-[18px] text-center mt-[10px]">
          Baliapara, Sonarga, Narayangonj
        </p>
        <div className="flex items-center justify-center mt-[30px] ">
          <div className="h-[120px] w-[120px] rounded-full border-[3px] border-[#008000] bg-white flex items-center justify-center">
            <h2 className="font-bold text-[18px]"> Bangla</h2>
          </div>
        </div>
      </div>
      {/* =======> Midle content <====== */}
      <div className="mt-[80px]">
        <div className="flex items-center gap-[15px]">
          <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px] mt-[30px]">
            Student Attendance
          </button>
          <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px] mt-[30px]">
            Present Count
          </button>
          <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px] mt-[30px]">
            Absent Count
          </button>
          <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px] mt-[30px]">
            Attendance Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentAttenddance;
