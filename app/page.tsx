import React from 'react'
import Animetion from '@/components/Animetion'
import ProfileCard from '@/components/ProfileCard'

const Homepage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-bold text-2xl text-center mb-10">
        Welcome to Website PK Deve
      </h1>

      {/* Animation ที่ควรดัน card ได้ */}
      <div className="mb-10">
        <Animetion />
      </div>

      <div>
        <ProfileCard />
      </div>
    </div>
  )
}

export default Homepage
