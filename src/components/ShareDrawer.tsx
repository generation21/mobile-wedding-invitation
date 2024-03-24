"use client";

import { CONFIG, GOOGLEFRONTCLOUND } from "@/libs/configs";
import DrawerComponent from "./DrawerComponent";
import ShareIcon from "./ui/icons/ShareIcon";
import { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

type Props = {
  clickedIcon: React.ReactNode;
  icon: React.ReactNode;
};

export default function ShareDrawer({ icon, clickedIcon }: Props) {
  const snsDictionary = {
    kakao: {
      title: "카카오톡 공유",
      icon: <ShareIcon src={"kakao.png"} alt={"kakao"} />,
    },
    link: {
      title: "링크 복사",
      icon: <ShareIcon src={"link.svg"} alt={"link"} />,
    },
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleKakaoClick = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: CONFIG.metadata.title,
          description: CONFIG.metadata.description,
          imageUrl: `${GOOGLEFRONTCLOUND}/${CONFIG.metadata.image}`,
          link: {
            mobileWebUrl: "https://sb-s2-sy--wedding-invitation.vercel.app",
            webUrl: "https://sb-s2-sy--wedding-invitation.vercel.app",
          },
        },
      });
    }
  };
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
    navigator.clipboard.writeText(CONFIG.myurl).then(() => {
      notify();
    });
  };
  return (
    <DrawerComponent
      title={CONFIG.contact.title}
      description={CONFIG.contact.description}
      icon={icon}
      clickedIcon={clickedIcon}
    >
      <div className="flex justify-center gap-10 items-center">
        <button
          onClick={handleKakaoClick}
          className="flex flex-col items-center gap-2 m-2"
        >
          {snsDictionary.kakao.icon}

          <p className="text-xs text-gray-500">{snsDictionary.kakao.title}</p>
        </button>
        <button
          onClick={handleCopyClick}
          className="flex flex-col items-center gap-2 m-2"
        >
          {snsDictionary.link.icon}

          <p className="text-xs text-gray-500">{snsDictionary.link.title}</p>
        </button>
        <Toaster />
      </div>
    </DrawerComponent>
  );
}
