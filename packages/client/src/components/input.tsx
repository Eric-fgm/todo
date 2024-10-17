import React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  message?: string;
}

const Input: React.FC<InputProps> = React.forwardRef(
  ({ label, message, type = "text", ...props }, ref) => {
    return (
      <div>
        {label && <label className="mb-2 block">{label}</label>}
        <input
          ref={ref}
          type={type}
          className="h-9 w-full rounded-lg border px-4 text-sm font-medium outline-none placeholder:text-muted"
          {...props}
        />
        {message && <p className="text-danger mt-1.5">{message}</p>}
      </div>
    );
  },
);

export default Input;
