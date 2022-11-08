import Image from "next/image";
import React from "react";
import HeroImage from "../../public/hero/2.webp";
import { CtaButton } from "./CtaButton";
export const Hero = () => {
  return (
    <>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-neutral-900 bg-opacity-70 px-4 text-center lg:static lg:w-[60%] lg:items-start lg:gap-8 lg:bg-transparent lg:px-10 lg:text-left">
        <h1 className="text-lg font-extrabold uppercase tracking-widest text-5b-yellow sm:text-2xl md:text-4xl ">
          Modern Warehouse Consultant
        </h1>
        <p className="text-sm text-white sm:text-base md:text-lg lg:text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
          recusandae placeat odit officiis in voluptatibus laborum culpa maxime
          exercitationem ipsam libero maiores corrupti
        </p>
        <div className="flex items-center justify-center gap-4">
          <CtaButton content={"Get In Touch"} primary />
          <CtaButton content={"Our Projects"} primary={false} />
        </div>
      </div>
      <Image
        className="h-auto w-full overflow-hidden object-fill object-right"
        src={HeroImage}
        sizes="100vw"
        alt="warehouse forklift illustration"
        placeholder="blur"
      />
    </>
  );
};
