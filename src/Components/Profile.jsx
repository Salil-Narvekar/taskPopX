import React, { useContext, useEffect } from 'react'
import DisplayPicture from './DisplayPicture'
import { LoggedUserDetails } from '../App';
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();
    const loggedUserDetails = useContext(LoggedUserDetails);

    useEffect(() => {
        if (loggedUserDetails.loggedUser.name === undefined || !loggedUserDetails.loggedUser.name) {
            navigate('/landingScreen');
        }
    }, [loggedUserDetails, navigate])

    return (
        <div className='grid grid-rows-10 w-full min-h-dvh'>
            <div className='row-span-1 grid justify-items-start content-center text-lg font-medium bg-white text-black drop-shadow-md pl-4'>
                Account Settings
            </div>

            <div className='row-span-3 xl:row-span-4 grid justify-items-start pl-4 pt-8'>

                <div className='grid grid-cols-10 w-full'>
                    <div className='col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        <DisplayPicture />
                    </div>

                    <div className='grid grid-rows-2 justify-items-start text-xs md:text-sm lg:text-md xl:text-lg h-10 md:h-12 lg:h-12 xl:h-16 ml-2'>
                        <span className='font-bold'>
                            {
                                loggedUserDetails.loggedUser.name ? loggedUserDetails.loggedUser.name : 'Salil Narvekar'
                            }
                        </span>

                        <span className='font-semibold text-slate-500'>
                            {
                                loggedUserDetails.loggedUser.email
                            }

                        </span>
                    </div>
                </div>

                <span className='grid justify-items-start font-medium text-xs md:text-sm lg:text-md xl:text-lg text-left text-slate-500'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr. Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam </span>
            </div>

            <div className='row-span-5 xl:row-span-4 border-b border-t border-t-2 border-b-2 border-dashed'></div>
        </div>
    )
}

export default Profile