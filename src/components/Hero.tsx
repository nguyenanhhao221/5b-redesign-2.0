import Image from "next/image";
import React from "react";
import HeroImage from "../../public/hero/2.webp";
export const Hero = () => {
  return (
    <div>
      <Image src={HeroImage} alt="test" />
    </div>
  );
};
