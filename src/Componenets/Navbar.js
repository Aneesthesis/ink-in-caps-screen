import React, { useState } from "react";
import Seat from "../UI/Seat";
import Analytics from "../UI/Analytics";
import ChatsAndTags from "../UI/ChatsAndTags";
import Custom from "../UI/Custom";
import SalesTeam from "../UI/SalesTeam";

const NavbarTabs = [Seat, SalesTeam, Analytics, ChatsAndTags, Custom];

function Navbar() {
  const [activeTab, setActiveTab] = useState(false);

  const handleClickOnTab = (e) => {
    setActiveTab(+e.target.id);
    console.log(e.target.id);
  };

  return (
    <div className="w-[300px] h-[1080px] bg-gradient-to-r from-[#6729FF] to-[#7B0FF5] rounded-sm">
      <img
        className="py-12 pb-20 mx-auto"
        src="/assets/VRetail.png"
        alt="v-retail-logo"
      ></img>
      <main className="flex flex-col space-y-4">
        {NavbarTabs.map((TabComponent, index) => (
          <div className="relative">
            <div
              onClick={handleClickOnTab}
              id={index}
              key={index}
              className={` ${
                activeTab === index
                  ? "rounded-tl-[30px] rounded-bl-[30px]"
                  : "rounded-[46.56px]"
              }  ${activeTab === index ? "font-semibold" : ""} ${
                activeTab === index ? "text-black" : "text-[#ddd1f7]"
              } ${activeTab === index ? "w-[269.92px]" : "w-[239.52px]"} ${
                activeTab === index ? "bg-[#F4F4F4]" : ""
              } ${
                activeTab === index ? "ml-[30px]" : ""
              } flex mx-auto items-center justify-center text-base font-['Inter']  h-[60px]  border border-white border-opacity-30 cursor-pointer`}
            >
              <TabComponent active={activeTab === index} />
            </div>
            {<div className="divWithCurve absolute -top-3 right-0"></div>}
          </div>
        ))}
      </main>
      <footer>
        <img src="/assets/Footer.png" />
      </footer>
    </div>
  );
}

export default Navbar;
