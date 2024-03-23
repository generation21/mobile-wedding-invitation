import { GOOGLEFRONTCLOUND } from "@/libs/configs";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function MapIcon({ src, alt }: Props) {
  return (
    <Image
      src={`${GOOGLEFRONTCLOUND}/${src}`}
      alt={alt}
      width={100}
      height={100}
      className="rounded-full w-14 h-14  wborder shadow-sm border-gray-200"
    />
  );
}
