import React from 'react'
import { data } from '../../utils/data'
const About = () => {
  const { title, description } = data
  return (
    <div>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default About
