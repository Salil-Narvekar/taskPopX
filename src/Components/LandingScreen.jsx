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
        <div className="flex flex-col min-h-dvh bg-gray-100">
            <div className="flex-grow"></div>
            
            <div className="grid grid-cols-1 gap-4 justify-items-center px-4 py-8 md:justify-items-start md:px-8">
                <div className="text-center">
                    <HeaderText text="Welcome to PopX" />
                    <SubHeaderText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit," />
                </div>
                <div className="grid grid-rows-1 md:grid-cols-2 gap-2 w-full">
                    <Button
                        name="createAccount"
                        buttonLable="Create Account"
                        color="primary"
                        onClick={() => navigate('/signupScreen')}
                        className="w-full"
                    />
                    <Button
                        name="login"
                        buttonLable="Already Registered? Login"
                        color="gray"
                        onClick={() => navigate('/loginScreen')}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default LandingScreen