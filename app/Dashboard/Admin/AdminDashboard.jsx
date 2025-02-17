import React from "react";
import { FaUserCheck } from "react-icons/fa";
import dashboard_image from "../../../public/dashboard.png";
import dashboard_image1 from "../../../public/dashboard1.png";
import CustomSearchForm from "../../Component/CustomSearchForm/CustomSearchForm";
import update_green_icon from "../../../public/svg/updateGreenIcon.svg";
import delete_icon from "../../../public/svg/delete_icon.svg";
import { LuView } from "react-icons/lu";
import student from "../../../public/svg/student.svg";
import teacher from "../../../public/svg/teacher.svg";
import staff from "../../../public/svg/staff.svg";
import subject from "../../../public/svg/subject.svg";

const AdminDashboard = () => {
  return (
    <div className="lg:my-[15px]">
      <div className="grid grid-cols-1 lg:grid-cols-4  gap-[20px] w-full mb-[50px]">
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#FDE9ED] p-[8px] rounded-[8px]">
              <img src={student} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">120</h2>
              <p className="text-gray-500 text-[14px]">Total Student</p>
            </div>
          </div>
          <div className="border-[1px] border-gray-200 w-full my-[10px]"></div>
          <div className="flex items-center justify-between  ">
            <h1 className="text-gray-500 text-[14px]">
              Active :
              <span className="font-semibold text-[#202C4B] ml-[3px]">110</span>
            </h1>
            <h1 className="text-gray-500 text-[14px]">
              Inactive :
              <span className="font-semibold text-[#202C4B] ml-[3px]">10</span>
            </h1>
          </div>
        </div>
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#FDE9ED] p-[8px] rounded-[8px]">
              <img src={student} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">120</h2>
              <p className="text-gray-500 text-[14px]">Total Student</p>
            </div>
          </div>
          <div className="border-[1px] border-gray-200 w-full my-[10px]"></div>
          <div className="flex items-center justify-between  ">
            <h1 className="text-gray-500 text-[14px]">
              Active :
              <span className="font-semibold text-[#202C4B] ml-[3px]">110</span>
            </h1>
            <h1 className="text-gray-500 text-[14px]">
              Inactive :
              <span className="font-semibold text-[#202C4B] ml-[3px]">10</span>
            </h1>
          </div>
        </div>
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#FDE9ED] p-[8px] rounded-[8px]">
              <img src={student} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">120</h2>
              <p className="text-gray-500 text-[14px]">Total Student</p>
            </div>
          </div>
          <div className="border-[1px] border-gray-200 w-full my-[10px]"></div>
          <div className="flex items-center justify-between  ">
            <h1 className="text-gray-500 text-[14px]">
              Active :
              <span className="font-semibold text-[#202C4B] ml-[3px]">110</span>
            </h1>
            <h1 className="text-gray-500 text-[14px]">
              Inactive :
              <span className="font-semibold text-[#202C4B] ml-[3px]">10</span>
            </h1>
          </div>
        </div>
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#FDE9ED] p-[8px] rounded-[8px]">
              <img src={student} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">120</h2>
              <p className="text-gray-500 text-[14px]">Total Student</p>
            </div>
          </div>
          <div className="border-[1px] border-gray-200 w-full my-[10px]"></div>
          <div className="flex items-center justify-between  ">
            <h1 className="text-gray-500 text-[14px]">
              Active :
              <span className="font-semibold text-[#202C4B] ml-[3px]">110</span>
            </h1>
            <h1 className="text-gray-500 text-[14px]">
              Inactive :
              <span className="font-semibold text-[#202C4B] ml-[3px]">10</span>
            </h1>
          </div>
        </div>
      </div>

      {/* ===== */}

      {/* ===== */}

      <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-[20px]">
        {/* =====> Search Div  <====== */}
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] ">মোট ছাত্র</h2>
          <div className="w-[700px] ">
            <CustomSearchForm />
          </div>
        </div>

        {/* =====> Admission list table <====== */}
        <table
          className="w-full  mt-5 text-left border-collapse w-overflow-x-auto table-auto "
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
                className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] "
              >
                Fathers Name
              </th>
              <th
                scope="col"
                className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]  "
              >
                Address
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
              <td className="h-10 py-2">Md Nivale</td>
              <td className="h-10 py-2">Sonarga,Narayongonj</td>
              <td className="h-10 py-2 flex justify-center">
                <div className="flex items-center gap-[10px]">
                  <button>
                    <img src={update_green_icon} alt="" />
                  </button>
                  <button>
                    <img src={delete_icon} alt="" />
                  </button>
                  <button>
                    <LuView />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-[#F1F2F3] ">
              <td className="h-10 py-2 pl-[10px]">2</td>
              <td className="h-10 py-2">Md Galib </td>
              <td className="h-10 py-2">Md Galib Misba</td>
              <td className="h-10 py-2">Sonarga,Dhaka</td>
              <td className="h-10 py-2 flex justify-center">
                <div className="flex items-center gap-[10px]">
                  <button>
                    <img src={update_green_icon} alt="" />
                  </button>
                  <button>
                    <img src={delete_icon} alt="" />
                  </button>
                  <button>
                    <LuView />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="">
              <td className="h-10 py-2 pl-[10px]">3</td>
              <td className="h-10 py-2">Md Galib </td>
              <td className="h-10 py-2">Md Galib Misba</td>
              <td className="h-10 py-2">Sonarga,Dhaka</td>
              <td className="h-10 py-2 flex justify-center">
                <div className="flex items-center gap-[10px]">
                  <button>
                    <img src={update_green_icon} alt="" />
                  </button>
                  <button>
                    <img src={delete_icon} alt="" />
                  </button>
                  <button>
                    <LuView />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-[#F1F2F3] ">
              <td className="h-10 py-2 pl-[10px]">4</td>
              <td className="h-10 py-2">Md Galib </td>
              <td className="h-10 py-2">Md Galib Misba</td>
              <td className="h-10 py-2">Sonarga,Dhaka</td>
              <td className="h-10 py-2 flex justify-center">
                <div className="flex items-center gap-[10px]">
                  <button>
                    <img src={update_green_icon} alt="" />
                  </button>
                  <button>
                    <img src={delete_icon} alt="" />
                  </button>
                  <button>
                    <LuView />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
