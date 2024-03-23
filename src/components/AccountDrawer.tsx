import * as React from "react";

import { CONFIG } from "@/libs/configs";
import { DrawerContainer } from "./DrawerContainer";
import Link from "next/link";
import Image from "next/image";
import AccountIcon from "./ui/icons/AccountIcon";
import DrawerComponent from "./DrawerComponent";

type Props = {
  children: React.ReactNode;
};
export default function AccountDrawer({ children }: Props) {
  const groomDictionary = [
    {
      title: "신랑: 홍승범",
      icon: <AccountIcon src="account/shinhan.png" alt="신한은행" />,
      url: "http://aq.gy/f/8zpGQ",
    },
    {
      title: "신랑측 父: 홍인선",
      icon: <AccountIcon src="account/shinhan.png" alt="신한은행" />,
      url: "http://aq.gy/f/8zpGQ",
    },
    {
      title: "신랑측 母: 김순영",
      icon: <AccountIcon src="account/shinhan.png" alt="신한은행" />,
      url: "http://aq.gy/f/8zpGQ",
    },
  ];

  const brideDictionary = [
    {
      title: "신부: 신소연",
      icon: <AccountIcon src="account/shinhan.png" alt="신한은행" />,
      url: "http://aq.gy/f/8zpGQ",
    },
    {
      title: "신부측 父",
      icon: <AccountIcon src="account/shinhan.png" alt="신한은행" />,
      url: "http://aq.gy/f/8zpGQ",
    },
    {
      title: "신부측 母",
      icon: <AccountIcon src="account/shinhan.png" alt="신한은행" />,
      url: "http://aq.gy/f/8zpGQ",
    },
  ];
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
            <Link
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 flex-row shadow-sm border border-gray-200 p-2 rounded-lg"
            >
              <div className="rounded-lg bg-gray-100 ">{account.icon}</div>
              <p className="text-sm sm:text-base text-gray-500">
                {account.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-b border-gray-300 my-1 w-full" />
      <ul className="flex sm:flex-row flex-col gap-2 m-2 w-full">
        {brideDictionary.map((account, index) => (
          <li className="sm:w-1/3" key={index}>
            <Link
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 flex-row shadow-sm border border-gray-200 p-2 rounded-lg"
            >
              <div className="rounded-lg bg-gray-100 ">{account.icon}</div>
              <p className="text-sm sm:text-base text-gray-500">
                {account.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </DrawerComponent>
  );
}
