import React from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import { SubHeading } from "../../SubHeading/SubHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleDown, faPlus } from "@fortawesome/free-solid-svg-icons";

export const Packages = () => {
  const packages = [
    { id: 1, title: "Construction - $990/sq.ft (incl. GST)" },
    { id: 2, title: "Construction + interior - $1700/sq.ft " },
    { id: 3, title: "Interior - $2,330/sq.ft" },
  ];

  const options = [
    "Ground + 1",
    "Ground + 1 + 2",
    "Ground + 1 + 2 + 3",
    "Ground + 1 + 2 + 3 + 4",
  ];

  const secondBoxItems = [
    "Designs and drawings",
    "Structure",
    "Kitchen",
    "Bathroom",
    "Doors and windows",
    "Painting",
    "Flooring",
    "Electrical",
    "Miscellaneous",
  ];

  return (
    <section className="flex flex-col items-center mt-8 font-poppins">
      <CommonHeading className="text-[25px] font-extrabold mt-[5px]">
        Packages
      </CommonHeading>
      <SubHeading className="text-center mt-[7px]">
        Find the best home construction packages 
      </SubHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full max-w-[1290px]">
        {packages.map((pkg, index) => (
          <div
            key={pkg.id}
            className="border-2 border-brown rounded-md h-[650px] w-[400px] flex flex-col items-center justify-between"
          >
            <div className="bg-brown rounded-t-md w-full p-5">
              <h1 className="text-white text-[18px]">{pkg.title}</h1>
            </div>
            <div className="bg-white w-full p-5 flex flex-col items-start flex-grow text-[#575757]">
              {index === 0 && (
                <ul className="list-disc pl-0 w-full">
                  {options.map((option, idx) => (
                    <li key={idx} className="mb-4 flex justify-between items-center w-full">
                      <span>{option}</span>
                      <FontAwesomeIcon icon={faAngleDown} className="text-black" />
                    </li>
                  ))}
                </ul>
              )}
              {(index === 1 || index === 2) && (
                <ul className="list-disc pl-0 w-full">
                  {secondBoxItems.map((item, idx) => (
                    <li key={idx} className="mb-4 flex justify-between items-center w-full">
                      <span>{item}</span>
                      <FontAwesomeIcon icon={faPlus} className="text-black" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <div className="bg-white w-full p-5 flex-grow flex flex-col items-center justify-center text-[#575757]">
                <p className="text-center  mb-auto">
                  Get in touch with us
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs text-[#575757]" />
                </p>
              </div>
              <button className="hidden lg:flex w-fit h-[40px] rounded-[88px] border-[0.5px] p-[14px] justify-between items-center bg-brown mb-4">
                <span className="font-medium text-regular bg-brown text-white">
                  Book Consultation now
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
