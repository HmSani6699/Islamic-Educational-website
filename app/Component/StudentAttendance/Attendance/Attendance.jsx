import React, { useState } from "react";
import CustomSearchForm from "../../CustomSearchForm/CustomSearchForm";
import { LuMessageCircleMore, LuView } from "react-icons/lu";
import update_green_icon from "../../../../public/svg/updateGreenIcon.svg";
import delete_icon from "../../../../public/svg/delete_icon.svg";
import user from "../../../../public/man.png";
import AttendanceReport from "../AttendanceReport/AttendanceReport";
import AttendanceUpdate from "../AttendanceUpdate/AttendanceUpdate";

const Attendance = () => {
  const [attendanceReport, setAttendanceReport] = useState(false);
  const [attendanceUpdate, setAttendanceUpdate] = useState(false);

  return (
    <div className="bg-white my-[40px] p-[20px]">
      <div className="flex items-center  justify-between">
        <h2 className="text-[20px] whitespace-nowrap">All Student (10)</h2>
        <CustomSearchForm />
      </div>

      <div className="mt-[50px] mb-[20px]">
        <table
          className="w-full mt-5 text-left border-collapse w-overflow-x-auto table-auto "
          cellSpacing="0"
        >
          <tbody>
            <tr className="bg-[#F1F2F3] font-semibold">
              <th
                scope="col"
                className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500]"
              >
                ID
              </th>
              <th
                scope="col"
                className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
              >
                Name
              </th>

              <th
                scope="col"
                className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]  "
              >
                Address
              </th>
              <th
                scope="col"
                className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
              >
                Photo
              </th>
              <th
                scope="col"
                className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center  "
              >
                Attendance
              </th>

              <th
                scope="col"
                className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
              >
                Action
              </th>
            </tr>

            <tr>
              <td className="h-10 py-2 pl-[10px]">1</td>
              <td className="h-10 py-2">Md Norol Amin</td>
              <td className="h-10 py-2">Sonarga,Narayongonj </td>
              <td className="h-10 py-2">
                <div className="w-[40px]">
                  <img className="h-full w-full" src={user} alt="user image" />
                </div>
              </td>
              <td className="h-10 py-2">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-[15px]">
                    <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[3px] rounded-[8px]">
                      Yess
                    </button>
                    <button className="flex items-center gap-[8px] bg-red-600  text-white px-[20px] py-[3px] rounded-[8px]">
                      No
                    </button>
                  </div>
                </div>
              </td>

              <td className="h-10 py-2 flex justify-center">
                <div className="flex items-center justify-center mt-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <button
                      onClick={() => setAttendanceReport(!attendanceReport)}
                    >
                      <LuMessageCircleMore className="text-[20px]" />
                    </button>
                    <button
                      onClick={() => setAttendanceUpdate(!attendanceUpdate)}
                    >
                      <img src={update_green_icon} alt="" />
                    </button>
                    <button>
                      <LuView />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="h-10 py-2 pl-[10px]">1</td>
              <td className="h-10 py-2">Md Norol Amin</td>
              <td className="h-10 py-2">Sonarga,Narayongonj </td>
              <td className="h-10 py-2">
                <div className="w-[40px]">
                  <img className="h-full w-full" src={user} alt="user image" />
                </div>
              </td>
              <td className="h-10 py-2">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-[15px]">
                    <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[3px] rounded-[8px]">
                      Yess
                    </button>
                    <button className="flex items-center gap-[8px] bg-red-600  text-white px-[20px] py-[3px] rounded-[8px]">
                      No
                    </button>
                  </div>
                </div>
              </td>

              <td className="h-10 py-2 flex justify-center">
                <div className="flex items-center justify-center mt-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <button>
                      <LuMessageCircleMore className="text-[20px]" />
                    </button>
                    <button>
                      <img src={update_green_icon} alt="" />
                    </button>
                    <button>
                      <LuView />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="h-10 py-2 pl-[10px]">1</td>
              <td className="h-10 py-2">Md Norol Amin</td>
              <td className="h-10 py-2">Sonarga,Narayongonj </td>
              <td className="h-10 py-2">
                <div className="w-[40px]">
                  <img className="h-full w-full" src={user} alt="user image" />
                </div>
              </td>
              <td className="h-10 py-2">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-[15px]">
                    <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[3px] rounded-[8px]">
                      Yess
                    </button>
                    <button className="flex items-center gap-[8px] bg-red-600  text-white px-[20px] py-[3px] rounded-[8px]">
                      No
                    </button>
                  </div>
                </div>
              </td>

              <td className="h-10 py-2 flex justify-center">
                <div className="flex items-center justify-center mt-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <button>
                      <LuMessageCircleMore className="text-[20px]" />
                    </button>
                    <button>
                      <img src={update_green_icon} alt="" />
                    </button>
                    <button>
                      <LuView />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="h-10 py-2 pl-[10px]">1</td>
              <td className="h-10 py-2">Md Norol Amin</td>
              <td className="h-10 py-2">Sonarga,Narayongonj </td>
              <td className="h-10 py-2">
                <div className="w-[40px]">
                  <img className="h-full w-full" src={user} alt="user image" />
                </div>
              </td>
              <td className="h-10 py-2">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-[15px]">
                    <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[3px] rounded-[8px]">
                      Yess
                    </button>
                    <button className="flex items-center gap-[8px] bg-red-600  text-white px-[20px] py-[3px] rounded-[8px]">
                      No
                    </button>
                  </div>
                </div>
              </td>

              <td className="h-10 py-2 flex justify-center">
                <div className="flex items-center justify-center mt-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <button>
                      <LuMessageCircleMore className="text-[20px]" />
                    </button>
                    <button>
                      <img src={update_green_icon} alt="" />
                    </button>
                    <button>
                      <LuView />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="h-10 py-2 pl-[10px]">1</td>
              <td className="h-10 py-2">Md Norol Amin</td>
              <td className="h-10 py-2">Sonarga,Narayongonj </td>
              <td className="h-10 py-2">
                <div className="w-[40px]">
                  <img className="h-full w-full" src={user} alt="user image" />
                </div>
              </td>
              <td className="h-10 py-2">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-[15px]">
                    <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[3px] rounded-[8px]">
                      Yess
                    </button>
                    <button className="flex items-center gap-[8px] bg-red-600  text-white px-[20px] py-[3px] rounded-[8px]">
                      No
                    </button>
                  </div>
                </div>
              </td>

              <td className="h-10 py-2 flex justify-center">
                <div className="flex items-center justify-center mt-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <button>
                      <LuMessageCircleMore className="text-[20px]" />
                    </button>
                    <button>
                      <img src={update_green_icon} alt="" />
                    </button>
                    <button>
                      <LuView />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="h-10 py-2 pl-[10px]">1</td>
              <td className="h-10 py-2">Md Norol Amin</td>
              <td className="h-10 py-2">Sonarga,Narayongonj </td>
              <td className="h-10 py-2">
                <div className="w-[40px]">
                  <img className="h-full w-full" src={user} alt="user image" />
                </div>
              </td>
              <td className="h-10 py-2">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-[15px]">
                    <button className="flex items-center gap-[8px] bg-[#008000]  text-white px-[20px] py-[3px] rounded-[8px]">
                      Yess
                    </button>
                    <button className="flex items-center gap-[8px] bg-red-600  text-white px-[20px] py-[3px] rounded-[8px]">
                      No
                    </button>
                  </div>
                </div>
              </td>

              <td className="h-10 py-2 flex justify-center">
                <div className="flex items-center justify-center mt-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <button>
                      <LuMessageCircleMore className="text-[20px]" />
                    </button>
                    <button>
                      <img src={update_green_icon} alt="" />
                    </button>
                    <button>
                      <LuView />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ====> Attentdance report box <=== */}
      {attendanceReport && (
        <AttendanceReport
          open={attendanceReport}
          setOpen={setAttendanceReport}
        />
      )}
      {attendanceUpdate && (
        <AttendanceUpdate
          open={attendanceUpdate}
          setOpen={setAttendanceUpdate}
        />
      )}
    </div>
  );
};

export default Attendance;
