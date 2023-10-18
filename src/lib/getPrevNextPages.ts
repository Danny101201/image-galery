import { type ImageSchemaWithPhoto } from "@/models/Image"


export const getPageNumber = (url: string) => {
  const { searchParams } = new URL(url)
  return searchParams.get('page')

}

export const getPrevNextPages = (images: ImageSchemaWithPhoto) => {
  let prev_page = images?.prev_page
    ? getPageNumber(images.prev_page)
    : null
  let next_page = images?.next_page
    ? getPageNumber(images?.next_page)
    : null
  const totalPages = images.total_results % images.per_page
    ? Math.ceil(images.total_results / images.per_page)
    : (images.total_results / images.per_page) + 1
  if (prev_page && (parseInt(prev_page) + 5) < totalPages) next_page = String(parseInt(prev_page) + 5)
  if (!prev_page && next_page) next_page = String(parseInt(next_page) + 4)
  if (prev_page && !next_page) prev_page = String(parseInt(prev_page) - 4)
  if (prev_page && next_page && (parseInt(prev_page) + 5) >= totalPages) next_page = String(totalPages)
  return { prev_page, next_page, totalPages }
}