import React from "react";
import NavlLink from "../../Component/NavList/NavLink/NavlLink";
import { MdOutlineDashboard } from "react-icons/md";
import { FaBook } from "react-icons/fa";

const AdminLeftNavber = () => {
  return (
    <div>
      <NavlLink url={"/dashboard"} title={"Dashboard"} children_true={true}>
        <MdOutlineDashboard className="text-[20px]" />
      </NavlLink>
      <NavlLink url={"/dashboard"} title={"Mocktob"} children_true={false}>
        <FaBook className="text-[20px]" />
      </NavlLink>
      <NavlLink url={"/dashboard"} title={"Hefz"} children_true={false}>
        <MdOutlineDashboard className="text-[20px]" />
      </NavlLink>
      <NavlLink url={"/dashboard"} title={"Najera"} children_true={false}>
        <FaBook className="text-[20px]" />
      </NavlLink>
      <NavlLink url={"/dashboard"} title={"Hefz"} children_true={false}>
        <MdOutlineDashboard className="text-[20px]" />
      </NavlLink>
      <NavlLink url={"/dashboard"} title={"Najera"} children_true={false}>
        <FaBook className="text-[20px]" />
      </NavlLink>
      <NavlLink url={"/dashboard"} title={"Hefz"} children_true={false}>
        <MdOutlineDashboard className="text-[20px]" />
      </NavlLink>
      <NavlLink url={"/dashboard"} title={"Najera"} children_true={false}>
        <FaBook className="text-[20px]" />
      </NavlLink>
    </div>
  );
};

export default AdminLeftNavber;
