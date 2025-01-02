import React from "react";
import ImageCard from "./components/ImageCard";
import { engagementPics, bridalPics, hairPics } from "./constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Makeup by Kopal | Bridal and Party Makeup Portfolio",
  description:
    "View our stunning bridal and party makeup portfolio at Makeup by Kopal. Check out the latest looks created for brides and special occasions.",
  keywords:
    "Bridal Makeup, Party Makeup, Wedding Makeup, Makeup by Kopal, Makeup Artist, London Makeup Artist, Bridal Hair, Professional Makeup Services",
};

const Gallery = () => {
  return (
    <div>
      <div className="prose">
        <h2 className="text-center w-screen mb-4">Our Work</h2>
      </div>

      <section className="py-2 px-2 md:py-4 lg:py-6 lg:mb-5">
        <div className="prose">
          <h4 className="text-center w-screen mb-4">Bridal Makeup</h4>
        </div>

        <ImageCard images={bridalPics} />
      </section>

      <section className="py-2 px-2 md:py-4 lg:py-6 lg:mb-5">
        <div className="prose">
          <h4 className="text-center w-screen mb-4">Engagement Makeup</h4>
        </div>

        <ImageCard images={engagementPics} />
      </section>

      <section className="py-2 px-2 md:py-4 lg:py-6 lg:mb-5">
        <div className="prose">
          <h4 className="text-center w-screen mb-4">Hair Styles</h4>
        </div>

        <ImageCard images={hairPics} />
      </section>
    </div>
  );
};

export default Gallery;
