import * as React from "react";

import { CONFIG } from "@/libs/configs";
import { DrawerContainer } from "./DrawerContainer";
import Link from "next/link";
import Image from "next/image";
import MapIcon from "./ui/icons/MapIcon";
import DrawerComponent from "./DrawerComponent";
import ShareIcon from "./ui/icons/ShareIcon";
import toast, { Toaster } from "react-hot-toast";
type Props = {
  children: React.ReactNode;
};
export default function MapDrawer({ children }: Props) {
  const mapDictionary = [
    {
      title: "네이버지도",
      icon: <MapIcon src="map/navermap.webp" alt="naver map" />,
      url: "https://naver.me/xjeLdhwB",
    },
    {
      title: "카카오맵",
      icon: <MapIcon src="map/kakaomap.svg" alt="kakao map" />,
      url: "https://place.map.kakao.com/9846217",
    },

    {
      title: "티맵",
      icon: <MapIcon src="map/Tmap.svg" alt="T map" />,
      url: "https://tmap.life/bca15637",
    },
    {
      title: "주소 복사",
      icon: (
        <ShareIcon
          src={"link.svg"}
          alt={"link"}
          style="rounded-full w-14 h-14  wborder shadow-sm border-gray-200"
        />
      ),
      url: CONFIG.address,
    },
  ];
  const notify = () =>
    toast("복사되었습니다!", {
      duration: 1000,
      position: "bottom-center",
      icon: "🫡",
      style: {
        borderRadius: "10px",
        backgroundColor: "black",
        color: "white",
      },
    });
  const handleCopyClick = () => {
    navigator.clipboard.writeText(CONFIG.address).then(() => {
      notify();
    });
  };
  return (
    <DrawerComponent
      title={CONFIG.location.title}
      description={CONFIG.location.description}
      icon={children}
      clickedIcon={children}
    >
      <ul className="grid grid-rows-2 gap-2 m-2 sm:grid-rows-1 grid-flow-col">
        {mapDictionary.map((map) => {
          return map.title === "주소 복사" ? (
            <li
              className="flex items-center gap-3 flex-col px-4"
              onClick={handleCopyClick}
            >
              {map.icon}
              <p className="text-xs sm:text-sm text-gray-700">{map.title}</p>
            </li>
          ) : (
            <Link href={map.url} target="_blank" key={map.title}>
              <li className="flex items-center gap-3 flex-col px-4">
                {map.icon}
                <p className="text-xs sm:text-sm text-gray-700">{map.title}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </DrawerComponent>
  );
}
