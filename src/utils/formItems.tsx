import React from "react";
import { useFormContext } from "react-hook-form";
import "./utils.scss"; // Import your SCSS styles

// Input component
interface InputProps {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  defaultValue,
  disabled = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col mb-3 gap-2">
      <label className="text-sm text-[#1b254b] font-[500] pl-3">{label}</label>
      <div className=" border-2 rounded-[14px]">
        <input
          className="w-full outline-none bg-inherit rounded-[14px] p-2 pl-3"
          {...register(name, { value: defaultValue })}
          type={type}
          disabled={disabled}
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs pl-3 mt-1">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

// Select component
interface SelectProps {
  name: string;
  label: string;
  options: { label: string; value: string | number }[];
  defaultValue?: string | number;
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  defaultValue,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col mb-2">
      <label className="text-sm text-[#1b254b] font-[500] pl-3">{label}</label>
      <div className="p-2 border-2 rounded-[14px]">
        <select
          className="w-full outline-none bg-inherit pl-1"
          {...register(name, { value: defaultValue })}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs pl-3">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

// TextArea component
interface TextAreaProps {
  name: string;
  label: string;
  rows?: number;
  defaultValue?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  rows = 3,
  defaultValue,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col mb-3 gap-2">
      <label className="text-sm text-[#1b254b] font-[500] pl-3">{label}</label>
      <div className="p-2 border-2 rounded-[14px]">
        <textarea
          className="w-full outline-none bg-inherit pl-1"
          rows={rows}
          {...register(name, { value: defaultValue })}
        ></textarea>
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs pl-3">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  size?: "responsive" | "default";
  disabled?: boolean;
  loading?: boolean; // New prop for loading state
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "default",
  disabled = false,
  loading = false, // Default to false
}) => {
  return (
    <button
      type={type}
      className={`btn ${variant} ${size} ${loading ? "loading" : ""}`} 
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="btn-loading">Loading...</span> // Display loading text or spinner
      ) : (
        label
      )}
    </button>
  );
};
