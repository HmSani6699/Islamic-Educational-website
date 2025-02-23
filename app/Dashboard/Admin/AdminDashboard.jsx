// import React from "react";
// import { FaUserCheck } from "react-icons/fa";
// import dashboard_image from "../../../public/dashboard.png";
// import dashboard_image1 from "../../../public/dashboard1.png";
// import CustomSearchForm from "../../Component/CustomSearchForm/CustomSearchForm";
// import update_green_icon from "../../../public/svg/updateGreenIcon.svg";
// import delete_icon from "../../../public/svg/delete_icon.svg";
// import { LuView } from "react-icons/lu";
// import student from "../../../public/svg/student.svg";
// import teacher from "../../../public/svg/teacher.svg";
// import staff from "../../../public/svg/staff.svg";
// import subject from "../../../public/svg/subject.svg";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// const AdminDashboard = () => {
//   const data = [
//     { name: "2023", value1: 40, value2: 30 },
//     { name: "2023", value1: 50, value2: 40 },
//     { name: "2023", value1: 45, value2: 35 },
//     { name: "2023", value1: 55, value2: 40 },
//     { name: "2023", value1: 35, value2: 30 },
//     { name: "2023", value1: 40, value2: 35 },
//     { name: "2023", value1: 50, value2: 45 },
//     { name: "2023", value1: 60, value2: 50 },
//   ];

//   return (
//     <div className="lg:my-[15px]">
//       <div className="grid grid-cols-1 lg:grid-cols-4  gap-[20px] w-full mb-[50px]">
//         {/* ====> Total Student <==== */}
//         <div className="bg-white p-[10px] shadow-md rounded-[10px]">
//           <div className="flex items-center gap-[10px]">
//             <div className="h-[50px] w-[50px] bg-[#FDE9ED] p-[8px] rounded-[8px]">
//               <img src={student} alt="" />
//             </div>
//             <div>
//               <h2 className="text-[25px] font-bold text-[#202C4B]">120</h2>
//               <p className="text-gray-500 text-[14px]">Total Student</p>
//             </div>
//           </div>
//           <div className="border-[1px] border-gray-200 w-full my-[10px]"></div>
//           <div className="flex items-center justify-between  ">
//             <h1 className="text-gray-500 text-[14px]">
//               Active :
//               <span className="font-semibold text-[#202C4B] ml-[3px]">110</span>
//             </h1>
//             <h1 className="text-gray-500 text-[14px]">
//               Inactive :
//               <span className="font-semibold text-[#202C4B] ml-[3px]">10</span>
//             </h1>
//           </div>
//         </div>
//         {/* ====> Total Student <==== */}
//         <div className="bg-white p-[10px] shadow-md rounded-[10px]">
//           <div className="flex items-center gap-[10px]">
//             <div className="h-[50px] w-[50px] bg-[#FDE9ED] p-[8px] rounded-[8px]">
//               <img src={teacher} alt="" />
//             </div>
//             <div>
//               <h2 className="text-[25px] font-bold text-[#202C4B]">20</h2>
//               <p className="text-gray-500 text-[14px]">Total Teacher's</p>
//             </div>
//           </div>
//           <div className="border-[1px] border-gray-200 w-full my-[10px]"></div>
//           <div className="flex items-center justify-between  ">
//             <h1 className="text-gray-500 text-[14px]">
//               Active :
//               <span className="font-semibold text-[#202C4B] ml-[3px]">110</span>
//             </h1>
//             <h1 className="text-gray-500 text-[14px]">
//               Inactive :
//               <span className="font-semibold text-[#202C4B] ml-[3px]">10</span>
//             </h1>
//           </div>
//         </div>
//         {/* ====> Total Student <==== */}
//         <div className="bg-white p-[10px] shadow-md rounded-[10px]">
//           <div className="flex items-center gap-[10px]">
//             <div className="h-[50px] w-[50px] bg-[#FDE9ED] p-[8px] rounded-[8px]">
//               <img src={staff} alt="" />
//             </div>
//             <div>
//               <h2 className="text-[25px] font-bold text-[#202C4B]">120</h2>
//               <p className="text-gray-500 text-[14px]">Total Student</p>
//             </div>
//           </div>
//           <div className="border-[1px] border-gray-200 w-full my-[10px]"></div>
//           <div className="flex items-center justify-between  ">
//             <h1 className="text-gray-500 text-[14px]">
//               Active :
//               <span className="font-semibold text-[#202C4B] ml-[3px]">110</span>
//             </h1>
//             <h1 className="text-gray-500 text-[14px]">
//               Inactive :
//               <span className="font-semibold text-[#202C4B] ml-[3px]">10</span>
//             </h1>
//           </div>
//         </div>
//         {/* ====> Total Student <==== */}
//         <div className="bg-white p-[10px] shadow-md rounded-[10px]">
//           <div className="flex items-center gap-[10px]">
//             <div className="h-[50px] w-[50px] bg-[#FDE9ED] p-[8px] rounded-[8px]">
//               <img src={subject} alt="" />
//             </div>
//             <div>
//               <h2 className="text-[25px] font-bold text-[#202C4B]">10</h2>
//               <p className="text-gray-500 text-[14px]">Total Student</p>
//             </div>
//           </div>
//           <div className="border-[1px] border-gray-200 w-full my-[10px]"></div>
//           <div className="flex items-center justify-between  ">
//             <h1 className="text-gray-500 text-[14px]">
//               Active :
//               <span className="font-semibold text-[#202C4B] ml-[3px]">110</span>
//             </h1>
//             <h1 className="text-gray-500 text-[14px]">
//               Inactive :
//               <span className="font-semibold text-[#202C4B] ml-[3px]">10</span>
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* ===== */}
//       <ResponsiveContainer width="70%" height={300}>
//         <BarChart data={data}>
//           <XAxis dataKey="name" angle={-30} textAnchor="end" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="value1" stackId="a" fill="#2D5FFF" />
//           <Bar dataKey="value2" stackId="a" fill="#E5E8F3" />
//         </BarChart>
//       </ResponsiveContainer>

//       {/* ===== */}
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from "react";
import { FaPlus, FaUserCheck } from "react-icons/fa";
import dashboard_image from "../../../public/dashboard.png";
import dashboard_image1 from "../../../public/dashboard1.png";
import CustomSearchForm from "../../Component/CustomSearchForm/CustomSearchForm";
import update_green_icon from "../../../public/svg/updateGreenIcon.svg";
import delete_icon from "../../../public/svg/delete_icon.svg";
import { LuView } from "react-icons/lu";
import student from "../../../public/student.png";
import teacher from "../../../public/teacher.png";
import staff from "../../../public/svg/staff.svg";
import subject from "../../../public/svg/subject.svg";
import user from "../../../public/man.png";
import banner_tab from "../../../public/banner_tab.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const AdminDashboard = () => {
  const data = [
    { name: "2023", value1: 5, value2: 5 },
    { name: "2023", value1: 10, value2: 10 },
    { name: "2023", value1: 15, value2: 20 },
    { name: "2023", value1: 20, value2: 30 },
    { name: "2023", value1: 25, value2: 40 },
    { name: "2023", value1: 30, value2: 50 },
    { name: "2023", value1: 35, value2: 60 },
    { name: "2023", value1: 40, value2: 70 },
  ];

  const data1 = [
    { name: "Emergency", value: 28, color: "#3B82F6" },
    { name: "Absent", value: 1, color: "#06B6D4" },
    { name: "Late", value: 1, color: "#10B981" },
  ];

  const [selectedTab, setSelectedTab] = useState("Students");
  const total = data1.reduce((acc, item) => acc + item.value, 0);
  const presentPercentage = ((total - 1) / total) * 100;
  return (
    <div className="">
      {/* =====> Tab Part Start <===== */}
      <div className="flex items-center justify-between pb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#202C4B]">
            Admin Dashboard
          </h2>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#6A7287] text-[14px]">Dashboard</p>
            <p className="text-[#6a72876c]">/</p>
            <p className="text-[#6A7287] text-[14px]">Admin Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-[10px]">
          <button className="bg-[#506EE4] text-[14px] text-white font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[10px] shadow-sm">
            <FaPlus className="text-[12px]" /> Add New Student
          </button>
          <button className="bg-[#E9EDF4] text-[14px] text-[#515B73] font-semibold flex items-center gap-[8px] rounded-[5px] py-[8px] px-[10px] shadow-sm">
            Fees Details
          </button>
        </div>
      </div>
      {/* =====> Tab Part End <===== */}

      <div className="w-full h-[100px] overflow-hidden rounded-[5px] relative mb-[30px]">
        <img className="w-full " src={banner_tab} alt="" />
        <div className="absolute top-1/2  left-[20px] -translate-y-1/2">
          <h2 className="text-[25px] text-white font-bold">
            Welcome Back, Md. Sadiq
          </h2>
          <p className="text-[14px] text-white ">Have a Good day at work</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4  gap-[20px] w-full mb-[30px]">
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#86ddff28] p-[8px] rounded-[8px]">
              <img src={student} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">120</h2>
              <p className="text-gray-500 text-[14px]">Total Student</p>
            </div>
          </div>
        </div>
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#fde9ed86] p-[8px] rounded-[8px]">
              <img src={teacher} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">20</h2>
              <p className="text-gray-500 text-[14px]">Total Teacher</p>
            </div>
          </div>
        </div>
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#FEF8EA] p-[8px] rounded-[8px]">
              <img src={staff} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">10</h2>
              <p className="text-gray-500 text-[14px]">Total Staff</p>
            </div>
          </div>
        </div>
        {/* ====> Total Student <==== */}
        <div className="bg-white p-[10px] shadow-md rounded-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[50px] w-[50px] bg-[#FDE9ED] p-[8px] rounded-[8px]">
              <img src={subject} alt="" />
            </div>
            <div>
              <h2 className="text-[25px] font-bold text-[#202C4B]">10</h2>
              <p className="text-gray-500 text-[14px]">Total Student</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== */}
      <div className="flex gap-[20px]">
        <div className="bg-white shadow-md rounded-[8px] lg:w-[60%] lg:p-[20px]">
          <h2 className="text-[25px] font-bold mb-[20px]">
            Total all years Students
          </h2>
          <hr className="mb-[20px]" />
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" angle={-30} textAnchor="end" />
              {/* <YAxis /> */}
              <Tooltip shape={<RoundedBar />} />
              {/* <Legend /> */}
              <Bar
                dataKey="value1"
                stackId="a"
                fill="#3d5ee1"
                // shape={<RoundedBar />}
              />
              <Bar
                dataKey="value2"
                stackId="a"
                fill="#E5E8F3"
                shape={<RoundedBar />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* === */}
        <div className="bg-white shadow-md rounded-lg p-5 w-96">
          <div className="flex justify-between items-center border-b pb-2 mb-3">
            <h2 className="text-lg font-semibold">Attendance</h2>
            <button className="text-sm text-gray-600">📅 Today</button>
          </div>
          <div className="flex space-x-4 border-b pb-2 mb-3">
            {["Students", "Teachers", "Staff"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`text-sm font-medium ${
                  selectedTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 text-center mb-3">
            {data1.map((item) => (
              <div key={item.name} className="bg-gray-100 p-3 rounded-lg">
                <p className="text-lg font-semibold">{item.value}</p>
                <p className="text-xs text-gray-600">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-3">
            <PieChart width={150} height={150}>
              <Pie
                data={data1}
                dataKey="value"
                outerRadius={60}
                innerRadius={40}
                stroke="none"
              >
                {data1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <p className="text-center font-semibold text-xl text-blue-600">
            {presentPercentage.toFixed(1)}%
          </p>
          <div className="mt-4 text-center">
            <button className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 flex items-center">
              📅 View All
            </button>
          </div>
        </div>
      </div>
      {/* ===== */}
      <div className="w-full overflow-x-auto bg-white py-5 px-4 rounded-[10px] mt-10">
        {/* =====> Search Div  <====== */}
        <CustomSearchForm />

        {/* =====> Responsive Table <====== */}
        <div className="overflow-x-auto">
          <table className="w-full mt-5 text-left border-collapse table-auto min-w-[600px]">
            <thead>
              <tr className="bg-[#F1F2F3] font-semibold text-sm md:text-base">
                <th className="whitespace-nowrap h-10 px-2 text-[#2E3138]">
                  ID
                </th>
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
    </div>
  );
};

export default AdminDashboard;

const RoundedBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 10; // Adjust border radius here

  return (
    <path
      d={`
        M ${x},${y + height} 
        L ${x},${y + radius} 
        Q ${x},${y} ${x + radius},${y} 
        L ${x + width - radius},${y} 
        Q ${x + width},${y} ${x + width},${y + radius} 
        L ${x + width},${y + height} 
        Z
      `}
      fill={fill}
    />
  );
};
