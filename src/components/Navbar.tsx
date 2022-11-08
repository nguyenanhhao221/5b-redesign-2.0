import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navItems: { name: string; link: string }[] = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "about us",
      link: "/about",
    },
    {
      name: "products",
      link: "/products",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ];
  //TODO Animation slide when open mobile menu
  return (
    <>
      <nav className="mobile-menu md:hidden">
        {/* Menu for mobile */}
        <button
          type="button"
          title="Open / Close menu"
          className="hamburger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Bars3Icon
            className={`h-8 w-8 md:hidden ${menuOpen ? `hidden` : `block`}`}
          />
        </button>

        <div
          className={`right-0 top-0 bottom-0 left-1/4 flex flex-col gap-4 border border-5b-yellow bg-neutral-100 bg-opacity-50 p-1 text-lg font-semibold backdrop-blur-sm ${
            menuOpen ? `fixed` : `hidden`
          }`}
        >
          <button
            type="button"
            title="Open / Close menu"
            className="hamburger-menu self-end py-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <XMarkIcon
              className={`h-10 w-10 md:hidden ${menuOpen ? `block` : `hidden`}`}
            />
          </button>
          <ul className={`${menuOpen ? `flex flex-col gap-8` : `hidden`} `}>
            {navItems.map((item) => (
              <>
                <li
                  className="box-border block w-full border-b border-b-5b-yellow border-opacity-50 py-2 capitalize "
                  key={item.name}
                >
                  {
                    <Link href={item.link} className="px-4">
                      {item.name}
                    </Link>
                  }
                </li>
              </>
            ))}
          </ul>
        </div>
      </nav>
      {/* DesktopMenu */}
      <nav className="desktop-menu">
        <ul className={`${!menuOpen ? `flex gap-8` : `hidden`} `}>
          {navItems.map((item) => (
            <>
              <li
                className="box-border block w-full whitespace-nowrap py-2 capitalize hover:border-b hover:border-b-5b-yellow hover:border-opacity-50 "
                key={item.name}
              >
                {
                  <Link href={item.link} className="px-4">
                    {item.name}
                  </Link>
                }
              </li>
            </>
          ))}
        </ul>
      </nav>
    </>
  );
};
