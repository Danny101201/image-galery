'use client'
import React, { useEffect, useState } from 'react'

function ImageToBase64() {
  const [uri, setUri] = useState<string | ArrayBuffer | null>(null)
  useEffect(() => {

    fetch('https://picsum.photos/200/300')
      .then(res => {
        if (!res.ok) {
          throw new Error('fetch data error')
        }
        return res.blob()
      })
      .then(data => {
        const fileReader = new FileReader()
        fileReader.onload = () => {
          setUri(fileReader.result)
        }
        /**
         * 
         * 不推薦用 base64 當 image 的 src ：
         * 1. base64不能做資料緩存。
         * 2. 加大檔案大小增加載入時間。
         * 3. 載入速度會跟 user 網路有關，cdn 則是可以去連進的 server 拿取 context。
        */
        fileReader.readAsDataURL(data)
      })
  }, [])
  return (
    <div>
      ImageToBase64
      <img src={uri as string} />
      <img src="https://picsum.photos/200/300" alt="" />
    </div>
  )
}

export default ImageToBase64