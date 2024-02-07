import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";
import { FaWhatsapp } from "react-icons/fa";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Presentación", href: "#home-section", current: false },
  { name: "Ofrecemos", href: "#about-section", current: false },
  { name: "Nosotros", href: "#cook-section", current: false },
  { name: "Fabricantes", href: "#gallery-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-purple"
                    : "text-black hover:bg-gray-700 hover:text-purple",
                  "block  py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            {/* <button className="flex justify-center text-base w-full font-medium rounded-full bg-bgpink text-pink py-3 px-4 lg:px-8 navbutton hover:text-white">
              Sign in
            </button>
            <button className="flex justify-center text-base w-full font-medium rounded-full bg-transparent border border-bgpink text-pink py-3 px-4 lg:px-8 navbutton hover:text-white hover:bg-pink">
              Contact us
            </button> */}
            <Link
              href={"https://api.whatsapp.com/send?phone=51975031928"}
              target="_blank"
            >
              <button
                type="button"
                className="flex justify-end text-xl font-medium bg-bgpink text-green py-4 px-4 lg:px-8 navbutton rounded-full hover:text-white hover:bg-green"
              >
                <FaWhatsapp className="m-1"></FaWhatsapp>
                Contáctanos
              </button>
            </Link>
            {/* <Contactusform /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
