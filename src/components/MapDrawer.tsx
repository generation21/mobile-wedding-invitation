import * as React from "react";

import { CONFIG } from "@/libs/configs";
import { DrawerContainer } from "./DrawerContainer";
import Link from "next/link";
import Image from "next/image";
import MapIcon from "./ui/icons/MapIcon";
import DrawerComponent from "./DrawerComponent";

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
  ];
  return (
    <DrawerComponent
      title={CONFIG.location.title}
      description={CONFIG.location.description}
      icon={children}
      clickedIcon={children}
    >
      <ul className="grid grid-rows-2 gap-2 m-2 sm:grid-rows-1 grid-flow-col">
        {mapDictionary.map((map) => (
          <Link href={map.url} target="_blank" key={map.title}>
            <li className="flex items-center gap-3 flex-col px-4">
              {map.icon}
              <p className="text-xs sm:text-sm text-gray-700">{map.title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </DrawerComponent>
  );
}
