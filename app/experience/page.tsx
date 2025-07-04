import React from 'react'
import { DataExperience } from '../../utils/data'
const Experience = () => {
  // console.log(DataExperience)
  const { titleOne, titleTwo, titleThree, titleFour, title } = DataExperience
  return (
    <>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div>
        <li>{titleOne}</li>
      </div>
      <div>
        <li>{titleTwo}</li>
      </div>
      <div>
        <li>{titleThree}</li>
      </div>
      <div>
        <li>{titleFour}</li>
      </div>
    </>
  )
}

export default Experience
