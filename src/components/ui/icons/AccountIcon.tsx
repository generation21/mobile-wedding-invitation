import { GOOGLEFRONTCLOUND } from "@/libs/configs";
import Image from "next/image";

type Props = {
  type: string;
};

export default function AccountIcon({ type }: Props) {
  const iconDict = {
    kb: "kb.webp",
    nhfn: "nhfn.webp",
    shinhan: "shinhan.png",
    hana: "hana.jpeg",
  };
  return (
    <Image
      src={`${GOOGLEFRONTCLOUND}/account/${
        iconDict[type as keyof typeof iconDict]
      }`}
      alt={type}
      width={100}
      height={100}
      className="rounded-full sm:w-11 sm:h-11 w-7 h-7  border shadow-sm border-gray-200"
    />
  );
}
