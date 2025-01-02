import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
const SocialMediaLinks = () => {
  return (
    <div className="bg-blue-100 h-40 md:h-52 px-3 py-8">
      <div className="prose ">
        <h3 className=" text-blue-800 text-center">
          Find more on Social Media
        </h3>
      </div>
      <section className="flex gap-12  justify-center items-center py-6">
        <Link href={"https://www.facebook.com/makeupbykopal/"} target="_blank">
          <FacebookIcon fontSize="large" color="info" />
        </Link>

        <Link href={"https://www.instagram.com/kopalfanpage/"} target="_blank">
          <InstagramIcon fontSize="large" color="info" />
        </Link>
      </section>
    </div>
  );
};

export default SocialMediaLinks;
