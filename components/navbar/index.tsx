import NexalisLogo from "@/public/logo.png";

import { Mailbox } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./menu";
import { NavLinks } from "./nav-links";

export const Navbar = () => {
  return (
    <>
      <div className="bg-red-300 px-4 py-1 text-[15px] max-sm:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 md:justify-between">
          <Link
            href="/#contact"
            className="font-medium text-black transition-colors hover:text-red-950 max-md:hidden"
          >
            Get in touch
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="mailto:info@nexalisinternational.com"
              target="_blank"
              className="flex w-max items-center gap-1 rounded-full bg-red-100 px-1 py-0.5 transition-colors hover:bg-red-200"
            >
              <Mailbox height={18} />
              info@nexalisinternational.com
            </a>
          </div>
        </div>
      </div>
      <nav className="sticky top-0 z-[1000] bg-white">
        <header className="mx-auto flex h-[70px] max-w-7xl items-center justify-between py-4 max-xl:px-4">
          <Link href="/" className="max-w-16">
            <Image
              src={NexalisLogo}
              alt="Nexalis logo"
              width={160}
              height={92}
              quality={100}
              loading="eager"
              className="h-full max-h-[50px] w-max object-contain sm:max-h-[60px]"
            />
          </Link>

          <NavLinks links={links} />

          <MobileMenu links={links} />
        </header>
      </nav>
    </>
  );
};

export type NavLinksType = { href: string; label: string }[];

export const links: NavLinksType = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/our-facilities",
    label: "Our Facilities",
  },
  {
    href: "/our-clients",
    label: "Our Clients",
  },
];
