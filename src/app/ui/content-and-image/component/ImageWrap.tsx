import Image from "next/image";
import React from "react";

export interface ImageWrapProps {
  imgSource: string;
  imgAltText: string;
}
const ImageWrap = ({ imgAltText, imgSource }: ImageWrapProps) => {
  return (
    <div className="p-1 flex justify-center bg-black md:bg-white">
      <Image src={imgSource} alt={imgAltText} width={400} height={450} />
    </div>
  );
};

export default ImageWrap;
