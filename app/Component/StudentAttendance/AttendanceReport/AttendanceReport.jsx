import React from "react";
import TextareaFiled from "../../InputField/TextareaFiled";
import { IoIosCloseCircle } from "react-icons/io";

const AttendanceReport = ({ open, setOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-[#03240399]">
      <div className=" bg-white  w-[600px] rounded-[15px] p-[20px] relative ">
        {/* ===> Close icon <==== */}
        <IoIosCloseCircle
          onClick={() => setOpen(false)}
          className="text-[25px] text-red-600 absolute right-[5px] top-[5px] cursor-pointer"
        />
        <h2 className="text-[25px] font-semibold text-center mb-[30px]">
          Attendance report
        </h2>

        <TextareaFiled
          title={"Report"}
          placeholder={"Please write the student attendance report"}
        />

        <div className="flex justify-end mt-[20px]">
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[8px] rounded-[8px]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReport;
