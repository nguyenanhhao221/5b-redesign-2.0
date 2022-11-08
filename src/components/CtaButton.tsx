import React from "react";
type Props = {
  content: string;
  primary: boolean;
};
export const CtaButton = ({ content, primary }: Props) => {
  return (
    <button
      title={content}
      className={`rounded-xl px-4 py-2 text-sm capitalize hover:transition-colors  sm:text-base lg:text-lg ${
        primary
          ? `bg-5b-yellow font-bold hover:bg-opacity-80 hover:text-white`
          : `border border-5b-yellow bg-transparent text-white hover:bg-5b-yellow hover:text-black lg:text-black lg:hover:text-white`
      }`}
      type="button"
    >
      {content}
    </button>
  );
};
