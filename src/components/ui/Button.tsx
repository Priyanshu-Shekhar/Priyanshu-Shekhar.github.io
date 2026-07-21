import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#fabd2f] text-[#282828] hover:brightness-110",

    secondary:
      "border border-[#504945] bg-[#3c3836] text-[#ebdbb2] hover:border-[#fabd2f]",

    ghost:
      "text-[#ebdbb2] hover:bg-[#3c3836]",
  };

  return (
    <button
      className={cn(
        "rounded-lg px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}