'use client'
import React, { useState, useEffect } from 'react'
import { texts } from '@/utils/data'

const Animetion = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const currentText = texts[textIndex]
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1))
      } else {
        setText(currentText.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 2000)
      }

      if (isDeleting && text === '') {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % texts.length)
      }
    }, isDeleting ? 40 : 60)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, textIndex])

  return (
    <div className='text-green-600 whitespace-pre-line break-words min-h-[120px]'>
      {text}
      <span className='animate-pulse'>|</span>
    </div>
  )
}

export default Animetion
