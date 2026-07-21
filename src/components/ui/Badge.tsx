import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#504945] bg-[#3c3836] px-3 py-1 text-sm font-medium text-[#ebdbb2] transition-all duration-300 hover:border-[#fabd2f] hover:text-[#fabd2f]",
        className
      )}
    >
      {children}
    </span>
  );
}