import type { LucideProps } from "lucide-react";

interface ButtonIconProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  type?: "button" | "submit" | "reset";
  variant?: keyof typeof variantClassMap;
  size?: "normal" | "large";
  icon: React.ForwardRefExoticComponent<LucideProps>;
}

const variantClassMap = {
  primary: "text-primary hover:bg-tertiary",
  secondary: "text-secondary bg-secondary",
};

const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon: Icon,
  type = "button",
  variant = "primary",
  size = "normal",
  className = "",
  ...props
}) => {
  const variantClass = variantClassMap[variant];

  return (
    <button
      type={type}
      className={`rounded-full ${size === "normal" ? "p-1" : "p-2.5"} ${variantClass} ${className}`}
      {...props}
    >
      <Icon size={16} className="text-[inherit]" />
    </button>
  );
};

export default ButtonIcon;
