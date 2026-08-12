import * as React from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  primary:
    "bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-lg shadow-violet-600/25 hover:shadow-violet-500/40 hover:brightness-110",
  outline:
    "border border-border bg-transparent text-foreground hover:border-violet-500/50 hover:bg-violet-500/5 hover:text-violet-700 dark:hover:text-violet-200",
  ghost: "text-muted hover:bg-foreground/5 hover:text-foreground",
  secondary: "bg-foreground/5 text-foreground hover:bg-foreground/10",
} as const;

const sizeClasses = {
  sm: "h-9 rounded-lg px-4 text-xs",
  md: "h-11 rounded-xl px-6 text-sm",
  lg: "h-13 rounded-xl px-8 text-base",
  icon: "h-10 w-10 rounded-xl",
} as const;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "primary", size = "md", asChild = false, children, ...props },
    ref
  ) {
    const classes = cn(
      "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 disabled:pointer-events-none disabled:opacity-50",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<{
        className?: string;
      }>;
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
