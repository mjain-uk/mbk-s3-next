import Link from "next/link";
import React from "react";
import ContactCard from "./components/contact-card/ContactCard";
import SocialMediaLinks from "./components/social-media-links/SocialMediaLinks";

const Footer = () => {
  return (
    <div className="flex flex-column md:h-[220px] py-6 mb-8 md:flex md:flex-row flex-wrap md:flex-nowrap justify-center gap-7 items-start px-4 md:px-8">
      <div className="w-full">
        <ContactCard />
      </div>

      <div className="w-full">
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default Footer;
