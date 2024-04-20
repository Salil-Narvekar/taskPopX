import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";

const DisplayPicture = () => {
    return (
        <div>
            <FaUserCircle className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl' />
            <div className='grid justify-items-center content-center rounded-3xl z-2 relative 
                h-6 w-6 ml-10 -mt-6 
                md:h-7 md:w-7 md:ml-11 md:-mt-6
                lg:h-8 lg:w-8 lg:ml-16 lg:-mt-7
                xl:h-9 xl:w-9 xl:ml-20 xl:-mt-8'
                style={{ backgroundColor: '#7140CC' }}
            >
                <FaCamera className='text-white text-sm md:text-md lg:text-lg xl:text-xl' />
            </div>
        </div>
    )
}

export default DisplayPicture