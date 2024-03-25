"use client";
import { TbHomeHeart } from "react-icons/tb";
import { ImLocation } from "react-icons/im";

import { FaRegCalendarCheck } from "react-icons/fa";
import { PiPiggyBankBold } from "react-icons/pi";
import { useEffect, useState } from "react";

export default function FooterNav() {
  const navDict = [
    {
      id: "introduction",
      title: "Home",
      icon: <TbHomeHeart className="w-10 h-10" />,
    },
    {
      id: "location",
      title: "Map",
      icon: <ImLocation className="w-10 h-10" />,
    },

    {
      id: "calendar",
      title: "Calendar",
      icon: <FaRegCalendarCheck className="w-10 h-10" />,
    },
    {
      id: "account",
      title: "Donate",
      icon: <PiPiggyBankBold className="w-10 h-10" />,
    },
  ];

  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = () => {
    const sections = navDict.map((nav) => nav.id);
    const currentSection = sections.find((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
        return scrollPosition >= elementTop && scrollPosition <= elementBottom;
      }
      return false;
    });

    setActiveSection(currentSection || "");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky bottom-0 w-full bg-white z-20">
      <ul className="flex justify-between mx-4 py-2 items-center">
        {navDict.map((nav) => (
          <li key={nav.id}>
            <button
              className={`${
                activeSection === nav.id ? "text-sky-500" : "text-gray-700"
              }`}
              onClick={() => scrollToSection(nav.id)}
            >
              {nav.icon}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
