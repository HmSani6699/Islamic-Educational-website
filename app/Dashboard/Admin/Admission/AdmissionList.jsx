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
            <FaTh />
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
          <p>Row Per Page</p>
          <select className="outline-none border py-[8px] px-[10px] rounded-[5px]">
            <option value="10">10</option>
          </select>
          <p>Entries</p>
        </div>
        <div className="lg:w-1/2 w-full">
          <CustomSearchForm classAdd={"w-2/3"} />
        </div>
      </div>
      {/* =====> Responsive Table <====== */}
      <div className="overflow-x-auto px-[20px]">
        <table className="w-full mt-5 text-left border-collapse table-auto min-w-[600px]">
          <thead>
            <tr className="bg-[#F1F2F3] font-semibold text-sm md:text-base">
              <th className="whitespace-nowrap h-10 px-2 text-[#2E3138]">ID</th>
              <th className="whitespace-nowrap text-center h-10 px-2 text-[#2E3138]">
                Name
              </th>
              <th className="whitespace-nowrap text-center h-10 px-2 text-[#2E3138]">
                Father's Name
              </th>
              <th className="whitespace-nowrap text-center h-10 px-2 text-[#2E3138]">
                Address
              </th>
              <th className="whitespace-nowrap h-10 px-2 text-[#2E3138]">
                Photo
              </th>
              <th className="whitespace-nowrap h-10 px-2 text-[#2E3138] text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((id, index) => (
              <tr key={id} className={index % 2 === 1 ? "bg-[#F1F2F3]" : ""}>
                <td className="whitespace-nowrap h-10 px-2 py-2">{id}</td>
                <td className="whitespace-nowrap text-center h-10 px-2 py-2">
                  Md Norol Amin
                </td>
                <td className="whitespace-nowrap text-center h-10 px-2 py-2">
                  Md Nivale
                </td>
                <td className="whitespace-nowrap text-center h-10 px-2 py-2">
                  Sonarga, Narayongonj
                </td>
                <td className="h-10 px-2 py-2">
                  <div className="w-[30px] h-[30px]">
                    <img
                      className="w-full h-full object-cover rounded"
                      src={user}
                      alt="user"
                    />
                  </div>
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
