import React from "react";
import { services } from "./constants";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services - Makeup by Kopal | Bridal, Party, and Special Occasion Makeup",
  description:
    "Explore our luxury makeup services, including bridal makeup, party looks, and more. We use only the best products to give you a flawless look for any occasion.",
  keywords:
    "Bridal Makeup, Party Makeup, Wedding Makeup, Makeup by Kopal, Makeup Artist, London Makeup Artist, Bridal Hair, Professional Makeup Services",
};

const Services = () => {
  return (
    <>
      <div className="flex-grow overflow-auto">
        <div className="prose">
          <h2 className="text-lg">What MBK offers..</h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex sm:flex-row sm:flex-wrap sm:gap-4 sm:justify-center">
          {services.map((service, index) => (
            <div
              className="card bg-white w-96 shadow-xl rounded-lg overflow-hidden"
              key={`service-${index + 1}`}
            >
              <figure>
                <Image
                  width={300}
                  height={300}
                  src={service.pic}
                  alt="mbk-service"
                />
              </figure>
              <div className="card-body p-6 space-y-4">
                <h2 className="card-title text-2xl font-semibold">
                  {service.category}
                </h2>
                <p className="text-sm text-gray-600">
                  {service.details.briefDescription}
                </p>
                <ul className="text-sm text-gray-800">
                  Includes:
                  {service.details.includes.map((item, idx) => (
                    <li key={idx} className="list-disc ml-4">
                      {item}
                    </li>
                  ))}
                </ul>
                {/* Price with Emphasis */}
                <div className="text-sm font-semibold text-indigo-600 mb-2">
                  Priced @ {service.details.price}
                </div>
                <p className="text-sm text-gray-600 italic">
                  {service.details.additionalPriceDetails}
                </p>
                <div className="divider"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
