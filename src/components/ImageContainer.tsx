import { PhotoSchema } from '@/models/Image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ImageContainerProps {
  photo: PhotoSchema
}


export const ImageContainer = async ({ photo }: ImageContainerProps) => {
  const withHeightRatio = photo.height / photo.width
  const galleyHeight = Math.ceil(250 * withHeightRatio)
  const photoSpan = Math.ceil(galleyHeight / 10) + 1
  return (
    <div
      className=' bg-gray-200 rounded-xl relative overflow-hidden group '
      style={{ gridRowEnd: `span ${photoSpan}` }}
    >
      <Link href={photo.url} target='_blank'>
        <div className=' rounded-xl overflow-hidden'>
          <Image
            src={photo.src.landscape}
            placeholder={'blur'}
            blurDataURL={photo.blurredDataUrl}
            alt={photo.alt}
            className='object-cover group-hover:opacity-70 cursor-pointer'
            fill={true}
            priority
            sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
          />
        </div>
      </Link>

    </div>
  )
}

