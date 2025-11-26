"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

interface LinkItemType {
  name: string;
  link: string;
  icon: React.ElementType | undefined;
}

function LinkItem({ item, close }: { item: LinkItemType; close: () => void }) {
  const Icon = item.icon;
  return (
    <li key={item.name} className="w-full">
      <a
        onClick={close}
        className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 hover:bg-current/20"
        href={item.link}
      >
        {Icon && <Icon />}

        {item.name}
      </a>
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
    <nav className="sticky top-0 mx-auto flex items-center justify-between bg-inherit p-5 px-10 md:p-2 lg:px-10">
      <div>Icon</div>
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
        open
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
              <div>Icon</div>
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
