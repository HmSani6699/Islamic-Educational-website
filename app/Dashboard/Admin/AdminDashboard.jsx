import React from "react";
import { FaUserCheck } from "react-icons/fa";
import dashboard_image from "../../../public/dashboard.png";
import dashboard_image1 from "../../../public/dashboard1.png";
import CustomSearchForm from "../../Component/CustomSearchForm/CustomSearchForm";
import update_green_icon from "../../../public/svg/updateGreenIcon.svg";
import delete_icon from "../../../public/svg/delete_icon.svg";
import { LuView } from "react-icons/lu";

const AdminDashboard = () => {
  return (
    <div className="lg:my-[50px]">
      <div className="flex gap-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-[20px] w-full mb-[50px]">
          <div className="bg-white p-[20px] rounded-[10px] border-t-[2px] border-[#008000]">
            <h2 className="text-[20px] font-semibold">শিশু শ্রেণী</h2>
            <div className=" flex items-center justify-between mt-[15px]">
              <h3 className=" tesxt-[18px]">59</h3>
              <FaUserCheck className="text-[40px] text-[#008000] font-bold" />
            </div>
          </div>
          <div className="bg-white p-[20px] rounded-[10px] border-t-[2px] border-[#008000]">
            <h2 className="text-[20px] font-semibold">প্রথম শ্রেণী</h2>
            <div className=" flex items-center justify-between mt-[15px]">
              <h3 className=" tesxt-[18px]">59</h3>
              <FaUserCheck className="text-[40px] text-[#008000] font-bold" />
            </div>
          </div>
          <div className="bg-white p-[20px] rounded-[10px] border-t-[2px] border-[#008000]">
            <h2 className="text-[20px] font-semibold">দ্বিতীয় শ্রেণী</h2>
            <div className=" flex items-center justify-between mt-[15px]">
              <h3 className=" tesxt-[18px]">59</h3>
              <FaUserCheck className="text-[40px] text-[#008000] font-bold" />
            </div>
          </div>
          <div className="bg-white p-[20px] rounded-[10px] border-t-[2px] border-[#008000]">
            <h2 className="text-[20px] font-semibold">তৃতীয় শ্রেণী</h2>
            <div className=" flex items-center justify-between mt-[15px]">
              <h3 className=" tesxt-[18px]">59</h3>
              <FaUserCheck className="text-[40px] text-[#008000] font-bold" />
            </div>
          </div>
          <div className="bg-white p-[20px] rounded-[10px] border-t-[2px] border-[#008000]">
            <h2 className="text-[20px] font-semibold">নাজেরা বিভাগ</h2>
            <div className=" flex items-center justify-between mt-[15px]">
              <h3 className=" tesxt-[18px]">59</h3>
              <FaUserCheck className="text-[40px] text-[#008000] font-bold" />
            </div>
          </div>
          <div className="bg-white p-[20px] rounded-[10px] border-t-[2px] border-[#008000]">
            <h2 className="text-[20px] font-semibold">হিফজ বিভাগ</h2>
            <div className=" flex items-center justify-between mt-[15px]">
              <h3 className=" tesxt-[18px]">59</h3>
              <FaUserCheck className="text-[40px] text-[#008000] font-bold" />
            </div>
          </div>
        </div>
        {/* <div className="w-[30%] h-[280px] rounded-[10px]">
          <img
            className="h-full w-full rounded-[10px]"
            src={dashboard_image}
            alt=""
          />
        </div> */}
      </div>
      {/* <div className="mt-[20px] w-full rounded-[10px]">
        <img
          className="w-full h-[450px]  rounded-[10px]"
          src={dashboard_image1}
          alt=""
        />
      </div> */}
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
