import React from "react";
import { NavLink, useLocation } from "react-router";

const NavlLink = ({ url, title, children_true, children }) => {
  let location = useLocation();

  return (
    <NavLink
      className={` ${
        location?.pathname == url
          ? "nav_activ_text_colors nav_activ_bg_colors nav_activ_left_border_colors"
          : ""
      } flex gap-[20px] items-center py-[8px] px-[8px]  my-[8px] text-black 
  hover:bg-[#3b6b3b3a] hover:text-[#008000] hover:border-l-[2px] hover:border-[#008000] 
  rounded-l-[4px] transition-all duration-300`}
      to={url}
    >
      {children}
      {title}
    </NavLink>
  );
};

export default NavlLink;
