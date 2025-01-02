export interface ServiceSubCat {
  title: string;
  content: string;
  price: number;
}
interface PackageDetails {
  price: string;
  briefDescription: string;
  includes: string[];
  additionalPriceDetails: string;
}
interface Service {
  category: string;
  details: PackageDetails;
  pic: string;
}
type Services = Service[];

export const services: Services = [
  {
    category: "Bridal Makeup",
    details: {
      price: "450 GBP",
      briefDescription:
        "Premium Products used will be MAC, HUDA Beauty, Morphy, Nars",
      includes: ["Makeup", "Hair styling", "Draping", "Jewelry setting"],
      additionalPriceDetails:
        "Travel expenses (train/cab/air) are extra. Client covers overnight stay costs for Kopal and team, if required.",
    },
    pic: `${process.env.S3_CDN_ENDPOINT}/bridal-pics/bridal-1.jpeg`,
  },
  {
    category: "Engagement Makeup",
    details: {
      price: "450 GBP",
      briefDescription:
        "Premium Products used will be MAC, HUDA Beauty, Morphy, Nars",
      includes: ["Makeup", "Hair styling", "Jewelry setting"],
      additionalPriceDetails:
        "Travel expenses (train/cab/air) are extra. Client covers overnight stay costs for Kopal and team, if required.",
    },
    pic: `${process.env.S3_CDN_ENDPOINT}/engagement-pics/eng-4.jpeg`,
  },

  {
    category: "Party Makeup",
    details: {
      price: "150 GBP",
      briefDescription:
        "Premium Products used will be MAC, HUDA Beauty, Morphy, Nars. ",
      includes: ["Makeup", "Basic buns/ braids / curls hair styling"],
      additionalPriceDetails:
        "Travel expenses (train/cab/air) are extra. Client covers overnight stay costs for Kopal and team, if required. We do not accept single party makeup bookings for destination events; these must be combined with bridal or engagement makeup services.",
    },
    pic: `${process.env.S3_CDN_ENDPOINT}/engagement-pics/eng-20.jpeg`,
  },
];
