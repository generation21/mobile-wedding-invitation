import { GOOGLEFRONTCLOUND } from "@/libs/configs";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function AccountIcon({ src, alt }: Props) {
  return (
    <Image
      src={`${GOOGLEFRONTCLOUND}/${src}`}
      alt={alt}
      width={100}
      height={100}
      className="rounded-full sm:w-11 sm:h-11 w-7 h-7  border shadow-sm border-gray-200"
    />
  );
}
