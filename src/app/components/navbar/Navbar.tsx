"use client";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "./nav-links/NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown when a link is clicked
  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">
          MBK
        </Link>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks onClick={closeDropdown} />
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost sm:hidden"
            onClick={toggleDropdown}
          >
            <MenuIcon />
          </div>
          <ul
            tabIndex={0}
            className={`menu dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <NavLinks onClick={closeDropdown} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
