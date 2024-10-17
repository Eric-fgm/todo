import Spinner from "../spinner";

interface ButtonProps
  extends React.PropsWithChildren,
    React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  variant?: keyof typeof variantClassMap;
  isLoading?: boolean;
}

const variantClassMap = {
  primary: "text-secondary bg-secondary",
  secondary: "bg-tertiary",
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled,
  isLoading = false,
  ...props
}) => {
  const variantClass = variantClassMap[variant];

  return (
    <button
      type={type}
      className={`relative rounded-lg px-4 py-2 text-sm ${disabled ? "opacity-75" : ""} ${variantClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
      {isLoading && (
        <div
          className={`absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-lg ${variantClass}`}
        >
          <Spinner />
        </div>
      )}
    </button>
  );
};

export default Button;
