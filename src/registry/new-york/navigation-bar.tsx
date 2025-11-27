"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export interface LinkItemType {
  name: string;
  link: string;
  icon: React.ElementType | undefined;
}

function LinkItem({ item, close }: { item: LinkItemType; close: () => void }) {
  const Icon = item.icon;
  return (
    <li key={item.name} className="w-full">
      <Link
        onClick={close}
        className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-nowrap hover:bg-current/20"
        href={item.link}
      >
        {Icon && <Icon />}

        {item.name}
      </Link>
    </li>
  );
}

export default function Navigationbar({
  centerLinks,
  rightLinks = [],
}: {
  centerLinks: LinkItemType[];
  rightLinks?: (() => React.ReactElement)[];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function close() {
    setMobileMenuOpen(false);
  }
  function open() {
    setMobileMenuOpen(true);
  }
  return (
    <nav className="sticky top-0 z-50 mx-auto flex items-center justify-between bg-inherit p-5 px-10 shadow-sm shadow-current/20 md:p-2 lg:px-10 dark:bg-neutral-950">
      <p>Logo</p>
      <ul className="hidden md:flex">
        {centerLinks.map((item) => (
          <LinkItem close={close} key={item.name} item={item} />
        ))}
      </ul>

      {rightLinks && (
        <ul className="hidden md:flex">
          {rightLinks.map((Item, ind) => (
            <Item key={ind} />
          ))}
        </ul>
      )}
      <button onClick={open} className="block md:hidden">
        <Menu />
      </button>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            exit={{ opacity: 0, width: 0 }}
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: 1,
              width: "100%",
            }}
            key={"mobile-menu"}
            className={
              "absolute top-0 left-0 h-screen w-screen bg-inherit md:hidden"
            }
          >
            <div className="flex w-full items-center justify-between p-5 px-10">
              <p>Logo</p>
              <button onClick={close}>
                <X />
              </button>
            </div>
            <ul className="flex h-full w-full flex-col items-center justify-center">
              {centerLinks.map((item) => (
                <LinkItem key={item.name} close={close} item={item} />
              ))}
              {rightLinks.map((Item, ind) => (
                <Item key={`a${ind}`} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
