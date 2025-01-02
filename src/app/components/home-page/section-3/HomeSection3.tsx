"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";

type ClickDirection = "forward" | "backward";

interface Props {
  extraSmall: string[];
  small: string[];
  medium: string[];
}
const HomeSection3 = ({ small, extraSmall, medium }: Props) => {
  const [slideNo, setSlideNo] = useState(1);

  const onButtonClick = useCallback(
    (direction: ClickDirection) => {
      if (direction === "forward") {
        if (slideNo === medium.length) {
          setSlideNo(1);
          return;
        }
        setSlideNo((prev) => prev + 1);
      } else {
        if (slideNo === 1) {
          setSlideNo(medium.length);
          return;
        }
        setSlideNo((prev) => prev - 1);
      }
    },
    [slideNo, medium.length]
  );
  return (
    <div className="w-full bg-gray-600">
      <div className="carousel h-[450px] md:h-[650px] lg:h-[850px] lg:w-[850px] flex justify-center  w-full md:w-[550px] mx-auto ">
        <div className="carousel-item relative w-full">
          <picture>
            {/* Use small image for screens up to 640px */}
            <source
              media="(max-width: 450px)"
              srcSet={`/home-page/carousel/${extraSmall[slideNo - 1]}`}
            />

            <source
              media="(min-width: 450px) and (max-width: 640px)"
              srcSet={`/home-page/carousel/${small[slideNo - 1]}`}
            />
            {/* Fallback to large image for larger screens */}
            <Image
              src={`/home-page/carousel/${medium[slideNo - 1]}`}
              key={`slide-${slideNo - 1}`}
              alt={`mbk-gallery-pic-${slideNo}`}
              layout="fill"
              objectFit="contain"
              priority
            />
          </picture>
          {/* <Image
            src={`/home-page/carousel/${slides[slideNo - 1]}`}
            key={`slide-${slideNo - 1}`}
            alt={`mbk-gallery-pic-${slideNo}`}
            layout="fill"
            objectFit="contain"
            priority
          /> */}

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              className="btn btn-circle"
              onClick={() => onButtonClick("backward")}
            >
              ❮
            </button>
            <button
              className="btn btn-circle"
              onClick={() => onButtonClick("forward")}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
