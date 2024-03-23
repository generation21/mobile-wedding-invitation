import { GOOGLEFRONTCLOUND } from "@/libs/configs";
import Image from "next/image";
import React from "react";

type AvatarSize = "large" | "medium" | "small";

type Props = {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
};
export default function Avatar({
  image,
  size = "large",
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      <Image
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(
          size
        )}`}
        alt="image"
        width={68}
        height={68}
        src={`${GOOGLEFRONTCLOUND}/${image}` ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  const baseStyle = "rounded-full";
  const highlightStyle = highlight
    ? " relative bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 flex justify-center items-center overflow-hidden"
    : "";

  const sizeStyle = getContainerSize(size);

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: AvatarSize): string {
  switch (size) {
    case "large":
      return "w-[68px] h-[68px]";
    case "medium":
      return "w-11 h-11";
    case "small":
      return "w-9 h-9";
  }
}

function getImageSizeStyle(size: AvatarSize): string {
  switch (size) {
    case "large":
      return "w-16 h-16 p-[0.2rem]";
    case "medium":
      return "w-[42px] h-[42px] p-[0.1rem]";
    case "small":
      return "w-[34px] h-[34px] p-[0.1rem]";
  }
}
