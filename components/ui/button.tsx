"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, asChild, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 overflow-hidden cursor-pointer active:scale-95";

    const variants: Record<string, string> = {
      default: "bg-gradient-primary text-white shadow-glow hover:shadow-elevated hover:brightness-110",
      outline: "border-2 border-primary/20 text-foreground hover:bg-primary/5",
      ghost: "hover:bg-primary/5 text-foreground",
      glass: "glass-panel text-foreground hover:bg-white/40",
    };

    const sizes: Record<string, string> = {
      default: "h-12 px-6 py-2",
      sm: "h-10 px-4 text-sm",
      lg: "h-14 px-8 text-lg",
      icon: "h-12 w-12",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
