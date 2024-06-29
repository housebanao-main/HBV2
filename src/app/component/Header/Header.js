"use client";
import React, { useState } from "react";
import logo from "../../../../public/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/slice/slice";
import { SCREENS } from "../Utils/CustomModal/Modal";

export const Header = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const menus = [
    { name: "Service", link: "/service" },
    { name: "Our Projects", link: "/ourprojects" },
    { name: "Packages", link: "/pack" },
    { name: "How It Works", link: "/howitwork" },
    { name: "Floor Plans", link: "/floorplans" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contactus", className: "ml-36" } 
  ];

  const showMenu = () => setActive(!active);

  const handleClick = () => {
    dispatch(
      toggleModal({
        screen: SCREENS.LEAD_POPUP,
        visible: true,
      })
    );
    active && showMenu();
  };

  return (
    <>
      <header className="w-full top-0 sticky inset-x-0 z-[20] bg-white shadow-lg lg:max-h-[65px] h-[70px] items-center justify-center flex">
        <div className="lg:max-w-[1290px] w-full mx-auto flex items-center justify-between py-[10px]">
          <div className="flex items-center gap-[80px] relative">
            <Link href="/">
              <Image
                src={logo}
                alt="House Banao"
                height={57}
                width={150}
                className="w-[150px]"
              />
            </Link>
            <div className="lg:flex gap-[25px] hidden">
              <nav className="lg:flex gap-[25px] text-regular ">
                {menus.slice(0, -1).map((menu, index) => (
                  <Link key={index} href={menu.link}>
                    {menu.name}
                  </Link>
                ))}
                <Link href={menus[menus.length - 1].link} className={menus[menus.length - 1].className}>
                  {menus[menus.length - 1].name}
                </Link>
              </nav>
            </div>
          </div>
          <div className="absolute flex items-center gap-4 right-[16px] md:hidden top-[25px] scale-120">
            <FontAwesomeIcon
              icon={faBars}
              className="w-[20px] h-[20px]"
              onClick={showMenu}
            />
          </div>

          <div className={`${!active ? "slideractive slider" : "slider "} `}>
            <FontAwesomeIcon
              icon={faClose}
              onClick={showMenu}
              className="cursor-pointer w-[23px] h-[23px] absolute text-2xl right-8 top-6"
            />

            <ul className="py-[80px] px-[30px] font-medium flex flex-col gap-[30px] text-[20px] absolute top-[30px]">
              {menus.map((menu, index) => (
                <Link key={index} href={menu.link} onClick={showMenu} className={menu.className}>
                  {menu.name}
                </Link>
              ))}
            </ul>
          </div>

          <button className="hidden lg:flex w-fit h-[40px] rounded-[88px] mr-16 border-[0.5px] p-[14px] justify-between items-center bg-brown mb-0">
            <span className="font-medium text-regular bg-brown text-white ">
              Book Consultation now
            </span>
          </button>
        </div>
      </header>
    </>
  );
};
