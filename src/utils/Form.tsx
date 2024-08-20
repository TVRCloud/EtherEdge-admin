import React, { useState, FormEvent } from "react";
import { ZodSchema, ZodError } from "zod";
import { Button } from "./formItems"; // Adjust import path as needed

type FormProps<T> = {
  schema: ZodSchema<T>;
  initialValues: T;
  onSubmit: (values: T) => void;
  children: (props: {
    values: T;
    errors: Record<string, string>;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  }) => React.ReactNode;
};

export const Form = <T,>({
  schema,
  initialValues,
  onSubmit,
  children,
}: FormProps<T>) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      schema.parse(values);
      setErrors({});
      onSubmit(values);
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.reduce<Record<string, string>>(
          (acc, err) => {
            acc[err.path[0]] = err.message;
            return acc;
          },
          {}
        );
        setErrors(errorMessages);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {children({ values, errors, onChange: handleChange })}
      <Button label="Submit" type="submit" />
    </form>
  );
};
