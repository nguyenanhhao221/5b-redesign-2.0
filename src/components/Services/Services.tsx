import type { StaticImageData } from "next/image";
import React from "react";
import Service1 from "/public/services/service1.webp";
import Service2 from "/public/services/Forklift-trucks-ranges.jpg";
import Service3 from "/public/services/warehouse-equipment.jpg";
import Service4 from "/public/services/racking-system.jpg";
import Service5 from "/public/services/topmain03l.jpg";
import Service6 from "/public/services/Service-technician-working.png";

import { ServicesCard } from "@/components/Services/ServicesCard";

export type TService = {
  id: string;
  image: StaticImageData;
  title: string;
  subTitle?: string;
  content: string;
};
//TODO: replace with real data
const serviceData: TService[] = [
  {
    id: "claawv0m8001l3b6qklyz0vbz",
    image: Service1,
    title: "Warehouse Consultant",
    content:
      "At 5B, we redefine warehouses with innovative solutions. From strategic layout planning to cutting-edge technology integration, we're your trusted partner in enhancing productivity and maximizing performance.",
  },
  {
    id: "claawv0m8000e3b6q952w4501",
    image: Service2,
    title: "Forklift trucks",
    content:
      "Forklift Excellence at Your Fingertips. Explore our range of top-notch forklift trucks at 5B. From electric to diesel, our robust fleet is engineered for efficiency and reliability. Click below to elevate your material handling capabilities.",
  },
  {
    id: "claawvewqm8wqw3b6q952w4501",
    image: Service3,
    title: "Warehouse equipment",
    content:
      "Optimize Your Space with Premium Warehouse Equipment Discover our comprehensive range of cutting-edge warehouse equipment at 5B. From shelving solutions to automation tools, we offer the tools you need to maximize efficiency and streamline operations.",
  },
  {
    id: "claawvewqm8wqw3b6q2w238501",
    image: Service4,
    title: "Racking system",
    content:
      "Elevate Storage Efficiency with Our Racking Systems. Unlock the potential of your warehouse space with our advanced racking systems at 5B. From versatile pallet racking to space-saving solutions, our systems are designed for optimal organization and accessibility.",
  },
  {
    id: "claawvemhm8wqw3b6q2w235251",
    image: Service5,
    title: "Hydraulic Components",
    content:
      "Powering Performance: Explore Our Hydraulic Components Experience precision and reliability with our range of high-quality hydraulic components at 5B. From pumps to cylinders, our hydraulic solutions are engineered for seamless performance",
  },
  {
    id: "claawvemhm8wqw3b6q2w235w51",
    image: Service6,
    title: "After-Sales Service",
    content:
      "At 5B, our commitment extends beyond products. Explore our comprehensive after-sales service for ongoing support and maintenance. We're here to ensure your equipment performs at its best. Click below for reliable post-purchase care.",
  },
];
export const Services = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="section-title">Our Services</h2>
        <q className="text-center italic md:text-lg">Be There For You</q>
      </div>
      <div className="2xl:py-12">
        <ul className="flex w-screen snap-x snap-mandatory gap-4 overflow-x-scroll overscroll-x-contain scroll-smooth p-2 sm:grid sm:w-full sm:grid-cols-2 md:grid-cols-2 lg:mx-auto lg:max-w-[95%] lg:grid-cols-3 xl:max-w-[90%] xl:gap-8 xl:overflow-hidden xl:px-4 2xl:max-w-[70%] 2xl:gap-12">
          {serviceData.map((service) => (
            <li
              key={service.id}
              className="group min-w-[80vw] snap-center snap-always overflow-hidden bg-neutral-50 pb-2 shadow-xl transition-transform last:mr-10 sm:min-w-full sm:place-content-center xl:motion-safe:hover:scale-105"
            >
              <ServicesCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
