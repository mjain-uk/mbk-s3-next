import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email().min(1),
  requirement: z.string().min(1),
});
