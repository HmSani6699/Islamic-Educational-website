import React, { useState } from "react";
import NavlLink from "../../Component/NavList/NavLink/NavlLink";
import {
  FaAmericanSignLanguageInterpreting,
  FaBook,
  FaCalculator,
  FaRegUser,
} from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { GiOpenBook } from "react-icons/gi";

const TeacherLeftNavber = () => {
  const [activeButton, setActiveButton] = useState(false);
  return (
    <div>
      <NavlLink url={"/teacher"} title={"Profile"}>
        <FaRegUser className="text-[20px]" />
      </NavlLink>
      <NavlLink url={"/admin"} title={"Dashboard"} children_true={true}>
        <MdOutlineDashboard className="text-[20px]" />
      </NavlLink>

      <div className="text-black">
        {/* Main Button */}
        <div
          onClick={() => setActiveButton(!activeButton)}
          className={`${
            activeButton
              ? "nav_activ_text_colors nav_activ_bg_colors nav_activ_left_border_colors"
              : ""
          } flex items-center justify-between py-[8px] px-[8px]  text-black 
           hover:bg-[#3b6b3b3a] hover:text-[#008000] hover:border-l-[2px] hover:border-[#008000] 
           rounded-l-[4px] transition-all duration-300 cursor-pointer`}
        >
          <div className="flex gap-[10px]">
            <LuSchool className="text-[20px]" />
            <h2 className="flex gap-[10px]">Class One</h2>
          </div>
          <IoIosArrowBack
            className={`transition-all duration-300 ${
              activeButton ? "-rotate-[90deg]" : "rotate-[90deg]"
            }`}
          />
        </div>

        {/* Dropdown Menu */}
        <div
          className={`ml-[10px] overflow-hidden transition-all duration-500 ease-in-out ${
            activeButton ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Nav Links with Correct Icons */}
          <NavlLink
            url={"/teacher/student_attendance"}
            title={"Arabic"}
            children_true={true}
          >
            <GiOpenBook className="text-[20px]" /> {/* Icon for Arabic */}
          </NavlLink>
          <NavlLink
            url={"/class-one/bangla"}
            title={"Bangla"}
            children_true={true}
          >
            <FaBook className="text-[20px]" /> {/* Icon for Bangla */}
          </NavlLink>
          <NavlLink
            url={"/class-one/english"}
            title={"English"}
            children_true={true}
          >
            <FaAmericanSignLanguageInterpreting className="text-[20px]" />{" "}
            {/* Icon for English */}
          </NavlLink>
          <NavlLink
            url={"/class-one/mathematics"}
            title={"Mathematics"}
            children_true={true}
          >
            <FaCalculator className="text-[20px]" />{" "}
            {/* Icon for Mathematics */}
          </NavlLink>
        </div>
      </div>

      <NavlLink url={"/admin"} title={"Dashboard"} children_true={true}>
        <MdOutlineDashboard className="text-[20px]" />
      </NavlLink>
    </div>
  );
};

export default TeacherLeftNavber;
