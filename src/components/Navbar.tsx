"use client";
import { House } from "lucide-react";
import { ModeToggle } from "@/lib/mode-toggle";
import Navigationbar from "@/registry/new-york/navigation-bar";

const centerLinks = [
  {
    name: "Home",
    link: "/",
    icon: House,
  },
];
const rightLinks = [ModeToggle];
export default function Navbar() {
  return <Navigationbar rightLinks={rightLinks} centerLinks={centerLinks} />;
}
