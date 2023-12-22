import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { TService } from "./Services";

type Props = {
  service: TService;
};

export const ServicesCard = ({ service }: Props) => {
  return (
    <div className="flex h-full flex-col items-center gap-4 overflow-hidden">
      <div className="aspect-h-2 aspect-w-3 h-auto w-full overflow-hidden shadow-lg sm:aspect-h-3 sm:aspect-w-4 xl:aspect-h-9 xl:aspect-w-14 ">
        <Image
          src={service.image}
          alt={service.title}
          className="object-fill object-center"
        />
      </div>
      <div className="flex h-full flex-col items-center justify-between gap-6 p-2 xl:px-8">
        <div className="space-y-4">
          <h3 className="card-title">{service.title}</h3>
          <h4 className="self-start text-left font-semibold uppercase italic">
            {service.subTitle && service.subTitle.length > 0
              ? service.subTitle
              : ""}
          </h4>
          <p className="card-description text-left">{service.content}</p>
        </div>
        <div className="w-full">
          <button
            type="button"
            className="cta-primary w-full rounded-none hover:text-black"
          >
            <Link href="/about">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
