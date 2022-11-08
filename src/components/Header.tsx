import Image from "next/image";
import React from "react";
import { Navbar } from "./Navbar";
import LogoSVG from "../../public/logo-5B-color.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-slate-100 bg-opacity-25 p-1">
      <div className="logo">
        <Image
          src={LogoSVG}
          alt="5B Joint Stock Company"
          className="h-14 w-14 md:h-20 md:w-20"
        />
      </div>
      <Navbar />
    </header>
  );
};
