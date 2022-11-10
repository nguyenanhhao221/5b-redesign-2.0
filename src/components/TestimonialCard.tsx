import Image from "next/image";
import React from "react";
import type { TTestimonial } from "./Testimonial";

type Props = {
  testimonial: TTestimonial;
};
export const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="flex flex-col items-center border border-5b-yellow py-4 shadow-xl">
      <div className="h-auto w-32 overflow-hidden rounded-full">
        <Image
          className="object-fill object-center"
          src={testimonial.logo}
          alt={testimonial.companyName}
        />
      </div>
      <div className="space-y-2 text-center">
        <p className="card-title text-xl">{testimonial.companyName}</p>
        <p className="block">{testimonial.person.name}</p>
        <p className={`${!testimonial.person.position && `hidden`} block`}>
          {"- "}
          {testimonial.person.position}
        </p>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          className="inline-block w-6 pr-2 pb-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          ></path>
        </svg>
        <blockquote className="inline italic">{testimonial.content}</blockquote>
      </div>
    </div>
  );
};
