import React from "react";
import Stow from "../../public/partners/Stow.jpg";
import CarerLogo from "../../public/partners/Carer.png";
import Hormann from "../../public/partners/Hormann.png";
import Mima from "../../public/partners/Mima.png";
import Zowell from "../../public/partners/Zowell.png";
import CKD from "../../public/partners/CKD.png";
import type { StaticImageData } from "next/image";
import Image from "next/image";

const partnersArr: { img: StaticImageData; altText: string }[] = [
  { img: Stow, altText: "Stow Racking" },
  { img: CarerLogo, altText: "Carer Forklifts" },
  { img: Hormann, altText: "Hormann" },
  { img: Mima, altText: "Mima Forklifts" },
  { img: Zowell, altText: "Zowell Forklifts" },
  { img: CKD, altText: "CKD Hydraulics Components" },
];

export const Partners = () => {
  return (
    <>
      <h2 className="section-title"> Our Partners</h2>
      <ul className="mx-auto flex flex-row flex-wrap items-center justify-center gap-4 p-4 sm:flex-nowrap xl:max-w-[90%] xl:gap-8 2xl:max-w-[70%] 2xl:gap-12">
        {partnersArr.map((logo) => (
          <li
            className="h-auto w-[25vw] overflow-hidden rounded-full border border-5b-yellow"
            key={logo.altText}
          >
            <Image
              className="object-contain object-center"
              sizes="26vw"
              src={logo.img}
              alt={logo.altText}
              placeholder="blur"
            />
          </li>
        ))}
      </ul>
    </>
  );
};
