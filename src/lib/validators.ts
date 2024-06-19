import z from "zod"

export const MessageCredentialsValidator = z.object({
   email: z.string().email(),
   name: z.string().trim().min(1, {
      message: "Name is required"
   }),
   phoneNumber: z.string().trim().min(1, {
      message: "Phone number is required"
   }),
   message: z.string().trim().min(1, {
      message: "Message cannot be empty"
   })
})

export type TMessageCredentialsValidator = z.infer<
  typeof MessageCredentialsValidator
>