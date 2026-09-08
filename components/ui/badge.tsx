import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "cloud" | "cyber" | "dev" | "ia" | "glass"
}

const badgeVariants = {
  default: "border-transparent bg-primary text-white shadow hover:bg-primary/80",
  secondary: "border-transparent bg-secondary text-white hover:bg-secondary/80",
  outline: "text-foreground",
  cloud: "border-transparent bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20",
  cyber: "border-transparent bg-[#059669]/10 text-[#059669] border border-[#059669]/20",
  dev: "border-transparent bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20",
  ia: "border-transparent bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20",
  glass: "glass-panel text-foreground",
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
