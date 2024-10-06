import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import styles from "@/styles/components/ui/button.module.scss";

import { MoveRight } from "lucide-react";

const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      tertiary: styles.tertiary,
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ className, variant })}
        {...props}
        ref={ref}
      >
        <span>{children}</span>
        <MoveRight />
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
