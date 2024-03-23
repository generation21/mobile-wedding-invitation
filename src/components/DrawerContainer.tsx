"use client";
import * as React from "react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DrawerComponent from "./DrawerComponent";

type Props = {
  clickedIcon: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
};
export function DrawerContainer({
  clickedIcon,
  icon,
  title,
  description,
  children,
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <DrawerComponent
      title={title}
      description={description}
      icon={icon}
      clickedIcon={clickedIcon}
    >
      {children}
    </DrawerComponent>
    // <Drawer open={open} onOpenChange={setOpen} preventScrollRestoration={true}>
    //   <DrawerTrigger asChild>
    //     <button className="w-full text-center">
    //       {open ? clickedIcon : icon}
    //     </button>
    //   </DrawerTrigger>
    //   <DrawerContent className="flex flex-col items-center">
    //     <DrawerHeader>
    //       <DrawerTitle>{title}</DrawerTitle>
    //       <DrawerDescription>{description}</DrawerDescription>
    //     </DrawerHeader>
    //     {children}
    //   </DrawerContent>
    // </Drawer>
  );
}
