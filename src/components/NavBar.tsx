import Link from 'next/link'
import React from 'react'
import { Search } from './Search'

export const NavBar = () => {
  return (
    <header className='bg-black sticky top-0 z-10'>
      <nav className='flex flex-col sm:flex-row gap-4 sm:justify-between items-center  p-4 font-bold max-w-6xl mx-auto text-white'>
        <h1>
          <Link
            href={'/'}
            className='text-2xl sm:text-3xl text-center whitespace-nowrap'
          >Nextjs Image gallery</Link>
        </h1>
        <Search />
      </nav>
    </header>
  )
}

