import { z } from "zod";

// Schema for profile edit form
export const profileEditSchema = z.object({
  username: z.string().min(1, "Username is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  about: z.string().optional(),
});

export type TProfileEditSchema = z.infer<typeof profileEditSchema>;

// Schema for password change form
export const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(6, "Old password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TChangePasswordSchema = z.infer<typeof changePasswordSchema>;
