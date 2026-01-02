"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/components/lib/utils"

function Progress({
  className,
  value,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  variant?: "default" | "success" | "warning" | "error"
}) {
  const variantStyles = {
    default: "bg-warm-300",
    success: "bg-status-success",
    warning: "bg-status-warning",
    error: "bg-status-error",
  }

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-white/10",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full w-full flex-1 transition-all duration-300 ease-out",
          variantStyles[variant]
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
