import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useState } from "react"

export const useStateParams = <Tvalue>(
  queryKey: string,
  initionalValue: Tvalue,
  serialize: (T: Tvalue) => string,
  deserialize: (T: string) => Tvalue
) => {
  const router = useRouter()
  const pathName = usePathname()
  const search = new URLSearchParams(window.location.search)
  const existValue = search.get(queryKey)
  const [value, setValue] = useState<Tvalue>(
    existValue ? deserialize(existValue) : initionalValue
  )
  const onChange = (value: Tvalue) => {
    setValue(value)
    search.set(queryKey, serialize(value))
    let url = pathName + '?' + search.toString()
    router.push(url, { scroll: false })
  }
  return [value, onChange] as [Tvalue, (value: Tvalue) => void]
}

export const useStateParams2 = <Tvalue>(
  qyeryKey: string,
  initionalValue: Tvalue,
  serialize: (value: Tvalue) => string,
  deserialize: (value: string) => Tvalue,
) => {
  const router = useRouter()
  const search = new URLSearchParams(window.location.search)
  const existValue = search.get(qyeryKey)
  const [value, setValue] = useState<Tvalue>(
    existValue ? deserialize(existValue) : initionalValue
  )
  const onChange = (value: Tvalue) => {
    setValue(value)
    search.set(qyeryKey, serialize(value))
    router.push('/params' + '?' + search.toString())
  }
  return [value, onChange] as [Tvalue, (value: Tvalue) => void]
}