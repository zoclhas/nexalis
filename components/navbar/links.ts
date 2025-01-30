export type NavLinksType = { href: string; label: string; has?: boolean }[];

export const links: NavLinksType = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
    has: true,
  },
  {
    href: "/services",
    label: "Services",
    has: true,
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
