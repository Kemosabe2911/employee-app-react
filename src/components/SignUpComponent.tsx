import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { MailIcon, PasswordIcon, NameIcon, LastNameIcon, ConfirmPasswordIcon } from 'assets/icons/index';
import { useAddSignUpMutation } from 'services/api';
import { changeAuthentication } from 'store/reducers';
import { useDispatch } from 'react-redux';
import InputField from './InputField';
import Button from './Button';
import PopUp from './PopUp';


const schema = yup.object({
    email: yup.string().email('Not a valid e-mail id').required('E-mail is required'),
    first_name: yup.string().required('Name is required'),
    last_name: yup.string().required('Last Name is required'),
    password: yup.string().max(15, 'Atmost 15 characters').min(8, 'Atleast 8 characters')
        .required('Enter your password'),
    confirm_p: yup.string()
        .oneOf([yup.ref('password'), null], 'Password must match')
});


const SignUp: FC = () => {

    const [errorMessage, setErrorMessage] = useState(false);

    const dispatch = useDispatch();

    const { register, handleSubmit, reset, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema),
        }
    );
    const navigate = useNavigate();
    const [addSignUp] = useAddSignUpMutation();

    return (
        <div className=" flex h-full w-[28%] min-w-[400px] justify-center rounded-2xl bg-slate-50 p-10 shadow-2xl">
            <form onSubmit={handleSubmit(async (data) => {
                const signUpResponse = await addSignUp(data);
                if ('error' in signUpResponse) {
                    dispatch(changeAuthentication('false'));
                    setErrorMessage(true);
                }
                else {
                    dispatch(changeAuthentication('true'));
                }
                reset();
            })}>
                <div className="flex  flex-col">
                    <div className="pb-5 text-center font-sans text-3xl">SIGN UP</div>
                    <div className="mx-auto flex flex-row  ">
                        <MailIcon className="mt-6 h-5 w-5" fill=" #1DACD6" />
                        <InputField registerFunction={register} placeholder="E-mail"
                            registerName='email' type='string' value='' />
                    </div>
                    <p className='pl-10 font-sans text-xs normal-case 
                                text-red-600'>{errors.email?.message}</p>

                    <div className="mx-auto flex flex-row">
                        <NameIcon className="mt-6 h-5 w-5 " fill="#1DACD6" />
                        <InputField registerFunction={register} placeholder="First Name"
                            registerName='first_name' type='string' value='' />
                    </div>
                    <p className='pl-10 font-sans text-xs normal-case 
                                text-red-600'>{errors.first_name?.message}</p>

                    <div className="mx-auto flex flex-row">
                        <LastNameIcon className="mt-6 h-5 w-5 " fill="#1DACD6" />
                        <InputField registerFunction={register} placeholder="Last Name"
                            registerName='last_name' type='string' value='' />
                    </div>
                    <p className='pl-10 font-sans text-xs normal-case 
                                text-red-600'>{errors.last_name?.message}</p>

                    <div className="mx-auto flex flex-row">
                        <PasswordIcon className="mt-6 h-5 w-5 " fill="#1DACD6" />
                        <InputField registerFunction={register} placeholder="Password"
                            registerName='password' type='password' value='' />
                    </div>
                    <p className='pl-10 font-sans text-xs normal-case 
                                text-red-600'>{errors.password?.message}</p>

                    <div className="mx-auto flex flex-row">
                        <ConfirmPasswordIcon className="mt-6 h-5 w-5 " fill="#1DACD6" />
                        <InputField registerFunction={register} placeholder="Confirm Password"
                            registerName='confirm_p' type='password' value='' />
                    </div>
                    <p className='pl-10 font-sans text-xs normal-case 
                                text-red-600'>{errors.confirm_p?.message}</p>

                    <div className="mx-auto flex justify-center pt-2">
                        <Button type="submit" buttonClass='w-[136px] bg-brightCelurean 
                        text-white hover:bg-sky-400 bg-brightsCelurean'
                            text='Sign Up' />
                        <Button type='button'
                            buttonClass='w-[120px] bg-white text-black border border-zinc-900 '
                            text='Cancel'
                            handleClick={() => navigate('/login')} />
                    </div>
                    {errorMessage && (
                        <PopUp description="An account with this e-mail id already exists"
                            margin='mt-20 fixed inset-0 h-16 w-[15%] min-w-[450px] border-rose-600 bg-red-50'></PopUp>
                    )}
                </div>
            </form >
        </div >
    );
};

export default SignUp;
