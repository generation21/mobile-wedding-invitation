"use client";
import Link from "next/link";
import { IoShareSocialOutline } from "react-icons/io5";
import MessageFillIcon from "./ui/icons/MessageFillIcon";
import MessageIcon from "./ui/icons/MessageIcon";
import ContactDrawer from "./ContactDrawer";
import ShareDrawer from "./ShareDrawer";

export default function Navbar() {
  const menues = [
    {
      children: (
        <ContactDrawer
          icon={<MessageIcon />}
          clickedIcon={<MessageFillIcon />}
        />
      ),
      key: "contact",
    },
    {
      key: "share",
      children: (
        <ShareDrawer
          icon={<IoShareSocialOutline className="w-7 h-7" />}
          clickedIcon={<IoShareSocialOutline className="w-7 h-7 text-black" />}
        />
      ),
    },
  ];

  return (
    <div className="flex justify-between items-center px-6">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold">SSInstagram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4 justify-center">
          {menues.map((menu) => (
            <li key={menu.key}>{menu.children}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
