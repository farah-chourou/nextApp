import { z } from "zod";

export const RegisterUserSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    lastName: z.string().optional().default(""), // Add lastName as optional and set a default value
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    photo: z.string().optional(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password cannot exceed 32 characters"),
    passwordConfirm: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

export const LoginUserSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginUserInput = z.infer<typeof LoginUserSchema>;
export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
