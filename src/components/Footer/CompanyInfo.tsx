import React from "react";
import { SocialMedia } from "@/components/Footer/SocialMedia";

export const CompanyInfo = () => {
  return (
    <div className="mx-auto space-y-2 px-4 sm:grid sm:grid-cols-3 sm:place-items-center xl:max-w-[90%] xl:gap-8 2xl:max-w-[70%]">
      <div className="sm:self-start">
        <h3 className="card-title text-left">5B JOINT STOCK COMPANY</h3>
        <span className="block text-sm sm:text-base">Tax code: 0316840238</span>
      </div>
      <div className="hidden sm:col-start-3 sm:block sm:self-start sm:py-0">
        <SocialMedia />
      </div>
      <div className="flex flex-col space-y-2 text-sm sm:col-start-2 sm:row-start-1 sm:text-base">
        <a href="mailto:sales@5b.com.vn" className="hover:underline">
          <span>Email: sales@5b.com.vn</span>
        </a>
        <a
          href="tel:+84862705559"
          title="Call 5B Hotline"
          className="hover:underline"
        >
          <span>Tel: 086 270 5559</span>
        </a>
        <a
          href="https://goo.gl/maps/aAKX7Jaf8HvWYs7a8"
          className="hover:underline"
          target="_blank"
          title="Go to Google Map"
          rel="noopener noreferrer"
        >
          <address className="not-italic group-hover:underline sm:text-left">
            Office: 24 Dong Hung Thuan 22, Dong Hung Thuan Ward, District 12, Ho
            Chi Minh City, Vietnam
          </address>
        </a>
        <a
          href="https://goo.gl/maps/KwRtfu5GQYRxyhaK8"
          target="_blank"
          className="hover:underline"
          title="Go to Google Map"
          rel="noopener noreferrer"
        >
          <address className="not-italic group-hover:underline sm:text-left">
            Warehouse: 390 National Route 1A, Binh Hung Hoa B, Binh Tan
            District, Ho Chi Minh City, Vietnam
          </address>
        </a>
      </div>
      <div className="sm:hidden">
        <SocialMedia />
      </div>
    </div>
  );
};
