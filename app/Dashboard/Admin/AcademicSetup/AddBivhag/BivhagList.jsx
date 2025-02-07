import React from "react";
import CustomSearchForm from "../../../../Component/CustomSearchForm/CustomSearchForm";
import update_green_icon from "../../../../../public/svg/updateGreenIcon.svg";
import delete_icon from "../../../../../public/svg/delete_icon.svg";

const BivhagList = () => {
  return (
    <div className="w-full overflow-x-auto bg-white py-5 px-2.5 rounded-[10px] mt-10">
      {/* =====> Search Div  <====== */}
      <CustomSearchForm />

      {/* =====> Admission list table <====== */}
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
              className="h-10 px-0 text-[#2E3138] text-[16px] font-[500] text-center"
            >
              Action
            </th>
          </tr>

          <tr>
            <td className="h-10 py-2 pl-[10px]">1</td>
            <td className="h-10 py-2">Md Norol Amin</td>

            <td className="h-10 py-2 mt-[10px] flex justify-center">
              <div className="flex items-center gap-[10px]">
                {/* <button
                  onClick={() => setPage("addClass")}
                  className="flex items-center gap-[8px] bg-[#008000] text-[14px] text-white px-[10px] py-[5px] rounded-[8px] "
                >
                  <FaPlus /> Add class
                </button> */}
                <button>
                  <img src={update_green_icon} alt="" />
                </button>

                <button>
                  <img src={delete_icon} alt="" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BivhagList;
