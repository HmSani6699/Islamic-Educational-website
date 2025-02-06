import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Calander from "../../Calander/Calander";

const AttendanceView = ({ setOpen }) => {
  const [calendarData, setCalendarData] = useState([
    {
      month: "january",
      present_date: [
        {
          date: "01/01/2025",
          status: true,
        },
        {
          date: "01/03/2025",
          status: true,
        },
        {
          date: "01/06/2025",
          status: true,
        },
      ],
      absent_date: [
        {
          date: "01/02/2025",
          status: false,
        },
        {
          date: "01/05/2025",
          status: false,
        },
      ],
    },
    // {
    //   month: "december",
    //   present_date: [
    //     {
    //       date: "12/01/2025",
    //       status: true,
    //     },
    //     {
    //       date: "12/03/2025",
    //       status: true,
    //     },
    //     {
    //       date: "12/06/2025",
    //       status: true,
    //     },
    //   ],
    //   absent_date: [
    //     {
    //       date: "12/02/2025",
    //       status: false,
    //     },
    //     {
    //       date: "12/05/2025",
    //       status: false,
    //     },
    //   ],
    // },
  ]);

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-[#03240399]">
      <div className=" bg-white  w-[800px] rounded-[15px] p-[20px] relative ">
        {/* ===> Close icon <==== */}
        <IoIosCloseCircle
          onClick={() => setOpen(false)}
          className="text-[25px] text-red-600 absolute right-[5px] top-[5px] cursor-pointer"
        />

        {/* ====> Addtendance Student profile <==== */}
        {/* ====> Addtendance Calander <==== */}
        <div className="p-4">
          {calendarData.map((monthData, index) => (
            <Calander key={index} monthData={monthData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceView;
