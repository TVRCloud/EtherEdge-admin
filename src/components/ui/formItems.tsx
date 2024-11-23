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
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "./select";
import { createListCollection } from "@chakra-ui/react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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
            <FieldLabel
              required={props.required}
              className="text-[12px] text-text-primary dark:text-dark-text-primary font-bold pl-3"
            >
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

// gender select
const genders = createListCollection({
  items: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ],
});
export function GenderSelectField<F extends FieldValues>(props: {
  control: Control<F>;
  name: Path<F>;
  label?: React.ReactNode;
  required?: boolean;
  className?: string;
  formItemClassName?: string;
}) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => {
        return (
          <FormItem className={props.formItemClassName}>
            <label className="flex flex-col gap-2">
              <FormLabel className="text-[12px] text-text-primary dark:text-dark-text-primary font-bold pl-3">
                {props.label}
                {props.required && (
                  <span className="ml-1 text-destructive">*</span>
                )}
              </FormLabel>
              <FormControl>
                <SelectRoot
                  collection={genders}
                  size="sm"
                  value={field.value ? [field.value] : []} // Ensure value is an array
                  onValueChange={(details) => {
                    // Only extract the 'value' from the selected item
                    const selectedValue = details.value[0]; // This is now just a string, e.g., 'male'
                    field.onChange(selectedValue); // Update the field with the selected value
                  }}
                  className={`border outline-none ring-offset-transparent focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:transparent focus-visible:ring-offset-0 h-12 px-3 rounded-[16px] ${props.className}`}
                >
                  <SelectTrigger className="h-full flex items-center">
                    <SelectValueText
                      className="text-sm"
                      placeholder="Select Gender"
                    />
                  </SelectTrigger>
                  <SelectContent className="p-2 flex flex-col gap-2 bg-primary-bg dark:bg-dark-primary-bg rounded-[16px]">
                    {genders.items.map((gender) => (
                      <SelectItem
                        item={gender}
                        key={gender.value}
                        className="p-2 rounded-[16px] hover:bg-main-bg dark:hover:bg-dark-main-bg"
                      >
                        {gender.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </FormControl>
              <FormMessage />
            </label>
          </FormItem>
        );
      }}
    />
  );
}

// phone input
export function PhoneNumberField<F extends FieldValues>(props: {
  control: Control<F>;
  name: Path<F>;
  label?: React.ReactNode;
  required?: boolean;
  placeholder?: string;
  className?: string;
  formItemClassName?: string;
}) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className={props.formItemClassName}>
          <label className="flex flex-col gap-2">
            <FormLabel className="text-[12px] text-text-primary dark:text-dark-text-primary font-bold pl-3">
              {props.label}
              {props.required && (
                <span className="ml-1 text-destructive">*</span>
              )}
            </FormLabel>
            <FormControl>
              <PhoneInput
                {...field}
                value={field.value || ""}
                onChange={(value) => field.onChange(value)}
                placeholder={props.placeholder || "Enter phone number"}
                defaultCountry="IN"
                international
                className={`w-full border rounded-[16px] h-12 px-3 text-sm bg-transparent text-text-primary dark:text-dark-text-primary placeholder-text-secondary dark:placeholder-dark-text-secondary  ${props.className}`}
              />
            </FormControl>
            <FormMessage />
          </label>
        </FormItem>
      )}
    />
  );
}
