import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function ComponentsContainer({
  children,
  child2,
  className,
}: {
  children: React.ReactNode;
  child2?: React.ReactNode | undefined;
  className: HTMLDivElement["className"];
}) {
  return (
    <div
      className={cn(
        "mt-10 max-h-[50rem] overflow-hidden rounded-xl border-2 border-current/20 bg-current/10",
        className,
      )}
    >
      {children}
      <div className="relative h-full overflow-y-scroll"></div>
      {child2}
    </div>
  );
}
