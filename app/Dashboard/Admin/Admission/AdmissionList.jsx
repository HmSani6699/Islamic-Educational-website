// import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import update_green_icon from "../../../../public/svg/updateGreenIcon.svg";
// import delete_icon from "../../../../public/svg/delete_icon.svg";
// import { LuView } from "react-icons/lu";
// import { MdOutlineDeleteSweep } from "react-icons/md";
// import CustomSearchForm from "../../../Component/CustomSearchForm/CustomSearchForm";
// import user from "../../../../public/man.png";

// const AdmissionList = () => {
//   return (
//     <div>
//       {/* =====> Midle part <==== */}
//       <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
//         {/* =====> Search Div  <====== */}
//         <CustomSearchForm />

//         {/* =====> Admission list table <====== */}
//         <table
//           className="w-full mt-5 text-left border-collapse overflow-x-auto table-auto "
//           cellSpacing="0"
//         >
//           <tbody>
//             <tr className="bg-[#F1F2F3] font-semibold">
//               <th
//                 scope="col"
//                 className="h-10 ps-2.5 text-[#2E3138] text-[16px] font-[500]  whitespace-nowrap"
//               >
//                 ID
//               </th>
//               <th
//                 scope="col"
//                 className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]  whitespace-nowrap"
//               >
//                 Name
//               </th>
//               <th
//                 scope="col"
//                 className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]  whitespace-nowrap"
//               >
//                 Fathers Name
//               </th>
//               <th
//                 scope="col"
//                 className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]  whitespace-nowrap "
//               >
//                 Address
//               </th>
//               <th
//                 scope="col"
//                 className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]  whitespace-nowrap "
//               >
//                 Photo
//               </th>

//               <th
//                 scope="col"
//                 className="h-10 px-0 text-[#2E3138] text-[16px] font-[500]  whitespace-nowraptext-center"
//               >
//                 Action
//               </th>
//             </tr>

//             <tr>
//               <td className="h-10 whitespace-nowrap py-2 pl-[10px]">1</td>
//               <td className="h-10 whitespace-nowrap py-2">Md Norol Amin</td>
//               <td className="h-10 whitespace-nowrap py-2">Md Nivale</td>
//               <td className="h-10 whitespace-nowrap py-2">
//                 Sonarga,Narayongonj
//               </td>
//               <td className="h-10 py-2 ">
//                 <div className="w-[40px]">
//                   <img className="h-full w-full" src={user} alt="user image" />
//                 </div>
//               </td>
//               <td className="h-10 py-2 flex justify-center">
//                 <div className="flex items-center gap-[10px]">
//                   <button>
//                     <img src={update_green_icon} alt="" />
//                   </button>
//                   <button>
//                     <img src={delete_icon} alt="" />
//                   </button>
//                   <button>
//                     <LuView />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//             <tr className="bg-[#F1F2F3] ">
//               <td className="h-10 py-2 pl-[10px]">1</td>
//               <td className="h-10 py-2">Md Norol Amin</td>
//               <td className="h-10 py-2">Md Nivale</td>
//               <td className="h-10 py-2">Sonarga,Narayongonj</td>
//               <td className="h-10 py-2 ">
//                 <div className="w-[40px] ">
//                   <img className="h-full w-full" src={user} alt="user image" />
//                 </div>
//               </td>
//               <td className="h-10 py-2 flex justify-center">
//                 <div className="flex items-center gap-[10px]">
//                   <button>
//                     <img src={update_green_icon} alt="" />
//                   </button>
//                   <button>
//                     <img src={delete_icon} alt="" />
//                   </button>
//                   <button>
//                     <LuView />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td className="h-10 py-2 pl-[10px]">1</td>
//               <td className="h-10 py-2">Md Norol Amin</td>
//               <td className="h-10 py-2">Md Nivale</td>
//               <td className="h-10 py-2">Sonarga,Narayongonj</td>
//               <td className="h-10 py-2 ">
//                 <div className="w-[40px]">
//                   <img className="h-full w-full" src={user} alt="user image" />
//                 </div>
//               </td>
//               <td className="h-10 py-2 flex justify-center">
//                 <div className="flex items-center gap-[10px]">
//                   <button>
//                     <img src={update_green_icon} alt="" />
//                   </button>
//                   <button>
//                     <img src={delete_icon} alt="" />
//                   </button>
//                   <button>
//                     <LuView />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdmissionList;

import React, { useState } from "react";
import { LuView } from "react-icons/lu";
import CustomSearchForm from "../../../Component/CustomSearchForm/CustomSearchForm";
import update_green_icon from "../../../../public/svg/updateGreenIcon.svg";
import delete_icon from "../../../../public/svg/delete_icon.svg";
import user from "../../../../public/man.png";
import { FaFilter, FaList, FaSortAlphaDown, FaTh } from "react-icons/fa";
import grid_icon from "../../../../public/svg/grid.svg";
import { CgLayoutGridSmall } from "react-icons/cg";
import { CiGrid41 } from "react-icons/ci";

const AdmissionList = () => {
  const [view, setView] = useState("list");
  return (
    <div className="w-full overflow-x-auto bg-white rounded-[10px]  shadow-sm">
      <div className="flex items-center justify-between bg-white px-[20px] pt-[20px]">
        <h2 className="text-lg font-semibold">Students List</h2>

        <div className="flex items-center gap-2">
          {/* Filter Dropdown */}
          <button className="border px-3 py-1 rounded-[5px] flex items-center gap-2 text-gray-600">
            <FaFilter className="text-[14px]" /> Filter
          </button>

          {/* View Toggle */}
          <button
            className={`border p-2 rounded-[5px] ${
              view === "list" ? "bg-[#506EE4] text-white" : "text-gray-600"
            }`}
            onClick={() => setView("list")}
          >
            <FaList className="text-[14px]" />
          </button>
          <button
            className={`border p-2 rounded-[5px] ${
              view === "grid" ? "bg-[#506EE4] text-white" : "text-gray-600"
            }`}
            onClick={() => setView("grid")}
          >
            <CiGrid41 />
          </button>

          {/* Sort Dropdown */}
          <button className="border px-3 py-1 rounded-lg flex items-center gap-2 text-gray-600">
            <FaSortAlphaDown className="text-[14px]" /> Sort by A-Z
          </button>
        </div>
      </div>
      <div className="border h-[1px] border-gray-200 w-full my-[10px]"></div>
      {/* =====> Search Div  <====== */}
      <div className="flex justify-between items-center px-[20px]">
        <div className="flex items-center gap-[10px] lg:w-1/2 w-full">
          <p className="text-[#515B73] text-[14px]">Row Per Page</p>
          <select className="outline-none border py-[8px] px-[10px] rounded-[5px]">
            <option value="10">10</option>
          </select>
          <p className="text-[#515B73] text-[14px]">Entries</p>
        </div>
        <div className="lg:w-1/2 w-full">
          <CustomSearchForm classAdd={"w-2/3"} />
        </div>
      </div>
      {/* =====> Responsive Table <====== */}
      <div className="overflow-auto px-[20px]">
        <table className="w-full mt-5 text-left border-collapse table-auto min-w-[600px]">
          <thead>
            <tr className="bg-[#f4f7fe] font-semibold text-sm md:text-base">
              <td className="whitespace-nowrap h-10 px-2 text-[#202C4B] text-[14px]">
                Admission No
              </td>
              <td className="whitespace-nowrap h-10 px-2 text-[#202C4B] text-[14px]">
                Roll No
              </td>
              <td className="whitespace-nowrap text-center h-10 px-2 text-[#202C4B] text-[14px]">
                Name
              </td>
              <td className="whitespace-nowrap h-10 px-2 text-[#202C4B] text-[14px]">
                Photo
              </td>
              <td className="whitespace-nowrap text-center h-10 px-2 text-[#202C4B] text-[14px]">
                Class
              </td>
              <td className="whitespace-nowrap text-center h-10 px-2 text-[#202C4B] text-[14px]">
                Section
              </td>
              <td className="whitespace-nowrap text-center h-10 px-2 text-[#202C4B] text-[14px]">
                Gender
              </td>
              <td className="whitespace-nowrap text-center h-10 px-2 text-[#202C4B] text-[14px]">
                Status
              </td>
              <td className="whitespace-nowrap text-center h-10 px-2 text-[#202C4B] text-[14px]">
                Date of join
              </td>

              <td className="whitespace-nowrap h-10 px-2 text-[#202C4B] text-[14px] text-center">
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((id, index) => (
              <tr
                key={id}
                className={
                  index % 2 === 1 ? "bg-[#f4f7fe] border-b" : "border-b"
                }
              >
                <td className="whitespace-nowrap text-[#3D5EE1] text-[14px] h-10 px-2 py-[10px]">
                  AD12345
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  12
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  Md Nivale
                </td>
                <td className="h-10 px-2 py-[13px]">
                  <div className="w-[35px] h-[35px]">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={user}
                      alt="user"
                    />
                  </div>
                </td>

                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  One
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  A
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  Male
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  Active
                </td>
                <td className="whitespace-nowrap text-[#515B73] text-[14px] text-center h-10 px-2 py-[13px]">
                  01 Feb 2025
                </td>

                <td className="h-10 px-2 py-2 flex justify-center items-center gap-2">
                  <button>
                    <img
                      src={update_green_icon}
                      alt="Update"
                      className="w-5 h-5"
                    />
                  </button>
                  <button>
                    <img src={delete_icon} alt="Delete" className="w-5 h-5" />
                  </button>
                  <button className="text-lg">
                    <LuView />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionList;
