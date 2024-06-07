"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { NavLinksType } from ".";

export const NavLinks = ({ links }: { links: NavLinksType }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <ul className="hidden items-center gap-6 sm:flex">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className={twMerge(
              "transition-[color,font-weight] hover:text-red-800",
              isActive(l.href) && "font-medium text-red-600",
            )}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
