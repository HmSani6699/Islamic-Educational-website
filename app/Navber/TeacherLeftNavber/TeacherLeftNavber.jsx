import React from "react";
import NavlLink from "../../Component/NavList/NavLink/NavlLink";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

const TeacherLeftNavber = () => {
  return (
    <div>
      <NavlLink url={"/teacher"} title={"Profile"}>
        <FaRegUser className="text-[20px]" />
      </NavlLink>
      <NavlLink url={"/admin"} title={"Dashboard"} children_true={true}>
        <MdOutlineDashboard className="text-[20px]" />
      </NavlLink>
    </div>
  );
};

export default TeacherLeftNavber;
