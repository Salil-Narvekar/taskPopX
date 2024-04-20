import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LoggedUserDetails } from '../App';
import HeaderText from './HeaderText';
import Button from './Button';
import InputField from './InputField';
import ValidationMsg from './ValidationMsg';

const SignupScreen = () => {
    const navigate = useNavigate();
    const loggedUserDetails = useContext(LoggedUserDetails);

    const [signUpDetails, setSignUpDetails] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        companyName: '',
        agency: ''
    });

    const [validate, setValidate] = useState();
    const [validateEmail, setValidateEmail] = useState();

    const createAccount = () => {

        if (!signUpDetails.name || !signUpDetails.phone || !signUpDetails.email || !signUpDetails.password || !signUpDetails.agency) {

            setValidate(true);
        } else {

            setValidate(false);
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpDetails.email);

            if (!isValidEmail) {

                setValidateEmail(true);
            } else {

                setValidateEmail(false);
                loggedUserDetails.dispatch({
                    type: "login",
                    value: {
                        email: signUpDetails.email,
                        name: signUpDetails.name,
                    }
                });

                navigate('/profile')
                console.log("Account created Successfully with details ->", signUpDetails)
            }
        }
    }

    useEffect(() => {

        if (signUpDetails.name && signUpDetails.phone && signUpDetails.email && signUpDetails.password && signUpDetails.agency) {
            setValidate(false);
        }

    }, [signUpDetails])

    return (
        <div className='grid justify-items-start pl-4 pr-4 pb-8 pt-8 h-screen'>

            <div className='w-10/12 mb-4'>
                <HeaderText text='Create your PopX account' />
            </div>

            <div className='grid grid-rows-6 gap-2 w-full'>
                <InputField
                    name='name'
                    id='name'
                    label='Full name'
                    type='text'
                    placeholder='Enter full name'
                    starRequired='yes'
                    onChange={(e) => {
                        setSignUpDetails((prevSetDetails) => ({
                            ...prevSetDetails,
                            name: e.target.value
                        }));
                    }}
                />

                <InputField
                    name='phone'
                    id='phone'
                    label='Phone number'
                    type='tel'
                    maxLength={10}
                    placeholder='Enter phone number'
                    starRequired='yes'
                    onChange={(e) => {
                        setSignUpDetails((prevSetDetails) => ({
                            ...prevSetDetails,
                            phone: e.target.value
                        }));
                    }}
                />

                <InputField
                    name='email'
                    id='email'
                    label='Email Address'
                    type='email'
                    placeholder='Enter email address'
                    starRequired='yes'
                    onChange={(e) => {
                        setSignUpDetails((prevSetDetails) => ({
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
                    starRequired='yes'
                    onChange={(e) => {
                        setSignUpDetails((prevSetDetails) => ({
                            ...prevSetDetails,
                            password: e.target.value
                        }));
                    }}
                />

                <InputField
                    name='companyName'
                    id='companyName'
                    label='Company name'
                    type='text'
                    placeholder='Enter company name'
                    onChange={(e) => {
                        setSignUpDetails((prevSetDetails) => ({
                            ...prevSetDetails,
                            companyName: e.target.value
                        }));
                    }}
                />

                <div className='grid grid-rows-2 justify-items-start'>

                    <div className='text-xs font-bold text-slate-600'>
                        Are you an Agency? <span className='text-red-700'> *</span>
                    </div>

                    <div className='grid grid-cols-2 gap-2 text-xs font-bold text-slate-600'>
                        <label>
                            <input
                                type="radio"
                                name="agency"
                                value="Yes"
                                className="form-radio h-3 w-3"
                                checked={signUpDetails.agency === "Yes"}
                                onChange={(e) => {
                                    setSignUpDetails((prevSetDetails) => ({
                                        ...prevSetDetails,
                                        agency: e.target.value
                                    }));
                                }}
                            /> Yes
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="agency"
                                value="No"
                                className="form-radio h-3 w-3"
                                style={{ backgroundColor: 'transparent' }}
                                checked={signUpDetails.agency === "No"}
                                onChange={(e) => {
                                    setSignUpDetails((prevSetDetails) => ({
                                        ...prevSetDetails,
                                        agency: e.target.value
                                    }));
                                }}
                            /> No
                        </label>
                    </div>
                </div>
            </div>

            <div className='h-10 pt-4'>
                {
                    validate ?
                        <div className=''>
                            <ValidationMsg errorMsg="All * marked fields are required" />
                        </div>

                        : validateEmail &&
                        <div className=''>
                            <ValidationMsg errorMsg="Email should be in proper format abc@gamil.com" />
                        </div>
                }
            </div>

            <div className='w-full pt-10'>
                <Button
                    name='register'
                    buttonLable='Create Account'
                    color='primary'
                    onClick={() => {
                        createAccount();
                    }}
                />
            </div>
        </div >
    )
}

export default SignupScreen