import React, { useState } from "react";
import { IoSearch, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/1.png";
import Header2 from "../assets/logo/2.png";
import Header3 from "../assets/logo/3.png";
import Header4 from "../assets/logo/4.png";
import Header5 from "../assets/logo/5.png";

const Header = () => {
  return (
    <div className="bg-[#202562] text-white relative z-50">
      <div className="flex items-center justify-evenly py-2 max-[900px]:justify-between max-[900px]:px-10">
        <IoSearch className="text-[2rem] hidden max-[900px]:block max-[600px]:text-[.85rem]" />
        <Link to="/">
          <img
            className=" w-[120px] h-[72px] max-[600px]:w-[60px] max-[600px]:h-[31px]"
            src={Logo}
            alt="Logo"
          />
        </Link>

        <Link to="/subscription" className="max-[900px]:hidden">
          <div className="flex items-center gap-1">
            <img className="h-[22px] w-[22px]" src={Header2} alt="" />
            <p className="text-[16px] font-[500]">подписки</p>
          </div>
        </Link>

        <Link to="/games" className="max-[900px]:hidden">
          <div className="flex items-center gap-1">
            <img className="h-[22px] w-[22px]" src={Header3} alt="" />
            <p className="text-[16px] font-[500]">игры</p>
          </div>
        </Link>

        <Link to="/replenish" className="max-[900px]:hidden">
          <div className="flex items-center gap-1">
            <img className="h-[22px] w-[22px]" src={Header4} alt="" />
            <p className="text-[16px] font-[500]">пополнение</p>
          </div>
        </Link>

        <div className="relative w-[220px] max-[900px]:hidden">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <IoSearch className="text-gray-400 text-[1.2rem]" />
          </div>
          <input
            type="text"
            className="w-full pr-10 pl-4 py-2 bg-[#282E79] text-white rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <Link to="/basket">
          <div className="flex items-center gap-1">
            <img
              className="h-[22px] w-[22px] max-[600px]:w-[12px] max-[600px]:h-[12px]"
              src={Header5}
              alt=""
            />
            <p className="text-[16px] font-[500] max-[900px]:hidden">корзина</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
