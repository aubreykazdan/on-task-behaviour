import Link from "next/link";
import { SiTiktok, SiInstagram } from "react-icons/si";

const navigation = {
  main: [
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
    {
      name: "Donate",
      href: "/donate",
    },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ontaskbehaviour/",
      icon: (props) => <SiInstagram {...props} />,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@ontaskbehaviour",
      icon: (props) => <SiTiktok {...props} />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center mb-4 md:mb-6"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5">
              <div className="text-base text-gray-500 hover:text-gray-900">
                <Link href={item.href}>{item.name}</Link>
              </div>
            </div>
          ))}
        </nav>
        <div className="flex justify-center space-x-6 mb-4 md:mb-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-auto" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="m text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} {""} On Task, Inc. All rights
          reserved. - Designed by{" "}
          <a
            href="https://aubreykazdan.com/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-accent"
          >
            Aubrey Kazdan
          </a>
        </p>
      </div>
    </footer>
  );
}
