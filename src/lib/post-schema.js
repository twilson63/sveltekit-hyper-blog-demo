import * as z from 'zod'

export default z.object({
  id: z.string().optional(),
  type: z.literal('post'),
  title: z.string().max('100'),
  author: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
  status: z.enum(['published', 'draft']),
  content: z.string()
})
