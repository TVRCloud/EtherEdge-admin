import { z } from "zod";

// Schema for profile images
export const profileImageSchema = z.object({
  profileImage: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      // Maximum size: 5MB
      message: "Profile image must be smaller than 5MB.",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      {
        message: "Profile image must be in JPEG, PNG, or WEBP format.",
      }
    ),
  coverImage: z
    .instanceof(File)
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      // Maximum size: 10MB
      message: "Cover image must be smaller than 10MB.",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      {
        message: "Cover image must be in JPEG, PNG, or WEBP format.",
      }
    ),
});

// Schema for profile edit form
export const profileEditSchema = z.object({
  email: z.string().email("Invalid email"),
  username: z.string().min(1, "Username is required"),
  fullName: z.string().min(1, "Full name is required"),
  gender: z.string().min(1, "Gender is required"),
  phone: z.string().min(1, "Phone number is required"),
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
