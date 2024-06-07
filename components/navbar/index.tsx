import NexalisLogo from "@/public/logo.png";

import { Mailbox, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./menu";

export const Navbar = () => {
  return (
    <>
      <div className="bg-red-300 px-4 py-1 text-[15px] max-sm:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6">
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@nexalisinternational.com"
              target="_blank"
              className="flex w-max items-center gap-1 rounded-full bg-red-100 px-1 py-0.5 transition-colors hover:bg-red-200"
            >
              <Mailbox height={18} />
              info@nexalisinternational.com
            </a>

            <a
              href="tel:+971553511282"
              target="_blank"
              className="flex w-max items-center gap-1 rounded-full bg-red-100 px-1 py-0.5 transition-colors hover:bg-red-200"
            >
              <PhoneCall height={18} />
              +971 55 351 1282
            </a>
          </div>
        </div>
      </div>
      <nav className="sticky top-0 z-[1000] bg-white">
        <header className="mx-auto flex h-[70px] max-w-7xl items-center justify-between py-4 max-xl:px-4">
          <Link href="/">
            <Image
              src={NexalisLogo}
              alt="Nexalis logo"
              width={160}
              height={92}
              quality={100}
              loading="eager"
              className="h-full max-h-[60px] w-max object-contain"
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
    href: "/projects",
    label: "Projects",
  },
];
