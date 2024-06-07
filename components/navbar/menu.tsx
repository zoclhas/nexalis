"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { Mailbox, Menu, PhoneCall, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavLinksType } from ".";
import { Button } from "../ui/button";
import { createPortal } from "react-dom";
import Link from "next/link";

export const MobileMenu = ({ links }: { links: NavLinksType }) => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string | string[]) => {
    if (typeof path === "string") {
      return path === pathname;
    }
    return path.some(isActive);
  };

  const handleOpen = () => {
    document.body.style.overflowY = "hidden";
    setOpen(true);
  };
  const handleClose = () => {
    document.body.style.overflowY = "auto";
    setOpen(false);
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  };

  const listItem: Variants = {
    hidden: { opacity: 0, translateY: 40 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.3,
      },
    },
  };

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="p-0 sm:hidden"
        onClick={handleOpen}
      >
        <Menu />
      </Button>

      <AnimatePresenceWrapper active={open}>
        <motion.div
          className="fixed inset-0 z-[2000] h-screen w-screen bg-white/50 backdrop-blur-lg"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          initial="hidden"
          animate="show"
          exit="hidden"
          key="menu-modal"
        >
          <div className="absolute top-0 z-[2500] flex h-[80px] w-full items-center justify-end px-4">
            <Button
              variant="ghost"
              size="icon"
              className="p-0"
              onClick={handleClose}
            >
              <X />
            </Button>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center gap-6 p-4">
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col justify-center"
            >
              {links.map((link) => (
                <motion.li variants={listItem} key={link.href}>
                  <Link href={link.href} className="text-3xl font-medium">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="flex flex-col gap-2 text-sm"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.a
                variants={listItem}
                href="mailto:info@nexalisinternational.com"
                target="_blank"
                className="flex w-max items-center gap-1 rounded-full bg-zinc-100 p-2 transition-colors hover:bg-zinc-200"
              >
                <Mailbox height={18} />
                info@nexalisinternational.com
              </motion.a>

              <motion.a
                variants={listItem}
                href="tel:+971555555555"
                target="_blank"
                className="flex w-max items-center gap-1 rounded-full bg-zinc-100 p-2 transition-colors hover:bg-zinc-200"
              >
                <PhoneCall height={18} />
                +971 55 555 5555
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresenceWrapper>
    </>
  );
};

const AnimatePresenceWrapper = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) => {
  if (typeof document !== "undefined") {
    return createPortal(
      <AnimatePresence>{active && children}</AnimatePresence>,
      document.body,
    );
  }

  return null;
};
