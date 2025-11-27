"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState } from "react";

export default function ComponentsContainer({
  children,
  child2,
  className,
}: {
  children: React.ReactNode;
  child2?: React.ReactNode | undefined;
  className: HTMLDivElement["className"];
}) {
  const dim = {
    0: "w-1/3",
    1: "w-1/2",
    2: "w-full",
  };
  const [machine, setMachine] = useState<0 | 1 | 2>(2);
  return (
    <div
      className={cn(
        "mt-10 max-h-[50rem] overflow-hidden rounded-xl border-2 border-current/20 bg-current/10",
        className,
        dim[machine],
      )}
    >
      <div className="flex hidden justify-end gap-4 px-10">
        <Button
          onClick={() => setMachine(0)}
          className="m-0 p-0"
          variant="link"
        >
          phone
        </Button>
        <Button
          className="m-0 p-0"
          onClick={() => setMachine(1)}
          variant="link"
        >
          tablet
        </Button>
        <Button
          className="m-0 p-0"
          onClick={() => setMachine(2)}
          variant="link"
        >
          pc
        </Button>
      </div>
      {children}
      <div className="relative h-full overflow-y-scroll"></div>
      {child2}
    </div>
  );
}
