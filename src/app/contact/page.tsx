import React from "react";
import ContactForm from "./components/contact-form/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us - Makeup by Kopal | Get in Touch for Your Makeup Appointment",
  description:
    "Contact Makeup by Kopal to book your bridal or party makeup appointment. Get in touch with us via phone, email, or our online form.",
  keywords:
    "Bridal Makeup, Party Makeup, Wedding Makeup, Makeup by Kopal, Makeup Artist, London Makeup Artist, Bridal Hair, Professional Makeup Services",
};

const Contact = () => {
  return (
    <div>
      <div className="prose w-full max-w-xs mx-auto my-7">
        <h3>Send us your query...</h3>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
