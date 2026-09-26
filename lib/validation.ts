import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  businessName: z.string().min(1, "Business name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(1, "Phone is required"),
  interests: z
    .array(z.string())
    .min(1, "Select at least one option"),
  message: z.string().min(10, "Tell us a bit more about your project"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email"),
});
