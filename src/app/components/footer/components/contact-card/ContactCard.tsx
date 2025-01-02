import Link from "next/link";
import React from "react";

const ContactCard = () => {
  return (
    <div className="bg-gray-100 text-gray-900 px-3 py-2 md:py-8 h-44 md:h-52 flex flex-col justify-center items-start ">
      <div className="flex flex-col gap-2 w-full">
        <strong className="text-center md:text-left">Makeup By Kopal</strong>
        <p className="text-center md:text-left">
          36 Jones Point House Cardiff UK. CF110JF
        </p>
        <a href="tel:07721506874" className="text-center md:text-left">
          07721506874
        </a>
      </div>
      <div className="text-center md:text-left text-gray-500 mt-1 md:mt-6 w-full">
        &copy; {new Date().getFullYear()} Makeup by Kopal. All rights reserved.
      </div>
    </div>
  );
};

export default ContactCard;
