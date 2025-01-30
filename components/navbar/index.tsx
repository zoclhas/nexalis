"use client";

import { cn } from "@/lib/utils";
import NexalisLogo from "@/public/logo.png";
import { Mailbox, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { links } from "./links";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="bg-brand-950 py-1 max-md:hidden">
        <div className="container mx-auto flex justify-between px-4">
          <Link href="/#contact" className="text-sm font-medium text-white">
            Get in touch
          </Link>
          <a
            href="mailto:info@nexalisinternational.com"
            target="_blank"
            className="flex items-center gap-1 text-sm font-medium text-white"
          >
            <Mailbox height={18} />
            info@nexalisinternational.com
          </a>
        </div>
      </div>

      <Drawer open={open} onOpenChange={setOpen}>
        <header
          className={cn(
            "sticky top-0 z-[100] bg-white/80 backdrop-blur-xl transition-colors",
            !isScrolled && mounted && "bg-transparent",
          )}
        >
          <nav className="container mx-auto h-[76px] p-2 px-4">
            <ul className="flex items-center justify-between gap-8">
              <li className="w-max">
                <Link href="/" className="max-w-16">
                  <Image
                    src={NexalisLogo}
                    alt="Nexalis logo"
                    width={63}
                    height={92}
                    quality={100}
                    loading="eager"
                    className="z-[100] h-full max-h-[50px] w-max object-contain sm:max-h-[60px]"
                  />
                </Link>
              </li>

              <li>
                <ul className="hidden items-center gap-6 font-semibold text-gray-600 md:flex">
                  {links.map((l) => (
                    <li
                      key={l.href}
                      className={cn(
                        "transition-colors hover:text-gray-800",
                        isActive(l.href) && "font-red-rose text-zinc-800",
                        l.has &&
                          pathname.includes(l.href) &&
                          "font-red-rose text-zinc-800",
                      )}
                    >
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="md:hidden">
                <DrawerTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="p-1"
                    aria-label="Open Menu Drawer"
                  >
                    <MenuIcon className="!size-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="z-[1000]">
                  <DrawerHeader>
                    <DrawerTitle className="font-red-rose">Menu</DrawerTitle>
                  </DrawerHeader>
                  <div>
                    <ul className="flex flex-col gap-2 p-8 pb-16 font-semibold text-gray-600">
                      {links.map((l) => (
                        <li
                          key={l.href}
                          className={cn(
                            "transition-colors hover:text-gray-800",
                            isActive(l.href) && "font-red-rose text-zinc-800",
                            l.has &&
                              pathname.includes(l.href) &&
                              "font-red-rose text-zinc-800",
                          )}
                          onClick={closeDrawer}
                        >
                          <Link href={l.href}>{l.label}</Link>
                        </li>
                      ))}
                      <li className="transition-colors hover:text-gray-800">
                        <Link href="/#contact" onClick={closeDrawer}>
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </DrawerContent>
              </li>
            </ul>
          </nav>
        </header>
      </Drawer>
    </>
  );
}
