// components/Form.tsx
import { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";

interface FormProps<TFormValues extends FieldValues> {
  onSubmit: SubmitHandler<TFormValues>;
  schema?: ZodSchema<TFormValues>;
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Form = <TFormValues extends Record<string, any>>({
  onSubmit,
  schema,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    resolver: schema ? zodResolver(schema) : undefined,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
