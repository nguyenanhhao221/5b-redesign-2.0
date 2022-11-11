import React from "react";
import {
  CurrencyDollarIcon,
  RocketLaunchIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

export const Why5B = () => {
  const aboutContent: {
    title: string;
    content: string;
    Icon?: JSX.Element;
  }[] = [
    {
      title: "Professional Consultant",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sint deserunt facilis, illum aspernatur sed ea ab ducimus nostrum,",
      Icon: <PresentationChartLineIcon className="fill-5b-yellow" />,
    },
    {
      title: "Affordable Price",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sint deserunt facilis, illum aspernatur sed ea ab ducimus nostrum",
      Icon: <CurrencyDollarIcon className="fill-5b-yellow" />,
    },
    {
      title: "Fast Service",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sint deserunt facilis, illum aspernatur sed ea ab ducimus nostrum",
      Icon: <RocketLaunchIcon className="fill-5b-yellow" />,
    },
  ];
  return (
    <>
      <h2 className="section-title">Why 5B ?</h2>
      <div className="mx-auto flex flex-col items-center gap-4 p-2 md:place-content-center md:px-10 lg:grid lg:grid-cols-3 lg:place-content-center lg:gap-8 xl:max-w-[90%] xl:px-4 2xl:max-w-[70%]">
        {/* Should be card */}
        {aboutContent.map(({ title, content, Icon }) => (
          <div
            key={title}
            className="mx-auto flex w-[90%] flex-col items-center gap-2 bg-white py-8 shadow-lg lg:w-full  "
          >
            <h3 className="card-title">{title}</h3>
            <div className="h-6 w-6 sm:h-10 sm:w-10">{Icon}</div>
            <p className="px-1 text-center text-xs font-light text-black sm:text-base lg:px-3">
              {content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
