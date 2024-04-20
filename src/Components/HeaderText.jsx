import React from 'react'

const HeaderText = ({ text }) => {
    return (
        <div className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-3xl text-left text-slate-800 w-7/12 md:w-full lg:w-full xl:w-full'>
            {text}
        </div>
    )
}

export default HeaderText