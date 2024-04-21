import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { LoggedUserDetails } from '../App';
import HeaderText from './HeaderText'
import SubHeaderText from './SubHeaderText'
import Button from './Button'

const LandingScreen = () => {
    const navigate = useNavigate();
    const loggedUserDetails = useContext(LoggedUserDetails);

    useEffect(() => {
        loggedUserDetails.dispatch({ type: "setInitialState" });
    }, [])

    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex-grow'></div>
            <div className='grid grid-rows-2 gap-2 justify-items-start pl-4 pr-4 pb-8 overflow-x-hidden'>
                <div>
                    <HeaderText text='Welcome to PopX' />
                    <SubHeaderText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,' />
                </div>
                <div className='grid grid-rows-2 gap-2 w-full'>
                    <Button name='createAccount' buttonLable='Create Account' color='primary' onClick={() => navigate('/signupScreen')} />
                    <Button name='login' buttonLable='Already Registered ? Login' color='grey' onClick={() => navigate('/loginScreen')} />
                </div>
            </div>
        </div>
    )
}

export default LandingScreen