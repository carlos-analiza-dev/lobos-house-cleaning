"use client";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavBar = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+50487709116";

    const message =
      "Hola, estoy interesado en sus servicios de limpieza. ¿Podrían proporcionarme más información?";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-1">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/logo-cleaning.png"
              width={32}
              height={32}
              className="h-8 md:h-16 w-auto"
              alt="Cleaning Web Logo"
            />
            <span className="self-center text-base md:text-lg lg:text-2xl font-bold whitespace-nowrap dark:text-white text-gray-800">
              Lobo&#39;s House<span className="text-blue-600">Cleaning</span>
            </span>
          </Link>

          <div className="flex items-center md:order-2 space-x-4 rtl:space-x-reverse md:hidden">
            <button
              onClick={openWhatsApp}
              type="button"
              className="flex items-center cursor-pointer gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 md:text-sm md:px-4 md:py-2.5 transition-all duration-200 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">Contact us</span>
            </button>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center md:order-2 space-x-4 rtl:space-x-reverse">
          <button
            type="button"
            className="flex items-center cursor-pointer gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-200 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <Phone size={16} />
            Contact us
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              { name: "About us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Pricing", href: "/prices" },
              { name: "Testimonials", href: "/testimonials" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-3 rounded-md md:p-0 ${
                    item.href === path
                      ? "text-blue-600 dark:text-blue-500 font-semibold"
                      : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                  } transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
