import React from 'react'
import { ArrowBigDown } from 'lucide-react';
import Link from 'next/link';
const TitleConten = () => {
    return (
        <>
            <div >
                <h2 className='text-2xl font-bold'>PK Development</h2>
                <p className='max-w-1/2 my-2'>Hi, I'm Nuchin — I build clean and interactive websites. Let's connect!
                </p>
            </div>
            <div>
                <div className=" px-2 py-2 text-gl rounded-sm text-white inline-block font-bold bg-cyan-500 shadow-lg shadow-cyan-500/50 ">
                    <a
                        href='https://imgur.com/a/0DFemMJ'
                        target='_blink'
                       className='flex font-medium' 
                    >
                        View Resume
                        <span className='rotate-90'> <ArrowBigDown className='animate-bounce'/></span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default TitleConten
