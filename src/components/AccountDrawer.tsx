import * as React from "react";

import { CONFIG } from "@/libs/configs";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import AccountIcon from "./ui/icons/AccountIcon";
import DrawerComponent from "./DrawerComponent";

type Props = {
  children: React.ReactNode;
};
export default function AccountDrawer({ children }: Props) {
  const groomDictionary = [
    {
      title: "신랑: 홍승범",
      icon: <AccountIcon type={CONFIG.account.groom.type} />,
      account: CONFIG.account.groom.account,
    },
    {
      title: "신랑측 父: 홍인선",
      icon: <AccountIcon type={CONFIG.account.groomFather.type} />,
      account: CONFIG.account.groomFather.account,
    },
    {
      title: "신랑측 母: 김순영",
      icon: <AccountIcon type={CONFIG.account.groomMother.type} />,
      account: CONFIG.account.groomMother.account,
    },
  ];

  const brideDictionary = [
    {
      title: "신부: 신소연",
      icon: <AccountIcon type={CONFIG.account.bride.type} />,
      account: CONFIG.account.bride.account,
    },
    {
      title: "신부측 父: 신문교",
      icon: <AccountIcon type={CONFIG.account.brideFather.type} />,
      account: CONFIG.account.brideFather.account,
    },
    {
      title: "신부측 母: 심정임",
      icon: <AccountIcon type={CONFIG.account.brideMother.type} />,
      account: CONFIG.account.brideMother.account,
    },
  ];
  const notify = (title: string) =>
    toast(`${title}님의 계좌번호가 복사되었습니다!`, {
      duration: 2000,
      position: "bottom-center",

      style: {
        borderRadius: "10px",
        backgroundColor: "black",
        color: "white",
      },
    });
  const handleCopyClick = (account: string, title: string) => {
    navigator.clipboard.writeText(account).then(() => {});
    notify(title);
  };
  return (
    <DrawerComponent
      title={CONFIG.account.title}
      description={CONFIG.account.description}
      icon={children}
      clickedIcon={children}
    >
      <ul className="flex sm:flex-row flex-col gap-2 m-2 w-full">
        {groomDictionary.map((account, index) => (
          <li className="sm:w-1/3" key={index}>
            <button
              onClick={() => handleCopyClick(account.account, account.title)}
              className="flex w-full items-center gap-5 flex-row shadow-sm border border-gray-200 p-2 rounded-lg"
            >
              <div className="rounded-lg bg-gray-100 ">{account.icon}</div>
              <p className="text-sm sm:text-base text-gray-500">
                {account.title}
              </p>
            </button>
          </li>
        ))}
      </ul>
      <div className="border-b border-gray-300 my-1 w-full" />
      <ul className="flex sm:flex-row flex-col gap-2 m-2 w-full">
        {brideDictionary.map((account, index) => (
          <li className="sm:w-1/3" key={index}>
            <button
              onClick={() => handleCopyClick(account.account, account.title)}
              className="flex items-center gap-5 w-full flex-row shadow-sm border border-gray-200 p-2 rounded-lg"
            >
              <div className="rounded-lg bg-gray-100 ">{account.icon}</div>
              <p className="text-sm sm:text-base text-gray-500">
                {account.title}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </DrawerComponent>
  );
}
