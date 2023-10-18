import { ImageSchemaWithPhoto, PhotoSchema } from "@/models/Image";
import { getPlaiceholder } from "plaiceholder";

export const getImage = async (src: string) => {
  try {
    const buffer = await fetch(src).then(async res => Buffer.from(await res.arrayBuffer()))
    const {
      base64,
      ...placeholder
    } = await getPlaiceholder(buffer, { size: 10 })

    return {
      base64,
      ...placeholder
    }
  } catch (e) {
    console.log(e)
  }
}


export const addBlurredDataUrls = async (images: ImageSchemaWithPhoto) => {
  console.log(images)
  const basePromises = images.photos.map(photo => getImage(photo.src.large))
  const base64Results = await Promise.all(basePromises)
  const photoWithBlurUrl = images.photos.map((photo, i) => {
    if (base64Results[i]) {
      photo.blurredDataUrl = base64Results[i]?.base64
    }
    return photo
  })
  return photoWithBlurUrl
}