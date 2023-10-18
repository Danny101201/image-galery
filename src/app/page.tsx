import { Gallery } from '@/components/Gallery'
import ImageToBase64 from '@/components/ImageToBase64'
import { env } from '@/lib/env'
import { fetchImages } from '@/lib/fetchImage'
import Image from 'next/image'
type SearchParamsKey = 'page'
export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key in SearchParamsKey]: string | undefined }
}) {

  return (
    <>
      <Gallery page={searchParams.page} />
      {/* <Footer /> */}
    </>
  )
}
