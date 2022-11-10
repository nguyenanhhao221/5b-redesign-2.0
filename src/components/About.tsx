import Link from "next/link";
import React from "react";

export const About = () => {
  const aboutContent: { title: string; content: string }[] = [
    {
      title: "our vision",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni illum doloremque beatae magnam vero laudantium, eveniet nisi accusamus et nobis quam aspernatur odio hic commodi laboriosam minima! Illum, esse adipisci?",
    },
  ];
  return (
    <>
      <h2 className="section-title">About Us</h2>
      <div className="flex flex-col items-center gap-4 py-2">
        {/* Should be card */}
        {aboutContent.map(({ title, content }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-2 rounded-md border border-5b-yellow bg-secondary  py-2 px-1 shadow-lg"
          >
            <h3 className="card-title">{title}</h3>
            <p className="text-center text-sm font-light text-black sm:text-left sm:text-base">
              {content}
            </p>
            <Link href="/about">
              <button type="button" className="cta-primary">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
