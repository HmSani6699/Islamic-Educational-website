// // import React, { useState } from "react";
// // import NavlLink from "../../Component/NavList/NavLink/NavlLink";
// // import { MdOutlineDashboard } from "react-icons/md";
// // import {
// //   FaBook,
// //   FaChalkboardTeacher,
// //   FaGraduationCap,
// //   FaLayerGroup,
// //   FaUniversity,
// //   FaUserGraduate,
// // } from "react-icons/fa";
// // import { LuClipboardPenLine } from "react-icons/lu";
// // import { IoIosArrowUp } from "react-icons/io";
// // import { useLocation } from "react-router";
// // import { BiBook } from "react-icons/bi";

// // const AdminLeftNavber = () => {
// //   const [openAcademicMenu, setOpenAcademicMenu] = useState(false);
// //   const loation = useLocation();

// //   return (
// //     <div>
// //       <NavlLink url={"/admin"} title={"ড্যাশবোর্ড"} children_true={true}>
// //         <MdOutlineDashboard className="text-[20px]" />
// //       </NavlLink>
// //       <NavlLink
// //         url={"/admin/admission"}
// //         title={"ভর্তি লিস্ট"}
// //         children_true={false}
// //       >
// //         <LuClipboardPenLine className="text-[20px]" />
// //       </NavlLink>
// //       <NavlLink
// //         url={"/admin/teacher"}
// //         title={"শিক্ষক লিস্ট"}
// //         children_true={false}
// //       >
// //         <FaUserGraduate className="text-[20px]" />
// //       </NavlLink>
// //       <NavlLink
// //         url={"/admin/teacher_add_class"}
// //         title={"শিক্ষক ক্লাস লিস্ট"}
// //         children_true={false}
// //       >
// //         <LuClipboardPenLine className="text-[20px]" />
// //       </NavlLink>

// //       <div>
// //         <div
// //           onClick={() => setOpenAcademicMenu(!openAcademicMenu)}
// //           className={` ${
// //             openAcademicMenu
// //               ? "nav_activ_text_colors nav_activ_bg_colors nav_activ_left_border_colors"
// //               : ""
// //           } flex  items-center justify-between   py-[8px] px-[8px] my-[8px] text-black
// //   hover:bg-[#3b6b3b3a] hover:text-[#008000] hover:border-l-[2px] hover:border-[#008000]
// //   rounded-l-[4px] transition-all duration-300 cursor-pointer`}
// //         >
// //           <h2 className="flex gap-[10px]">
// //             <FaGraduationCap className="text-[22px]" /> শিক্ষা ম্যানেজমেন্ট
// //           </h2>
// //           <IoIosArrowUp
// //             className={`transition-all duration-300 ${
// //               openAcademicMenu ? "rotate-[-180deg]" : "rotate-[0deg]"
// //             }`}
// //           />
// //         </div>

// //         {/* Dropdown Menu */}
// //         <div
// //           className={`ml-[10px] overflow-hidden transition-all duration-500 ease-in-out ${
// //             openAcademicMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
// //           }`}
// //         >
// //           {/* Nav Links with Correct Icons */}
// //           <NavlLink
// //             url={"/admin/add_bivhag"}
// //             title={"বিভাগ লিস্ট"}
// //             children_true={false}
// //           >
// //             <FaUniversity className="text-[20px]" />
// //           </NavlLink>
// //           <NavlLink
// //             url={"/admin/add_category"}
// //             title={"শ্রেণী লিস্ট"}
// //             children_true={false}
// //           >
// //             <BiBook className="text-[20px]" />
// //           </NavlLink>
// //           <NavlLink
// //             url={"/admin/add_class"}
// //             title={"ক্লাস লিস্ট"}
// //             children_true={false}
// //           >
// //             <FaChalkboardTeacher className="text-[20px]" />
// //           </NavlLink>
// //           <NavlLink
// //             url={"/admin/add_class_group"}
// //             title={" ক্লাস গ্রুপ লিস্ট"}
// //             children_true={false}
// //           >
// //             <FaLayerGroup className="text-[20px]" />
// //           </NavlLink>
// //           <NavlLink
// //             url={"/admin/add_class_group"}
// //             title={" ক্লাস গ্রুপ লিস্ট"}
// //             children_true={false}
// //           >
// //             <FaLayerGroup className="text-[20px]" />
// //           </NavlLink>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminLeftNavber;

// import React, { useState } from "react";
// import NavlLink from "../../Component/NavList/NavLink/NavlLink";
// import { MdOutlineDashboard } from "react-icons/md";
// import {
//   FaBook,
//   FaChalkboardTeacher,
//   FaGraduationCap,
//   FaLayerGroup,
//   FaUniversity,
//   FaUserGraduate,
// } from "react-icons/fa";
// import { LuClipboardPenLine } from "react-icons/lu";
// import { IoIosArrowUp } from "react-icons/io";
// import { useLocation } from "react-router";
// import { BiBook } from "react-icons/bi";

// const AdminLeftNavber = ({ isSidebarOpen }) => {
//   const [openAcademicMenu, setOpenAcademicMenu] = useState(false);
//   const location = useLocation();

//   return (
//     <div>
//       <NavlLink
//         url={"/admin"}
//         isSidebarOpen={isSidebarOpen}
//         title={isSidebarOpen ? "ড্যাশবোর্ড" : ""}
//       >
//         <MdOutlineDashboard className="text-[20px]" />
//       </NavlLink>

//       <NavlLink
//         url={"/admin/admission"}
//         title={isSidebarOpen ? "ভর্তি লিস্ট" : ""}
//       >
//         <LuClipboardPenLine className="text-[20px]" />
//       </NavlLink>

//       <NavlLink
//         url={"/admin/teacher"}
//         title={isSidebarOpen ? "শিক্ষক লিস্ট" : ""}
//       >
//         <FaUserGraduate className="text-[20px]" />
//       </NavlLink>

//       <NavlLink
//         url={"/admin/teacher_add_class"}
//         title={isSidebarOpen ? "শিক্ষক ক্লাস লিস্ট" : ""}
//       >
//         <LuClipboardPenLine className="text-[20px]" />
//       </NavlLink>

//       <div>
//         {/* Sidebar Toggle Dropdown */}
//         <div
//           onClick={() => setOpenAcademicMenu(!openAcademicMenu)}
//           className={`flex items-center justify-between py-[8px] px-[8px] my-[8px] text-black
//             hover:bg-[#3b6b3b3a] hover:text-[#008000] hover:border-l-[2px] hover:border-[#008000]
//             rounded-l-[4px] transition-all duration-300 cursor-pointer`}
//         >
//           <h2 className="flex gap-[10px]">
//             <FaGraduationCap className="text-[22px]" />
//             {isSidebarOpen ? "শিক্ষা ম্যানেজমেন্ট" : ""}
//           </h2>
//           {isSidebarOpen && (
//             <IoIosArrowUp
//               className={`transition-all duration-300 ${
//                 openAcademicMenu ? "rotate-[-180deg]" : "rotate-[0deg]"
//               }`}
//             />
//           )}
//         </div>

//         {/* Dropdown Menu */}
//         <div
//           className={`ml-[10px] overflow-hidden transition-all duration-500 ease-in-out ${
//             openAcademicMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <NavlLink
//             url={"/admin/add_bivhag"}
//             title={isSidebarOpen ? "বিভাগ লিস্ট" : ""}
//           >
//             <FaUniversity className="text-[20px]" />
//           </NavlLink>
//           <NavlLink
//             url={"/admin/add_category"}
//             title={isSidebarOpen ? "শ্রেণী লিস্ট" : ""}
//           >
//             <BiBook className="text-[20px]" />
//           </NavlLink>
//           <NavlLink
//             url={"/admin/add_class"}
//             title={isSidebarOpen ? "ক্লাস লিস্ট" : ""}
//           >
//             <FaChalkboardTeacher className="text-[20px]" />
//           </NavlLink>
//           <NavlLink
//             url={"/admin/add_class_group"}
//             title={isSidebarOpen ? "ক্লাস গ্রুপ লিস্ট" : ""}
//           >
//             <FaLayerGroup className="text-[20px]" />
//           </NavlLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLeftNavber;

import React, { useState } from "react";
import NavlLink from "../../Component/NavList/NavLink/NavlLink";
import { MdOutlineDashboard } from "react-icons/md";
import {
  FaBook,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaLayerGroup,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";
import { LuClipboardPenLine } from "react-icons/lu";
import { IoIosArrowUp } from "react-icons/io";
import { useLocation } from "react-router";
import { BiBook } from "react-icons/bi";

const AdminLeftNavber = () => {
  const [openAcademicMenu, setOpenAcademicMenu] = useState(false);
  const loation = useLocation();

  return (
    <div>
      <NavlLink url={"/admin"} title={"ড্যাশবোর্ড"} children_true={true}>
        <MdOutlineDashboard className="text-[20px]" />
      </NavlLink>
      <NavlLink
        url={"/admin/admission"}
        title={"ভর্তি লিস্ট"}
        children_true={false}
      >
        <LuClipboardPenLine className="text-[20px]" />
      </NavlLink>
      <NavlLink
        url={"/admin/teacher"}
        title={"শিক্ষক লিস্ট"}
        children_true={false}
      >
        <FaUserGraduate className="text-[20px]" />
      </NavlLink>
      <NavlLink
        url={"/admin/teacher_add_class"}
        title={"শিক্ষক ক্লাস লিস্ট"}
        children_true={false}
      >
        <LuClipboardPenLine className="text-[20px]" />
      </NavlLink>

      <div>
        <div
          onClick={() => setOpenAcademicMenu(!openAcademicMenu)}
          className={` ${
            openAcademicMenu
              ? "nav_activ_text_colors nav_activ_bg_colors nav_activ_left_border_colors"
              : ""
          } flex  items-center justify-between   py-[8px] px-[8px] my-[8px] text-black 
  hover:bg-[#3b6b3b3a] hover:text-[#008000] hover:border-l-[2px] hover:border-[#008000] 
  rounded-l-[4px] transition-all duration-300 cursor-pointer`}
        >
          <h2 className="flex gap-[10px]">
            <FaGraduationCap className="text-[22px]" /> শিক্ষা ম্যানেজমেন্ট
          </h2>
          <IoIosArrowUp
            className={`transition-all duration-300 ${
              openAcademicMenu ? "rotate-[-180deg]" : "rotate-[0deg]"
            }`}
          />
        </div>

        {/* Dropdown Menu */}
        <div
          className={`ml-[10px] overflow-hidden transition-all duration-500 ease-in-out ${
            openAcademicMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Nav Links with Correct Icons */}
          <NavlLink
            url={"/admin/add_bivhag"}
            title={"বিভাগ লিস্ট"}
            children_true={false}
          >
            <FaUniversity className="text-[20px]" />
          </NavlLink>
          <NavlLink
            url={"/admin/add_category"}
            title={"শ্রেণী লিস্ট"}
            children_true={false}
          >
            <BiBook className="text-[20px]" />
          </NavlLink>
          <NavlLink
            url={"/admin/add_class"}
            title={"ক্লাস লিস্ট"}
            children_true={false}
          >
            <FaChalkboardTeacher className="text-[20px]" />
          </NavlLink>
          <NavlLink
            url={"/admin/add_class_group"}
            title={" ক্লাস গ্রুপ লিস্ট"}
            children_true={false}
          >
            <FaLayerGroup className="text-[20px]" />
          </NavlLink>
          <NavlLink
            url={"/admin/add_class_group"}
            title={" ক্লাস গ্রুপ লিস্ট"}
            children_true={false}
          >
            <FaLayerGroup className="text-[20px]" />
          </NavlLink>
        </div>
      </div>
    </div>
  );
};

export default AdminLeftNavber;
