"use client";
import React from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import { Cards } from "../../Utils/Cards/Cards";
import {
  faCalendarDays,
  faCircleCheck,
  faCreditCard,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { CommonSlider } from "../../Utils/CommonSlider/CommonSlider";

export const Services = () => {
  const cardsContent = [
    {
      icon: faCalendarDays,
      title: "Deliver in 45 days",
      backgroundColor: "#ECDAF2",
    },
    {
      icon: faPeopleGroup,
      title: "500+ happy customer",
      backgroundColor: "#FFEDDE",
    },
    {
      icon: faCreditCard,
      title: "Easy EMI options",
      backgroundColor: "#D9FCF6",
    },
    {
      icon: faCircleCheck,
      title: "Regular quality checks",
      backgroundColor: "#FFF7AE",
    },
    {
      icon: faEyeSlash,
      title: "0 Hidden costs",
      backgroundColor: "#E3DEFF",
    },
    {
      icon: faCircleCheck,
      title: "10 years warranty",
      backgroundColor: "#C5FDBB",
    },
  ];
  return (
    <>
      <section
        className="bg-[#F7F7F7] lg:h-[380px] h-auto mb-[30px] mt-[25px] w-full flex justify-center items-center  pt-[20px] pb-[40px] flex-col"
      >
        <CommonHeading className={"mt-[10px]"}>Why choose us?</CommonHeading>
        <div className="relative lg:max-w-[1290px] w-full mx-auto">
          <CommonSlider slidesShow={4} className="py-6 lg:mx-auto">
            {cardsContent.map((card, index) => (
              <Cards
                key={index}
                icon={card.icon}
                title={card.title}
                bgColor={card.backgroundColor}
              />
            ))}
          </CommonSlider>
        </div>
      </section>
    </>
  );
};
