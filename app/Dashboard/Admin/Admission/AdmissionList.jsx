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

import React from "react";
import { LuView } from "react-icons/lu";
import CustomSearchForm from "../../../Component/CustomSearchForm/CustomSearchForm";
import update_green_icon from "../../../../public/svg/updateGreenIcon.svg";
import delete_icon from "../../../../public/svg/delete_icon.svg";
import user from "../../../../public/man.png";

const AdmissionList = () => {
  return (
    <div className="w-full overflow-x-auto bg-white py-5 px-4 rounded-[10px] mt-10">
      {/* =====> Search Div  <====== */}
      <CustomSearchForm />

      {/* =====> Responsive Table <====== */}
      <div className="overflow-x-auto">
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
