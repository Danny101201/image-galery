'use client'
import { useStateParams2 } from '@/hooks/useSatteQuery'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

export const Search = () => {
  // const [value, setValue] = useStateParams2('searhc', '', (value) => value, (value) => value)
  const [search, setSearch] = useState<string>('')
  const router = useRouter()
  const handleSubmit = (e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    router.push(`/results/${search}/1`)
    setSearch('')
  }
  return (
    <form className="flex justify-center md:justify-between" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search'
        className="bg-white p-2 w-[260px] sm:w-80 text-xl rounded-xl text-black"
      />
    </form>
  )
}

