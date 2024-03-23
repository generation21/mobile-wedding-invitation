import { GOOGLEFRONTCLOUND } from "@/libs/configs";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 캐러셀의 기본 스타일
import CarouselContainer from "./ui/CarouselContainer";

type Props = {
  title: string;
  images: string[];
};
export default function StoryBoardDetail({ title, images }: Props) {
  return (
    <CarouselContainer
      images={images}
      alt={title}
      divStyle="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[640px] xl:h-[640px]"
      imageStyle="object-cover"
    />
  );
}
