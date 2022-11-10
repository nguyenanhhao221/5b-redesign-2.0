import type { StaticImageData } from "next/image";
import React from "react";
import Service1 from "../../../public/services/service1.webp";
import Service2 from "../../../public/services/Forklift-trucks-ranges.jpg";
import Service3 from "../../../public/services/warehouse-equipment.jpg";
import Service4 from "../../../public/services/racking-system.jpg";
import Service5 from "../../../public/services/topmain03l.jpg";
import Service6 from "../../../public/services/Service-technician-working.png";

import { ServicesCard } from "./ServicesCard";

export type TService = {
  id: string;
  image: StaticImageData;
  title: string;
  subTitle?: string;
  content: string;
};
//TODO replace with real data
const serviceMockData: TService[] = [
  {
    id: "claawv0m8000l3b6qklyz0vbz",
    image: Service1,
    title: "Warehouse Consultant",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi dolor, fuga et consectetur dolores? Rerum alias, totam quis sequi iure itaque distinctio, repellat dolorum dolor rem adipisci delectus? Sapiente.",
  },
  {
    id: "claawv0m8000e3b6q952w4501",
    image: Service2,
    title: "Forklift trucks",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi dolor, fuga et consectetur dolores? Rerum alias, totam quis sequi iure itaque distinctio, repellat dolorum dolor rem adipisci delectus? Sapiente.",
  },
  {
    id: "claawvewqm8wqw3b6q952w4501",
    image: Service3,
    title: "Warehouse equipment",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi dolor, fuga et consectetur dolores? Rerum alias, totam quis sequi iure itaque distinctio, repellat dolorum dolor rem adipisci delectus? Sapiente.",
  },
  {
    id: "claawvewqm8wqw3b6q2w238501",
    image: Service4,
    title: "Racking system",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi dolor, fuga et consectetur dolores? Rerum alias, totam quis sequi iure itaque distinctio, repellat dolorum dolor rem adipisci delectus? dwjkqhijuqwh qwdh uiqowhd iquwhdqjkw fhbqwjkfb qwufghqw uifgqw fbqwkjf bqwiufgqwiuf bqwkjq",
  },
  {
    id: "claawvemhm8wqw3b6q2w235251",
    image: Service5,
    title: "Hydraulic Components",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi dolor, fuga et consectetur dolores? Rerum alias, totam quis sequi iure itaque distinctio, repellat dolorum dolor rem adipisci delectus? Sapiente.",
  },
  {
    id: "claawvemhm8wqw3b6q2w235251",
    image: Service6,
    title: "After-Sales Service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi dolor, fuga et consectetur dolores? Rerum alias, totam quis sequi iure itaque distinctio, repellat dolorum dolor rem adipisci delectus? Sapiente.",
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
          {serviceMockData.map((service) => (
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
