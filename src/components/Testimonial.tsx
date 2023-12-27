import type { StaticImageData } from "next/image";
import React from "react";
import GalupLogo from "/public/testimonial/Galup.png";
import TGILogo from "/public/testimonial/TGI.png";
import TinDatLogo from "/public/testimonial/TinDat.png";
import { TestimonialCard } from "@/components/TestimonialCard";

export type TTestimonial = {
  companyName: string;
  person: {
    name: string;
    position?: string;
  };
  content: string;
  logo: StaticImageData;
};
const testimonials: TTestimonial[] = [
  {
    companyName: "Galup",
    person: {
      name: "Mr. Some Customer",
      position: "CEO",
    },
    content:
      "Working with 5B was a game-changer for our warehouse. Their expertise and dedication to excellence transformed our operations, and their forklift trucks are a testament to quality and performance.",
    logo: GalupLogo,
  },
  {
    companyName: "Tin Dat JSC",
    person: {
      name: "Mr. Some Customer",
      position: "CEO",
    },
    content:
      "Impressed with the professionalism and affordability at 5B. The racking system we implemented exceeded our expectations, optimizing our storage space and enhancing overall efficiency",
    logo: TinDatLogo,
  },
  {
    companyName: "TGI",
    person: {
      name: "Mr. Some Customer",
      position: "CEO",
    },
    content:
      "Choosing 5B for hydraulic components was a wise decision. Their products not only met our technical requirements but also came with exceptional after-sales service. Fast and reliable – truly a standout experience.",
    logo: TGILogo,
  },
];
export const Testimonial = () => {
  return (
    <div className="px-4">
      <h2 className="section-title">Testimonial</h2>
      <p className="text-center text-lg capitalize">
        What our customers are saying
      </p>
      <ul className="mx-auto flex flex-col gap-8 py-4 lg:grid lg:grid-cols-3 lg:gap-8 xl:max-w-[90%] 2xl:max-w-[70%]">
        {testimonials.map((eachTestimonial) => (
          <li className="" key={eachTestimonial.companyName}>
            <TestimonialCard testimonial={eachTestimonial} />
          </li>
        ))}
      </ul>
    </div>
  );
};
