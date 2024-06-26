"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

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
  const navigate = useRouter();
  useEffect(() => {
    // URL 변경에 따라 Drawer 상태를 업데이트하는 부수 효과
    if (isOpen) {
      navigate.push(`?drawer=${title}`, { scroll: false });
    } else {
      navigate.push("/", { scroll: false });
    }

    // 브라우저 뒤로 가기 버튼 감지
    const handlePopState = () => {
      const isDrawerOpen =
        new URL(window.location.href).searchParams.get("drawer") === title;
      setIsOpen(isDrawerOpen);
    };

    window.addEventListener("popstate", handlePopState);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpen, navigate, title]);

  const toggleDrawer = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="w-full text-center  text-black font-bold  rounded transition duration-300 ease-in-out"
        onClick={toggleDrawer}
      >
        {isOpen ? clickedIcon : icon}
      </button>
      <div
        className={`fixed inset-0 flex items-end bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
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
    </>
  );
};

export default DrawerComponent;
