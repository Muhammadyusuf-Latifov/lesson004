import React from "react";
import { LINKS } from "../../static";
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { LuFolderPen } from "react-icons/lu";
const Header = () => {
  return (
    <header className="header absolute w-[100%] py-[20px] border-b border-b-[#98e7f5] bg-[#57a7cc40]">
      <nav className="container flex items-center justify-between ">
        <h2 className="font-bold text-[#3170e4]  text-[36px] ">
          <span className="underline"> Reg</span>
          <span>istration</span>
        </h2>
        <ul className="flex items-center gap-x-[20px] text-[green] font-medium text-[18px]">
          {LINKS?.map((item, index) => (
            <li className="hover:underline cursor-pointer" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-[16px] text-[20px] text-[#b6466a]">
          <FiSearch />
          <SlBasket />
          <LuFolderPen />
        </div>
      </nav>
    </header>
  );
};

export default Header;
