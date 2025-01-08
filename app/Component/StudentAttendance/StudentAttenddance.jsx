import React from "react";

const StudentAttenddance = () => {
  return (
    <div>
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
    </div>
  );
};

export default StudentAttenddance;
