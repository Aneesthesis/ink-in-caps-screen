import React from "react";
import Bell from "../UI/Bell";
import QuestionMark from "../UI/QuestionMark";
import Switch from "../UI/Switch";

function Header() {
  return (
    <div className="flex justify-between w-[1529px] mt-10">
      <div className="flex justify-center items-end space-x-[580px]">
        <h1 className="opacity-95 text-zinc-800 text-xl font-semibold font-titilliumWeb capitalize leading-tight">
          <p>Create a custom offer</p>
        </h1>
        <h1 className="opacity-95 text-zinc-800 text-xl font-semibold font-titilliumWeb capitalize leading-tight">
          <p> Manage Offers</p>
        </h1>
      </div>

      <div className="flex space-x-4">
        <Bell />
        <div className="w-[164.41px] h-[57.79px] flex justify-around items-center bg-white bg-opacity-70 rounded-[3px] border border-black border-opacity-10">
          <p className="text-zinc-800 text-lg font-normal font-titilliumWeb leading-[18px]">
            Support
          </p>
          <img
            className="max-w-[11px] max-h-[8px]"
            src="/assets/polygon 8.png"
          />
        </div>
        <QuestionMark />
        <Switch />
      </div>
    </div>
  );
}

export default Header;
