import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navItems: { name: string; link: string }[] = [
    {
      name: "Home",
      link: "/#",
    },
    {
      name: "Why 5B",
      link: "/#why-5b",
    },
    {
      name: "services",
      link: "/#services",
    },
    {
      name: "testimonial",
      link: "/#testimonial",
    },
    {
      name: "contact",
      link: "/#contact",
    },
  ];
  //TODO Animation slide when open mobile menu
  //TODO Better navbar in mobile because of close button
  return (
    <>
      <nav className="z-10">
        {/* Menu for mobile */}
        <button
          type="button"
          title="Open / Close menu"
          className="hamburger-menu relative z-50 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Bars3Icon
            className={`h-8 w-8 md:hidden ${menuOpen ? `hidden` : `block`}`}
          />
          <XMarkIcon
            className={`h-10 w-10 md:hidden ${menuOpen ? `block` : `hidden`}`}
          />
        </button>

        <div
          className={`bottom-0 left-1/4 right-0 top-0 flex flex-col gap-4 border border-5b-yellow bg-white bg-opacity-30 p-1 text-lg font-semibold backdrop-blur-sm ${
            menuOpen ? `fixed` : `hidden`
          }`}
        >
          <button
            type="button"
            title="Open / Close menu"
            className="hamburger-menu self-end py-1"
            onClick={() => setMenuOpen(!menuOpen)}
          ></button>
          <ul
            key="mobile-navigation"
            className={`${menuOpen ? `flex flex-col gap-8` : `hidden`} `}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                className="block w-full border-b border-b-5b-yellow border-opacity-50 py-2 capitalize "
              >
                {
                  <Link href={item.link} className="px-4">
                    {item.name}
                  </Link>
                }
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* DesktopMenu */}
      <nav className="desktop-menu hidden text-lg md:block">
        <ul
          key="desktop-navigation"
          className={`${!menuOpen ? `flex gap-8` : `hidden`} `}
        >
          {navItems.map((item) => (
            <li
              className="box-border block w-full whitespace-nowrap py-2 capitalize hover:underline hover:decoration-5b-yellow hover:decoration-2 hover:underline-offset-8"
              key={item.link}
            >
              {
                <Link href={item.link} className="px-4">
                  {item.name}
                </Link>
              }
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
