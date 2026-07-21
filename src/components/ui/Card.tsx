import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#504945] bg-[#3c3836] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#fabd2f]/60",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}