import React from 'react'
import Animetion from '@/components/Animetion'
import ProfileCard from '@/components/ProfileCard'
const Homepage = () => {
  return (
    <div>
      <h1 className='font-bold text-xl'>Wellcome to Website PK deve</h1>
      <div className='mt-14'>
        <Animetion/>
      </div>
      <div className='mt-16'>
        <ProfileCard/>
      </div>
    </div>
  )
}

export default Homepage
