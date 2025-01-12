import React from "react";
import TextareaFiled from "../../InputField/TextareaFiled";
import { IoIosCloseCircle } from "react-icons/io";

const AttendanceUpdate = ({ setOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-[#03240399]">
      <div className=" bg-white  w-[600px] rounded-[15px] p-[20px] relative border-t-[3px] border-[#008000] ">
        {/* ===> Close icon <==== */}
        <IoIosCloseCircle
          onClick={() => setOpen(false)}
          className="text-[25px] text-red-600 absolute right-[5px] top-[5px] cursor-pointer"
        />
        <h2 className="text-[25px] font-semibold text-center mb-[40px]">
          Attendance report
        </h2>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-[20px]">
            <div>
              <p className="text-[16px] font-[400] leading-[22px] mb-[8px]">
                Current attendance
              </p>
              <button className="flex items-center gap-[8px] bg-red-600  text-white px-[20px] py-[3px] rounded-[8px]">
                No
              </button>
            </div>
            <div>
              <p className="text-[16px] font-[400] leading-[22px] mb-[8px]">
                Update attendance
              </p>
              <div className="flex items-center gap-[15px] ">
                <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[3px] rounded-[8px]">
                  Yess
                </button>
              </div>
            </div>
          </div>

          <TextareaFiled
            title={"Report (Optional)"}
            placeholder={"Please write the student attendance report"}
          />
        </div>

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

export default AttendanceUpdate;
