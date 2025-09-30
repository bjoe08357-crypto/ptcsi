import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().optional(), // Anti-spam field
})

export const careerFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  position: z.string().min(1, 'Position is required'),
  experience: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  resume: z.string().optional(), // File upload would be handled separately
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type CareerFormData = z.infer<typeof careerFormSchema>



