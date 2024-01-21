import React, { useState } from "react";
import Delete from "../UI/Delete";
import Eye from "../UI/Eye";
import Edit from "../UI/Edit";
import Header from "./Header";
import PlusIcon from "../UI/PlusIcon";
import { offers } from "../Data";

function CustomScreen() {
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
    <div>
      <div className="absolute">
        <Header />
      </div>

      <div className="flex relative space-x-[70.03px] w-[1529px] h-auto bg-[#FCFCFC] px-[39.94px] pt-[27.26px] mt-32 mr-[60.13px]">
        <section className="create-a-custom-offer flex flex-col space-y-4">
          <form>
            <div className="top flex flex-col items-center justify-center w-[676.38px] h-[276.85px] opacity-95 bg-[#F4F4F4] rounded border border-[#C9C9C9] mb-3">
              <PlusIcon />
              <h1 className="text-zinc-800 text-2xl font-semibold font-titilliumWeb capitalize leading-loose">
                Upload a cover photo of offer
              </h1>
              <h3 className="opacity-90 text-zinc-600 text-base font-medium font-['Inter'] leading-normal">
                Only JPG, PNG file types (Max 500kb)
              </h3>
            </div>
            <div className="bottom ">
              <div className="Type flex flex-col ">
                <h2 className="opacity-50 text-slate-800 text-xl font-normal font-titilliumWeb leading-[27.14px] mb-2">
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
                  <h2 className="opacity-50 text-slate-800 text-xl font-normal font-titilliumWeb leading-[27.14px] mt-3 mb-2">
                    Title
                  </h2>
                  <input
                    className="w-[326.27px] h-[60px] opacity-95 rounded-[3px] border border-[#C9C9C9]  pl-5  text-slate-800 text-lg font-medium font-['Inter'] leading-[27.14px]"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <h2 className="opacity-50 text-slate-800 text-xl font-normal font-titilliumWeb leading-[27.14px] mt-3 mb-2">
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
                  <h2 className="opacity-50 text-slate-800 text-xl font-normal font-titilliumWeb leading-[27.14px] mt-3 mb-2">
                    Description
                  </h2>
                  <textarea
                    type="text"
                    readOnly
                    spellCheck
                    className="w-[676.38px] h-[98.90px] opacity-50 rounded-[3px] border border-[#C9C9C9] pl-5 py-5 pr-[170px] text-slate-800 text-lg font-medium font-['Inter'] leading-[27.14px] outline-none focus:border-[#C9C9C9]"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mx-auto block w-[204.04px] h-[62.45px] opacity-95 text-center text-white text-xl font-semibold font-titilliumWeb leading-tight bg-gradient-to-r from-[#6729FF] to-[#7B0FF5] rounded-sm mt-5"
              >
                Create Offer
              </button>
            </div>
          </form>
        </section>
        <section className="manage-offers flex flex-col space-y-6">
          <div className="flex justify-between">
            {manageOffers.map((item, index) => (
              <div
                key={index}
                onClick={() => setToggleManageOffers(index)}
                className={`${
                  index === toggleManageOffers
                    ? "bg-gradient-to-r from-[#6729FF] to-[#7B0FF5] text-white"
                    : ""
                } cursor-pointer w-[230px] h-[67.7px] flex justify-center items-center opacity-95 rounded border border-[#C9C9C9] text-black text-xl font-semibold font-titilliumWeb leading-tight`}
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
          <div className="relative w-full">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for Offers..."
              className="w-full h-[67.77px] text-black text-opacity-40 text-xl font-semibold font-['Tillium Web'] opacity-95 rounded pl-12 border border-[#C9C9C9]"
            />
            <img
              src="/assets/glass.png"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
          </div>

          <ul className="flex flex-col space-y-4 max-h-[740px] overflow-x-hidden overflow-y-auto">
            {offers.map((offer, index) => (
              <li
                key={index}
                className="relative w-[690.25px] min-h-[187.18px] py-4 opacity-95 flex space-x-4 rounded border border-[#C9C9C9]"
              >
                <img
                  className="pl-[10px] max-w-[150px] max-h-[130px] mt-2"
                  src={offer.image}
                  alt="Offer Image"
                />
                <div className=" mr-[123px] flex flex-col justify-center">
                  <h2 className="opacity-75 text-black text-[26px]  font-titilliumWeb font-bold whitespace-nowrap uppercase leading-relaxed">
                    {offer.title}
                  </h2>
                  <p className="w-[389.77px] h-[49.80px] opacity-90 text-zinc-600 text-base font-normal font-['Inter'] capitalize leading-relaxed">
                    {offer.description}
                  </p>
                </div>
                <div className="absolute top-1 right-0 buttons flex space-x-3 mt-2 mr-5">
                  <Eye />
                  <Edit />
                  <Delete />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default CustomScreen;
