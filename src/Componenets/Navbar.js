import React, { useState } from "react";
import Seat from "../UI/Seat";
import Analytics from "../UI/Analytics";
import ChatsAndTags from "../UI/ChatsAndTags";
import Custom from "../UI/Custom";
import SalesTeam from "../UI/SalesTeam";

const NavbarTabs = [Seat, SalesTeam, Analytics, ChatsAndTags, Custom];

function Navbar() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="w-[300px] h-[1080px] bg-gradient-to-r from-[#6729FF] to-[#7B0FF5] rounded-sm flex flex-col">
      <header>
        <h1>
          <img
            className="py-12 pb-20 mx-auto"
            src="/assets/VRetail.png"
            alt="v-retail-logo"
          />
        </h1>
      </header>

      <main className="flex flex-col flex-grow space-y-4">
        {NavbarTabs.map((TabComponent, index) => (
          <div
            onClick={() => setActiveTab(index)}
            className="relative"
            key={index}
          >
            <div
              tabIndex={index}
              className={`
  ${
    activeTab === index
      ? "rounded-tl-[30px] rounded-bl-[30px] font-semibold text-black w-[269.92px] bg-[#F4F4F4] ml-[30px]"
      : "rounded-[46.56px] text-[#ddd1f7] w-[239.52px]"
  }
  flex mx-auto items-center justify-center text-base font-['Inter'] h-[60px] border border-white border-opacity-30 cursor-pointer focus:outline-1
`}
            >
              <TabComponent active={activeTab === index} />
            </div>
            {<div className="divWithCurve absolute -top-3 right-0"></div>}
          </div>
        ))}
      </main>

      <footer>
        <img src="/assets/Footer.png" alt="footer-logo" />
      </footer>
    </div>
  );
}

export default Navbar;
