import { GOOGLEFRONTCLOUND } from "@/libs/configs";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ShareIcon({ src, alt }: Props) {
  return (
    <Image
      src={`${GOOGLEFRONTCLOUND}/sns/${src}`}
      alt={alt}
      width={150}
      height={150}
      className="rounded-full sm:w-12 sm:h-12 w-7 h-7  border shadow-sm border-gray-200"
    />
  );
}
