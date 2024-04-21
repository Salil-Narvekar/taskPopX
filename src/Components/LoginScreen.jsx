import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LoggedUserDetails } from '../App';
import HeaderText from './HeaderText';
import SubHeaderText from './SubHeaderText';
import Button from './Button';
import InputField from './InputField';
import ValidationMsg from './ValidationMsg';

const LoginScreen = () => {
    const navigate = useNavigate();
    const loggedUserDetails = useContext(LoggedUserDetails);

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const [validate, setValidate] = useState();
    const [validateEmail, setValidateEmail] = useState();

    const login = () => {

        if (!credentials.email || !credentials.password) {

            setValidate(true);
        } else {

            setValidate(false);
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email);

            if (!isValidEmail) {

                setValidateEmail(true);
            } else {

                setValidateEmail(false);
                const username = credentials.email.split('@')[0];

                loggedUserDetails.dispatch({
                    type: "login",
                    value: {
                        email: credentials.email,
                        name: username,
                    }
                });

                navigate('/profile')
                console.log("Logged In Successfully with details ->", credentials)
            }

        }
    }

    useEffect(() => {

        if (credentials.email && credentials.password) {
            setValidate(false);
        }

    }, [credentials])

    return (
        <div className='grid gap-4 justify-items-start pl-4 pr-4 pb-8 pt-8'>

            <div>
                <HeaderText text='Signin to your PopX account' />
                <SubHeaderText text='Lorem ipsum dolor sit amet, consecteture adipiscing elit,' />
            </div>

            <div className='grid grid-rows-4 gap-2 w-full'>
                <InputField
                    name='email'
                    id='email'
                    label='Email Address'
                    type='text'
                    placeholder='Enter email address'
                    onChange={(e) => {
                        setCredentials((prevSetDetails) => ({
                            ...prevSetDetails,
                            email: e.target.value
                        }));
                    }}
                />

                <InputField
                    name='password'
                    id='password'
                    label='Password'
                    type='password'
                    placeholder='Enter password'
                    onChange={(e) => {
                        setCredentials((prevSetDetails) => ({
                            ...prevSetDetails,
                            password: e.target.value
                        }));
                    }}
                />

                <Button
                    name='login'
                    buttonLable='Login'
                    color='primary'
                    onClick={() => {
                        login();
                    }}
                />

                <div className='grid justify-items-start'>
                    {
                        validate && !credentials.email ?
                            <ValidationMsg errorMsg='Email Required' />

                            : validate && !credentials.password ?
                                <ValidationMsg errorMsg='Password Required' />

                                : validateEmail &&
                                <ValidationMsg errorMsg="Email should be in proper format abc@gamil.com" />
                    }
                </div>
            </div>

        </div>
    )
}

export default LoginScreen