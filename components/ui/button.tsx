import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/25 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-red-600 border border-red-600 hover:bg-red-700 hover:border-red-700 text-white",
        outline:
          "bg-white border border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-400/15 text-gray-700",
        ghost:
          "bg-white border border-transparent hover:bg-gray-50 focus-visible:ring-gray-400/15 text-gray-700",
      },
      size: {
        sm: "py-2 px-3 gap-1 h-9",
        md: "py-2.5 px-3.5 h-10 gap-1",
        lg: "py-2.5 px-4 h-11 gap-1.5",
        xl: "py-3 px-[1.125rem] h-12 gap-1.5",
        "2xl": "py-4 px-[1.375rem] h-[3.75rem] gap-2.5",
        icon: "aspect-square size-11 p-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
