import React from "react";
import NavlLink from "../../Component/NavList/NavLink/NavlLink";
import { MdOutlineDashboard } from "react-icons/md";
import { FaBook, FaUserGraduate } from "react-icons/fa";
import { LuClipboardPenLine } from "react-icons/lu";

const AdminLeftNavber = () => {
  return (
    <div>
      <NavlLink url={"/admin"} title={"Dashboard"} children_true={true}>
        <MdOutlineDashboard className="text-[20px]" />
      </NavlLink>
      <NavlLink
        url={"/admin/admission"}
        title={"Admission List"}
        children_true={false}
      >
        <LuClipboardPenLine className="text-[20px]" />
      </NavlLink>
      <NavlLink
        url={"/admin/teacher"}
        title={"Teacher List"}
        children_true={false}
      >
        <FaUserGraduate className="text-[20px]" />
      </NavlLink>
    </div>
  );
};

export default AdminLeftNavber;
