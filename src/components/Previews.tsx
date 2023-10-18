import React from 'react'
const waitFor = (time: number) => new Promise((r) => setTimeout(r, time))
export const Previews = async () => {
  await waitFor(2000)
  return (
    <div>Previews</div>
  )
}
