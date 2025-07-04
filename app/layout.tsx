import Navbar from '@/components/Navbar'
import React from 'react'
import './globals.css'
import TitleConten from '@/components/TitleConten'
import { Github } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Geist } from 'next/font/google'

import type { Metadata } from 'next';

export const metaData :Metadata = {
title: "Resume",
description:" Resume be for apply for work",
keywords:"Apply for work, Resume , In lao Apply",
}


const geist = Geist({
  subsets: ['latin'],
})
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang='en' className={geist.className}>
        <body className='bg-gray-100'>

          <div className="mx-auto mt-14 max-w-6xl grid grid-cols-[40fr_60fr] min-h-screen px-4">
            {/* Sidebar / Navbar */}
            <div className="relative">
              <div className="sticky top-14 h-[calc(100vh-3.5rem)]">
                <div className="grid grid-rows-[35%_40%_25%] h-full">
                  <div><TitleConten /></div>
                  <div><Navbar /></div>
                  <div>
                    <div className="flex gap-2">
                      <a href='https://github.com/Anan020' target='_blank' className="border-2 p-1 rounded-full"><Github className='text-lg'/></a>
                      <a href='https://www.facebook.com/m.nuchin.kkm/' target='_blank' className="border-2 p-1 rounded-full"><Facebook className='text-lg'/></a>
                      <a href='https://www.youtube.com/@Lifestyle-b5x' target='_blank' className="border-2 p-1 rounded-full"><Youtube className='text-lg'/></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mb-96">
              {children}
            </div>
          </div>


        </body>
      </html>
    </>
  )
}

export default layout
