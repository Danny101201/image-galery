import { imageSchemaWithPhoto, ImageSchemaWithPhoto } from "@/models/Image";
import { ZodError } from "zod";
import { env } from "./env";

export const fetchImages: (url: string) => Promise<ImageSchemaWithPhoto | undefined> = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: env.PIXEL_API_TOKEN
      }
    })
    if (!response.ok) throw new Error('Fetch error')
    const result = await response.json()
    const parseData = imageSchemaWithPhoto.parse(result)
    if (parseData.total_results === 0) return undefined
    return parseData
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(e.stack)
    }
  }
}