"use client";
import React from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import { Cards } from "../../Utils/Cards/Cards";
import {
  faCircleCheck,
  faCreditCard,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";

export const Services = () => {
  const cardsContent = [
    {
      icon: faCircleCheck,
      title: "10 years warranty",
      backgroundColor: "#C5FDBB",
    },
    {
      icon: faCreditCard,
      title: "Easy EMI options",
      backgroundColor: "#D9FCF6",
    },
    {
      icon: faEyeSlash,
      title: "0 Hidden costs",
      backgroundColor: "#E3DEFF",
    },
    {
      icon: faCircleCheck,
      title: "Regular quality checks",
      backgroundColor: "#FFF7AE",
    },
  ];

  return (
    <>
      <section
        className="bg-white lg:h-[380px] h-auto mb-[30px] mt-[25px] w-full flex justify-center items-center pt-[20px] pb-[40px] flex-col px-4"
      >
        <CommonHeading className="mt-[10px]">Why choose us?</CommonHeading>
        <div className="relative w-full mx-auto mt-[25px] flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-6 mx-6 lg:mx-24">
            {cardsContent.map((card, index) => (
              <Cards
                key={index}
                icon={card.icon}
                title={card.title}
                bgColor={card.backgroundColor}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
