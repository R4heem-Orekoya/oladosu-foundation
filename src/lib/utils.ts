import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import client from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

export const urlFor = (src: string) => {
   return builder.image(src) as unknown as string
}