import Image from "next/image";
import React from "react";
import { Navbar } from "@/components/Navbar";
import LogoSVG from "/public/logo-5B-color.svg";
import { Hero } from "@/components/Hero";
import Link from "next/link";

export const Header = () => {
  return (
    <header
      id="homepage"
      className="flex h-[90vh] w-screen flex-col overflow-hidden bg-secondary py-4 sm:h-screen sm:items-center"
    >
      <div className="flex w-full items-center justify-between p-1 sm:w-[90%] md:w-[80%]">
        <Link href={"/"} className="logo">
          <Image
            src={LogoSVG}
            alt="5B Joint Stock Company"
            className="h-14 w-14 sm:h-20 sm:w-20 lg:h-32 lg:w-32"
          />
        </Link>
        <Navbar />
      </div>
      <div className="flex h-full w-full flex-col-reverse justify-center overflow-hidden py-1 lg:flex-row lg:rounded-lg xl:w-[90%]">
        <Hero />
      </div>
    </header>
  );
};
