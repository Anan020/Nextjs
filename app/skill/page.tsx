import React from 'react'
import { SkillData } from '../../utils/data'
const Skill = () => {

  // console.log(SkillData)
  return (
    <div>
      <h2 className='font-bold text-2xl'>Skill</h2>
      <div>
        {
          SkillData.map((item, index) => (
            <div key={index}>
              <hr className='my-2' />
              <h3 className='text-xl font-bold'>{item.role}</h3>
              <ul>
                {
                  item.description.map((skill, ins) => (
                    <li key={ins}>{skill}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skill
