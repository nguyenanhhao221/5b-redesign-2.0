import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "/public/hero/2.webp";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 bg-opacity-70 px-4 text-center lg:static lg:w-[60%] lg:items-start lg:gap-8 lg:bg-transparent lg:px-10 lg:text-left">
        <h1 className="text-3xl font-extrabold uppercase tracking-widest text-5b-yellow sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Modern Warehouse Consultant
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
          recusandae placeat odit officiis in voluptatibus laborum culpa maxime
          exercitationem ipsam libero maiores corrupti
        </p>
        <div className="flex items-center justify-center gap-4">
          <button type="button" className="cta-primary relative flex">
            <span>get in touch</span>
            <span className="absolute -top-1 right-0 inline-flex h-3 w-3 rounded-full bg-sky-400">
              <span className="relative inline-flex h-full w-full animate-ping rounded-full bg-sky-400 bg-opacity-75"></span>
            </span>
          </button>
          <Link href="/#services" className="cta-secondary text-black">
            our services
          </Link>
        </div>
      </div>
      <Image
        className="h-auto w-full overflow-hidden object-fill object-right"
        src={HeroImage}
        sizes="100vw"
        alt="warehouse forklift illustration"
        placeholder="blur"
        priority
      />
    </>
  );
};
