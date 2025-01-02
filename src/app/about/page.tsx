import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title:
    "About Us - Makeup by Kopal | Meet the Artist Behind Stunning Bridal Looks",
  description:
    "Learn more about Kopal Jain, the talented makeup artist behind Makeup by Kopal. With years of experience, Kopal specializes in bridal makeup, party looks, and more.",
  keywords:
    "Bridal Makeup, Party Makeup, Wedding Makeup, Makeup by Kopal, Makeup Artist, London Makeup Artist, Bridal Hair, Professional Makeup Services",
};

const About = () => {
  return (
    <div className="flex flex-col h-screen md:grid md:grid-cols-2 md:h-[75vh] overflow-auto">
      <div className=" card w-full md:h-[65vh] md:block md:py-7">
        <Image
          src="/about-page/about_kopal.jpeg"
          alt="Shoes"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-[30vh] md:h-full py-7 px-4">
        <h3 className="text-xl font-bold mb-4">About Makeup By Kopal</h3>
        <section className="pt-6 pb-8 md:py-2">
          <p className="mb-3">
            <strong>Welcome to Makeup By Kopal</strong> , the creative universe
            of Kopal Jain—an acclaimed makeup artist known for her exceptional
            artistry and eye for detail. With over 11 years of experience in the
            bridal makeup industry, I am passionate about bringing out the best
            version of every bride on her special day.
          </p>
          <p className="mb-3">
            I have had the privilege of working with brides from diverse
            backgrounds, mastering all types of makeup styles—from traditional
            to modern, subtle to glamorous. My approach is highly professional,
            and I pride myself on using only the finest, top-tier makeup brands
            to ensure long-lasting and flawless results. What truly sets me
            apart is my deep understanding of each client&apos;s unique skin
            type and preferences. I believe that no two brides are the same, and
            I take the time to carefully listen to their needs and vision.
            Client satisfaction is my utmost priority. I focus on every detail,
            ensuring that each bride feels confident and radiant. Whether
            it&apos;s creating a natural glow or a bold bridal statement, my
            goal is always to reflect the bride&apos;s personality and style.
          </p>
          <p className="mt-3">
            I look forward to being a part of your journey and making your dream
            bridal look come to life.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
