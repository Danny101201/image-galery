
import { Gallery } from '@/components/Gallery'
import { ResolvingMetadata, Metadata } from 'next'
import { Suspense } from 'react'

type Props = {
  params: { term: (string | undefined)[] }
  searchParams: { [key: string]: string | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const topic = params.term[0] ?? 'curated'
  const page = params.term[1] ?? 1

  return {
    title: `Results for ${topic},page ${page}`,
  }
}
export default function Results({
  params,
  searchParams,
}: Props) {
  const topic = params.term[0] ?? 'curated'
  const page = params.term[1] ?? '1'
  return (
    <>
      <Suspense fallback={<p className='min-h-[100vh]'>loading Gallery</p>}>
        <Gallery page={page} topic={topic} />
      </Suspense>
    </>
  )
}
