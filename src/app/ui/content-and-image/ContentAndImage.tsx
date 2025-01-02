import Image from "next/image";
import React from "react";
import ImageWrap from "./component/ImageWrap";

export interface ContentAndImage {
  imgSource: string;
  imgAltText: string;
  heading: string;
  content: string;
  imgDirection: "left" | "right";
}
const ContentAndImage = ({
  heading,
  content,
  imgDirection = "left",
  imgSource,
  imgAltText,
}: ContentAndImage) => {
  return (
    <div className="md:mx-auto flex flex-col md:grid md:grid-cols-2 w-full md:w-screen gap-2 md:gap-4 md:py-7">
      <div>
        <div className="card-body">
          <h2 className="card-title ">{heading}</h2>
          <p className="leading-6">{content}</p>
        </div>
      </div>
      <ImageWrap imgSource={imgSource} imgAltText={imgAltText} />
    </div>
  );
};

export default ContentAndImage;
