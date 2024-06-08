"use client";

import NexalisLogo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../navbar";
import { twMerge } from "tailwind-merge";

export const Footer = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <footer className="bg-red-950">
      <div className="mx-auto flex max-w-7xl gap-6 py-8 max-xl:px-4">
        <div className="grid w-max rounded-xl bg-white p-4">
          <Image
            src={NexalisLogo}
            alt="Nexalis logo"
            width={64}
            height={62}
            quality={100}
            loading="eager"
            className="h-full max-h-[70px] w-max object-contain"
          />
        </div>

        <div className="flex grow items-center max-lg:flex-col max-lg:justify-center lg:justify-between">
          <p className="text-red-200 max-sm:text-sm">
            &copy; {new Date().getFullYear()} Nexalis International
          </p>

          <ul className="hidden items-center gap-6 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={twMerge(
                    "text-red-300 transition-[color,font-weight] hover:text-red-400",
                    isActive(l.href) && "font-medium text-red-200",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
