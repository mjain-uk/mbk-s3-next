import Link from "next/link";
import React from "react";

interface NavLinksProp {
  onClick: () => void;
}
const NavLinks = ({ onClick }: NavLinksProp) => {
  return (
    <>
      <li>
        <Link href={"/about"} onClick={onClick}>
          About
        </Link>
      </li>
      <li>
        <Link href={"/services"} onClick={onClick}>
          Services
        </Link>
      </li>
      <li>
        <Link href={"/gallery"} onClick={onClick}>
          Gallery
        </Link>
      </li>
      <li>
        <Link href={"/faq"} onClick={onClick}>
          FAQ&apos;s
        </Link>
      </li>
      <li>
        <Link href={"/contact"} onClick={onClick}>
          Contact
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
