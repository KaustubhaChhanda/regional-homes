import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-secondary text-white hover:bg-secondary-dark hover:shadow-lg hover:shadow-secondary/25 active:scale-[0.98]",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]",
        ghost: "text-primary hover:bg-primary/5 active:scale-[0.98]",
        white: "bg-white text-primary hover:bg-gray-100 hover:shadow-lg active:scale-[0.98]",
        accent: "bg-accent text-primary hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]",
        link: "text-secondary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-12 px-8 py-3 min-w-[180px]",
        sm: "h-10 px-6 py-2 text-xs min-w-[120px]",
        lg: "h-14 px-10 py-4 text-base min-w-[200px]",
        icon: "h-10 w-10 min-w-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
