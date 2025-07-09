import React from 'react'
import { ProjectData } from '../../utils/data'
import Image from 'next/image'
const Project = async () => {


  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 min-w-0'>
        {
          ProjectData.map((item, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image
                  src={item.url}
                  alt={item.title}
                  width={400}
                  height={200}
                  style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.title}</p>
                <a href={item.href} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  open
                </a>
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Project
