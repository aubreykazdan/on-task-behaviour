import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLink from "../navlink";
import Link from "next/link";

const headerLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({}) {
  return (
    <Popover className="relative bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex cursor-pointer overflow-hidden rounded-full">
          <span className="sr-only">On Task Behaviour</span>
          <Link href="/" ariaLabel="Go to home page" legacyBehavior>
            <a aria-label="Go to home page">
              <img
                className="h-20 w-auto hover:scale-150 transition-animate"
                src="/assets/pug-square.jpeg"
                alt="heart"
              />
            </a>
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="mobile-toggle">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            {headerLinks.map((item) => (
              <NavLink
                key={item.name}
                internal={item.href}
                ariaLabel={`Link to ${item.name} page`}
              >
                {item.name}
              </NavLink>
            ))}
          </Popover.Group>
          <Link href="/donate" legacyBehavior>
            <a aria-label="Go to Donate page" className="btn btn-accent">
              Donate
            </a>
          </Link>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className=" rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="cursor-pointer">
                  <Link href="/" legacyBehavior>
                    <a aria-label="Go to home page">
                      <img
                        className="h-16 w-auto rounded-full"
                        src="/assets/pug-square.jpeg"
                        alt="heart"
                      />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="mobile-toggle">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6 ml-2">
                  {headerLinks.map((item) => (
                    <NavLink
                      key={item.name}
                      internal={item.href}
                      ariaLabel={`Link to ${item.name} page`}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <NavLink internal="/donate">Donate</NavLink>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
