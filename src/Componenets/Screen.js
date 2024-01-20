import React, { useState } from "react";

function Screen() {
  const types = ["Package", "Pricing", "Discount"];
  const manageOffers = [
    { type: "Packages", quantity: 3 },
    { type: "Pricings", quantity: 2 },
    { type: "Offers", quantity: 15 },
  ];

  const [title, setTitle] = useState("10% OFF");
  const [subtitle, setSubtitle] = useState("Off15kFeb");
  const [description, setDescription] = useState(
    "Make a small deposit of ₹500 as a confirmation and avail ₹5000 discount in final booking."
  );
  const [searchInput, setSearchInput] = useState("");

  const [toggleManageOffers, setToggleManageOffers] = useState(null);

  return (
    <div className="flex space-x-[86.03px] w-[1529px] h-[1080px] bg-[#FCFCFC] px-[39.94px] py-[27.26px] mt-[16px] mr-[60.13px]">
      <section className="create-a-custom-offer flex flex-col space-y-4">
        <form>
          <div className="top w-[676.38px] h-[276.85px] opacity-95 bg-[#F4F4F4] rounded border border-[#C9C9C9]" />
          <div className="bottom ">
            <div className="Type flex flex-col ">
              <h2 className="opacity-50 text-slate-800 text-xl font-normal font-['Titillium Web'] leading-[27.14px] mb-2">
                Type
              </h2>
              <div className="flex justify-between text-slate-800  *:rounded-[3px] *:border *:border-[#C9C9C9] *:opacity-95 text-lg  font-medium font-['Inter'] leading-[27.14px]">
                {types.map((type) => (
                  <input
                    className="w-[213.93px] h-[60px] text-center focus:bg-black focus:text-white cursor-pointer"
                    id={type}
                    name={type}
                    type="text"
                    readOnly
                    value={type}
                  />
                ))}
              </div>
            </div>
            <div className="Title&Subtitle flex justify-between items-center">
              <div>
                <h2 className="opacity-50 text-slate-800 text-xl font-normal font-['Titillium Web'] leading-[27.14px] mt-3 mb-2">
                  Title
                </h2>
                <input
                  className="w-[326.27px] h-[60px] opacity-95 rounded-[3px] border border-[#C9C9C9]  pl-5  text-slate-800 text-lg font-medium font-['Inter'] leading-[27.14px]"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <h2 className="opacity-50 text-slate-800 text-xl font-normal font-['Titillium Web'] leading-[27.14px] mt-3 mb-2">
                  Subtitle
                </h2>
                <input
                  className="w-[326.27px] h-[60px] opacity-95 rounded-[3px] border border-[#C9C9C9] pl-5  text-slate-800 text-lg  font-medium font-['Inter'] leading-[27.14px]"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
              </div>
            </div>
            <div className="Description flex justify-between">
              <div>
                <h2 className="opacity-50 text-slate-800 text-xl font-normal font-['Titillium Web'] leading-[27.14px] mt-3 mb-2">
                  Description
                </h2>
                <textarea
                  type="text"
                  spellCheck
                  className="w-[676.38px] h-[98.90px] opacity-50 rounded-[3px] border border-[#C9C9C9] pl-5 py-5 pr-[170px] text-slate-800 text-lg font-medium font-['Inter'] leading-[27.14px]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mx-auto block w-[204.04px] h-[62.45px] opacity-95 text-center text-white text-xl font-semibold font-['Titillium Web'] leading-tight bg-gradient-to-r from-[#6729FF] to-[#7B0FF5] rounded-sm mt-5"
            >
              Create Offer
            </button>
          </div>
        </form>
      </section>
      <section className="manage-offers flex flex-col">
        <div className="flex justify-between">
          {manageOffers.map((item, index) => (
            <div
              key={index}
              onClick={() => setToggleManageOffers(index)}
              className={`${
                index === toggleManageOffers
                  ? "bg-gradient-to-r from-[#6729FF] to-[#7B0FF5] text-white"
                  : ""
              } w-[230px] h-[67.7px] flex justify-center items-center opacity-95  rounded-sm border border-#C9C9C9 text-black text-xl font-semibold font-['Titillium Web'] leading-tight`}
            >
              {item.type}
              <span
                className={` ml-1  ${
                  index === toggleManageOffers
                    ? "text-neutral-50 text-opacity-50"
                    : "text-black text-opacity-40"
                }  `}
              >
                ({item.quantity})
              </span>
            </div>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for Offers..."
            className="w-[689.03px] h-[67.77px] text-black text-opacity-40 text-xl font-semibold font-['Titillium Web'] opacity-95 rounded pl-12 border"
          />
          <img
            src="/assets/glass.png"
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <div className="w-[690.25px] h-[187.18px] opacity-95  rounded border border-[#C9C9C9]">
          <img className="py-[27px] pl-[43px]" src="/assets/iPhone11.png" />
          <div className="buttons">
            <img src="/assets/eye.png" />
            <img src="/assets/Group.png" />
            <img src="/assets/delete.png" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Screen;
