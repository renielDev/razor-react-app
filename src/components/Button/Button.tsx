import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import './Button.scss'

const buttonVariants = cva('base', {
  variants: {
    intent: {
      base: '',
      primary: 'bg-primary-base text-white border-primary-base',
      secondary: 'bg-white',
    },
    border: {
      thin: 'border-1',
    }
  },
  defaultVariants: {
    intent: 'base',
    border: 'thin',
  }
})

type ButtonVariantProps = VariantProps<typeof buttonVariants>

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, intent, border, onClick, children }) => {
  const _buttonClassname = buttonVariants({intent, border, className})
  return (
    <button className={_buttonClassname} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
