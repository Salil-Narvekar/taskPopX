import React from 'react'

const SubHeaderText = ({text}) => {
  return (
    <div className='font-medium text-md md:text-lg lg:text-xl text-left text-slate-400 w-5/6 md:w-full lg:w-full xl:w-full'>
        {text}
    </div>
  )
}

export default SubHeaderText