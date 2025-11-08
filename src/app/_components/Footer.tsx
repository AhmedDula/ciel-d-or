import { Copyright } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="h-screen flex flex-col justify-center sm:justify-end items-center bg-[#292622] text-[#d49653]">
      <h1 className="text-[17vw]  sm:text-[17vw] font-cinzel font-semibold">
        CIEL D&apos;OR
      </h1>
      <div className="h-10 w-full sm:px-7 justify-evenly sm:justify-between flex text-amber-100">
    <h2><Copyright className="inline" size={18}/> 2025 ciel d&apos;or</h2>
    <h2  className="hidden sm:block">All Rights Reseved</h2>
    <h2>Made By Ahmed Adel</h2>
      </div>
    </div>
  );
}

export default Footer;
