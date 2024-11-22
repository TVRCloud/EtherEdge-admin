import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { FocusEventHandler } from "react";

export function FieldLabel(props: {
  children?: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <FormLabel className={`flex ${props.className}`}>
      {props.children}
      {props.required ? <span className="ml-1 text-destructive">*</span> : null}
    </FormLabel>
  );
}

export function InputField<F extends FieldValues>(props: {
  control: Control<F>;
  defaultValue?: string | number | readonly string[] | undefined;
  name: Path<F>;
  label?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  type?: string;
  disabled?: boolean;
  className?: string;
  formItemClassName?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  min?: number;
  max?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className={props.formItemClassName}>
          <label className="flex flex-col gap-2">
            <FieldLabel required={props.required} className="text-[12px]">
              {props.label}
            </FieldLabel>
            <FormControl>
              <Input
                defaultValue={props.defaultValue}
                {...field}
                value={field.value ?? ""}
                placeholder={props.placeholder}
                className={`border outline-none ring-offset-transparent focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:transparent focus-visible:ring-offset-0 h-10
                  ${props.className}
                `}
                disabled={props.disabled}
                type={props.type}
                onBlur={props.onBlur}
                min={props.min}
                max={props.max}
              />
            </FormControl>
            <FormMessage />
          </label>
        </FormItem>
      )}
    />
  );
}
