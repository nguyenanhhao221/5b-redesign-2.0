import Image from "next/image";
import React from "react";

type TSubHero = {
  imgSrc: string;
  imgAlt: string;
};

export const SubHero = ({ imgSrc, imgAlt }: TSubHero) => {
  return <Image src={imgSrc} alt={imgAlt}></Image>;
};
