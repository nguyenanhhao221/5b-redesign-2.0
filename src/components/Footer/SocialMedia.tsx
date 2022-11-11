import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
//TODO Replace with real data
export const SocialMedia = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 sm:justify-center">
      <ul className="social-medias flex items-center justify-center gap-2">
        <li className="cursor-pointer">
          <a
            target="_blank"
            title="Go to Facebook"
            href="https://www.facebook.com/5BJSC"
            rel="noopener noreferrer"
          >
            <FaFacebook className="h-8 w-8 fill-[#1877f2]" />
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href={"linkedin.com/company/5b-joint-stock-company"}
            target="_blank"
            title="Go to LinkedIn"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-8 w-8  fill-[#0077b5]" />
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href={"https://www.youtube.com/channel/UCaOaYZV8YjBWxaORxlUdKew"}
            title="Go to Youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImYoutube2 className="h-8 w-8 fill-[#ff0000]" />
          </a>
        </li>
      </ul>
    </div>
  );
};
