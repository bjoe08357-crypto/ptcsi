import { z } from 'zod'

export const careerFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  position: z.string().min(1, 'Position is required'),
  experience: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  resume: z.string().optional(), // File upload would be handled separately
})

export type CareerFormData = z.infer<typeof careerFormSchema>








