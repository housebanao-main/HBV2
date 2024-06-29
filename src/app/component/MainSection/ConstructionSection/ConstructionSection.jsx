"use client";
import React from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import Image from "next/image";
import constructionimage01 from "../../../../../public/assets/images/Constructionimage01.png";
import constructionimage02 from "../../../../../public/assets/images/constructionimage02.png";
import constructionimage03 from "../../../../../public/assets/images/Constructionimage03.png";
import constructionimage04 from "../../../../../public/assets/images/Constructionimage04.png";
import { CommonSlider } from "../../Utils/CommonSlider/CommonSlider";

export const ConstructionSection = () => {
  const data = [
    {
      icon: constructionimage01,
      title: "Modular kitchen",
      subHeading: "Functional kitchen, wardrobe and storage",
    },
    {
      icon: constructionimage02,
      title: "Full home interior",
      subHeading: "Latest interior solutions for your home",
    },
    {
      icon: constructionimage03,
      title: "End-to-end construction",
      subHeading: "Latest Home solutions",
    },
    {
      icon: constructionimage04,
      title: "Luxury interiors",
      subHeading: "Latest Home solutions",
    },
  ];

  return (
    <div
      id="services"
      className="lg:max-w-[1290px] w-full mx-auto lg:px-[18px] mt-[60px] mb-[40px] px-4"
    >
      <CommonHeading className="text-center">
        One-stop shop for all construction and interiors
      </CommonHeading>
      <div className="w-full flex justify-center items-center my-[10px]">
        <p className="text-center w-full lg:w-[630px] lg:px-0 px-[10px] text-[14px]">
          Be it end-to-end construction, interior or modular solutions, we
          have it all for your home or office. With a wide range of furniture
          & decor, we have your back from start to finish.
        </p>
      </div>

      <div className="relative lg:max-w-[1290px] w-full mx-auto min-h-[400px] h-[450px] lg:overflow-hidden">
        {/* Only use the slider on larger screens */}
        <div className="hidden lg:block">
          <CommonSlider slidesShow={3} autoPlay={true} className="py-6 lg:mx-auto">
            {data.map((item, index) => (
              <div
                className="flex flex-col border border-gray-200 h-auto rounded-[10px] mb-[15px] w-[calc(100% / 3 - 20px)]"
                key={index}
              >
                <Image
                  src={item.icon}
                  alt={item.subHeading}
                  className="h-[250px] rounded-t-[10px] object-cover"
                />
                <div className="bg-white p-[15px] flex h-[150px] flex-col items-center gap-[10px] rounded-b-[10px]">
                  <p className="text-[#575757] text-[18px] font-semibold">
                    {item.title}
                  </p>
                  <p className="w-[200px] text-[14px] text-center">
                    {item.subHeading}
                  </p>
                </div>
              </div>
            ))}
          </CommonSlider>
        </div>

        {/* Stack items vertically on smaller screens */}
        <div className="lg:hidden flex flex-col items-center gap-[15px]">
          {data.map((item, index) => (
            <div
              className="flex flex-col border border-gray-200 h-auto shadow-lg rounded-[10px] mb-[15px] w-full"
              key={index}
            >
              <Image
                src={item.icon}
                alt={item.subHeading}
                className="h-[150px] rounded-t-[10px] object-cover"
              />
              <div className="bg-white p-[15px] flex h-[150px] flex-col items-center gap-[10px] rounded-b-[10px]">
                <p className="text-[#575757] text-[18px] font-semibold">
                  {item.title}
                </p>
                <p className="w-full text-[14px] text-center">
                  {item.subHeading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
