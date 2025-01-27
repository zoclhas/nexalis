import Image from "next/image";
import Link from "next/link";
import NexalisLogo from "@/public/logo.png";
import { links } from "./navbar/links";

export const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-16">
      <div className="space-y-4">
        <Link href="/" className="w-max">
          <Image
            src={NexalisLogo}
            alt="Nexalis logo"
            width={160}
            height={92}
            quality={100}
            loading="eager"
            className="z-[100] h-full max-h-[50px] w-max object-contain sm:max-h-[60px]"
          />
        </Link>

        <ul className="grid grid-cols-2 items-center gap-6 font-semibold text-gray-600 sm:flex">
          {links.map((l) => (
            <li
              key={l.href}
              className={"transition-colors hover:text-gray-800"}
            >
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 border-t border-zinc-300 pt-4">
        <p className="text-sm text-zinc-500">
          &copy; 2021 - {new Date().getFullYear()} Nexalis International Oil
          &amp; Gas. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
