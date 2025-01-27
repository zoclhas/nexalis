"use client";

import { cn } from "@/lib/utils";
import { Service } from "@/payload-types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ServiceLinks = ({ services }: { services: Service[] }) => {
  const pathname = usePathname();

  return services.map((service) => (
    <li key={service.id} className="transition-transform hover:translate-x-4">
      <Link
        href={"/services/" + service.slug}
        className={cn(
          pathname.includes(service.slug || "sadklasjdlkashd") &&
            "text-brand-900",
        )}
      >
        {service.title}
      </Link>
    </li>
  ));
};
