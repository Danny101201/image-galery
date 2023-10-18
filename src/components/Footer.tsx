'use client'

import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'
interface FooterProps {
  topic: string,
  page?: string | null,
  prev_page?: string | null,
  next_page?: string | null,
}
export const Footer = ({
  topic,
  page,
  prev_page,
  next_page
}: FooterProps) => {
  if (!prev_page && !next_page || !page) return null
  const pageNums: number[] = []

  if (prev_page && next_page) {
    for (let i = parseInt(prev_page); i <= parseInt(next_page); i++) {
      pageNums.push(i)
    }
  } else if (prev_page) {
    for (let i = parseInt(prev_page); i <= parseInt(page); i++) {
      pageNums.push(i)
    }
  } else if (next_page) {
    for (let i = parseInt(page); i <= parseInt(next_page); i++) {
      pageNums.push(i)
    }
  }



  return (
    <footer className="flex items-center justify-center gap-[1rem] px-2 py-4 font-bold">
      {pageNums.length ? (
        pageNums.map(index => (
          <Link
            className={parseInt(page) === index ? 'underline' : ''}
            href={`/results/${topic}/${index}`}
          >{index}</Link>
        ))
      ) : null}
    </footer>
  )
}

