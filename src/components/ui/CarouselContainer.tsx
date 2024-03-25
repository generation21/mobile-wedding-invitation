import { GOOGLEFRONTCLOUND } from "@/libs/configs";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  images: string[];
  alt: string;
  showArrows?: boolean;
  autoPlay?: boolean;
  showThumbs?: boolean;
  showStatus?: boolean;
  showIndicators?: boolean;
  divStyle?: string;
  imageStyle?: string;
};

export default function CarouselContainer({
  images,
  alt,
  showArrows = true,
  autoPlay = false,
  showThumbs = false,
  showStatus = false,
  showIndicators = true,
  divStyle = "w-full h-full",
  imageStyle = "",
}: Props) {
  return (
    <Carousel
      showArrows={showArrows}
      autoPlay={autoPlay} // 자동 재생 여부
      showThumbs={showThumbs} // 썸네일 표시 여부
      showStatus={showStatus} // 상태 표시줄 표시 여부
      showIndicators={showIndicators}
      useKeyboardArrows // 키보드 화살표로 제어 가능 여부
      dynamicHeight // 동적 높이 조정 여부
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={50}
    >
      {images.map((image, index) => (
        <div key={index} className={divStyle}>
          <Image
            className={imageStyle}
            src={`${GOOGLEFRONTCLOUND}/${image}`}
            alt={alt}
            fill
          />
        </div>
      ))}
    </Carousel>
  );
}
