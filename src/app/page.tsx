"use client";
import { Plus, Circle, CircleX, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ModeToggle } from "@/lib/mode-toggle";

interface LinkItemType {
  name: string;
  link: string;
  icon: React.ComponentType | undefined;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function close() {
    setMobileMenuOpen(false);
  }
  function open() {
    setMobileMenuOpen(true);
  }
  const centerLinks = [
    {
      name: "menu",
      link: "#",
      icon: Circle,
    },

    {
      name: "menu1",
      link: "#",
      icon: CircleX,
    },
    {
      name: "menu2",
      link: "#",
      icon: Plus,
    },
    {
      name: "menu3",
      link: "#",
      icon: undefined,
    },
  ];
  const rightLinks = [
    {
      name: "menu",
      link: "#",
      icon: undefined,
    },
  ];

  function LinkItem({ item }: { item: LinkItemType }) {
    return (
      <li key={item.name} className="w-full">
        <a
          onClick={close}
          className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 hover:bg-current/20"
          href={item.link}
        >
          {item.icon && <item.icon />}

          {item.name}
        </a>
      </li>
    );
  }

  return (
    <>
      <nav className="sticky top-0 mx-auto flex items-center justify-between bg-inherit p-5 px-10 lg:p-2 lg:px-10">
        <div>Icon</div>
        <ul className="hidden lg:flex">
          {centerLinks.map((item) => (
            <LinkItem key={item.name} item={item} />
          ))}
        </ul>

        {rightLinks && (
          <ul className="hidden lg:flex">
            {rightLinks.map((item) => (
              <LinkItem key={item.name} item={item} />
            ))}
          </ul>
        )}
        <ModeToggle />
        <button onClick={open} className="block lg:hidden">
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
                "absolute top-0 left-0 h-screen w-screen bg-inherit lg:hidden"
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
                  <LinkItem key={item.name} item={item} />
                ))}
                {rightLinks.map((item) => (
                  <LinkItem key={item.name} item={item} />
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-[300vh] w-full bg-yellow-400"></div>
    </>
  );
}
