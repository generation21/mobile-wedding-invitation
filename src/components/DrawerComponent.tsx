"use client";
import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  clickedIcon: React.ReactNode;

  children: React.ReactNode;
};
const DrawerComponent = ({
  title,
  description,
  icon,
  clickedIcon,
  children,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleBackButton = () => {
      if (isOpen) {
        setIsOpen(false);
        return;
      }
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        className="w-full text-center  text-black font-bold  rounded transition duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? clickedIcon : icon}
      </button>
      <div
        className={`fixed inset-0 flex items-end bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full transform transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateY(${isOpen ? "0%" : "100%"})`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-t-lg p-5 shadow-lg flex flex-col items-center gap-2">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-600">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerComponent;
