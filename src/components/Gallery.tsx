import { fetchImages } from '@/lib/fetchImage'
import React, { Suspense } from 'react'
import { ImageContainer } from './ImageContainer'
import { addBlurredDataUrls } from '@/lib/placeHolderImage'
import { Footer } from './Footer'
import { useSearchParams } from 'next/navigation'
import { Skeleton } from './Skeleton'
import { getPrevNextPages } from '@/lib/getPrevNextPages'
interface GalleryProps {
  page?: string | undefined
  topic?: string | undefined
}
export const Gallery = async ({ page = '1', topic = 'curated' }: GalleryProps) => {
  let url
  if (topic === 'curated' && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}`
  } else if (topic === 'curated') {
    url = `https://api.pexels.com/v1/curated`
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${topic}`
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`
  }

  const images = await fetchImages(url)
  if (!images?.photos || images.per_page == 0) return (
    <h2 className='m-4 text-2xl font-blod'>no image found</h2>
  )
  const photoWithBlurUrl = await addBlurredDataUrls(images)
  const { prev_page, next_page } = getPrevNextPages(images)
  return (
    <>
      <section className='px-2 my-3 grid gap-2 grid-cols-gallery auto-rows-[10px]'>
        {photoWithBlurUrl.map(photo => (
          <Suspense fallback={<Skeleton />} key={photo.id} >
            <ImageContainer photo={photo} />
          </Suspense>
        ))}
      </section>
      <Footer
        prev_page={prev_page}
        next_page={next_page}
        page={page}
        topic={topic}
      />
    </>
  )
}



