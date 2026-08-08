import { z } from "zod";

/** Strip formatting and optional +91 / leading 0 for Indian mobiles. */
export function normalizePhoneDigits(value: string): string {
  let digits = value.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return digits;
}

export function isValidIndianPhone(value: string): boolean {
  return /^\d{10}$/.test(normalizePhoneDigits(value));
}

export const phoneField = z
  .string()
  .trim()
  .min(1, "Phone number is required")
  .refine(isValidIndianPhone, "Enter a valid 10-digit mobile number");

export const emailField = z
  .string()
  .trim()
  .min(1, "Email address is required")
  .email("Enter a valid email address");

export const nameField = z
  .string()
  .trim()
  .min(1, "Full name is required")
  .min(2, "Name must be at least 2 characters")
  .max(100, "Name is too long");

export function requiredTextField(label: string) {
  return z.string().trim().min(1, `${label} is required`);
}

export const optionalUrlField = z
  .string()
  .optional()
  .refine((value) => {
    if (!value?.trim()) return true;
    try {
      new URL(value.trim());
      return true;
    } catch {
      return false;
    }
  }, "Enter a valid URL (e.g. https://...)");

export function fieldError<T>(result: z.SafeParseReturnType<T, T>): string | undefined {
  if (result.success) return undefined;
  return result.error.errors[0]?.message;
}

export function validateField<T>(schema: z.ZodType<T>, value: unknown): string | undefined {
  return fieldError(schema.safeParse(value));
}
