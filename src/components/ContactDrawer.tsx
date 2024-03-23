import * as React from "react";

import { CONFIG } from "@/libs/configs";
import PhoneIcon from "./ui/icons/PhoneIcon";
import EnvolopeIcon from "./ui/icons/EnvelopeIcon";
import { DrawerContainer } from "./DrawerContainer";
import DrawerComponent from "./DrawerComponent";

type Props = {
  clickedIcon: React.ReactNode;
  icon: React.ReactNode;
};
export default function ContactDrawer({ clickedIcon, icon }: Props) {
  const contactDictionary = [
    {
      tel: CONFIG.contact.groomTel,
      telTitle: "신랑에게 전화하기",
      messageTitle: "신랑에게 문자하기",
    },
    {
      tel: CONFIG.contact.brideTel,
      telTitle: "신부에게 전화하기",
      messageTitle: "신부에게 문자하기",
    },
  ];
  return (
    <DrawerComponent
      title={CONFIG.contact.title}
      description={CONFIG.contact.description}
      icon={icon}
      clickedIcon={clickedIcon}
    >
      <div className="flex justify-center gap-2">
        {contactDictionary.map((contact, index) => (
          <ul className="flex flex-col gap-2 m-2 " key={index}>
            <li>
              <a
                href={`tel:+${contact.tel}`}
                className="flex items-center gap-3 flex-row shadow-sm border border-gray-200 p-2 rounded-lg"
              >
                <PhoneIcon />

                <p className="text-sm text-gray-500">{contact.telTitle}</p>
              </a>
            </li>
            <li>
              <a
                href={`sms:+${contact.tel}`}
                className="flex items-center gap-3 flex-row shadow-sm border border-gray-200 p-2 rounded-lg"
              >
                <EnvolopeIcon />
                <p className="text-sm text-gray-500">{contact.messageTitle}</p>
              </a>
            </li>
          </ul>
        ))}
      </div>
    </DrawerComponent>
  );
}
