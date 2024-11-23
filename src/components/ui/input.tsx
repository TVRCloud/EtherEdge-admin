"use client";
import * as React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const passwordMode = type === "password";

  return (
    <div className="relative flex items-center flex-grow">
      <input
        type={passwordMode ? (showPassword ? "text" : "password") : type}
        className={`bg-transparent flex h-12 w-full rounded-[16px] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${
          className || ""
        } ${passwordMode ? "pr-9" : ""}`}
        ref={ref}
        {...props}
      />
      {passwordMode && (
        <button
          type="button"
          className="absolute right-3"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
