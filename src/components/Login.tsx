import React, { FC,useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { MailIcon, PasswordIcon } from 'assets/icons/index';
import { changeAuthentication } from 'store/reducers';
import { useDispatch } from 'react-redux';
import { LoginProps } from './types';
import { POPUP_MESSAGES } from 'constants/popupMessages';
import { ICONS } from 'constants/icons';
import loginSchema from 'containers/login/validation';
import InputField from './InputField';
import Button from './Button';
import PopUp from './PopUp';

const Login: FC<LoginProps> = ({addLogin}) => {
    
    const dispatch =useDispatch();
    const [signUpErrorMessage, setSignUpErrorMessage]=useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm(
        {
            resolver: yupResolver(loginSchema),
        }
    );
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/sign-up');
    };

    return (
        <div className=" flex h-96 w-[27%] min-w-[400px] justify-center rounded-2xl bg-slate-50 p-10 shadow-2xl">
            <form onSubmit={handleSubmit(async (data) => {
                const loginResponse = await addLogin(data);
                if('error' in loginResponse)
                {
                dispatch(changeAuthentication('false'));
                setSignUpErrorMessage(true);
                }
                else{
                dispatch(changeAuthentication('true'));
                }
                reset();
            })}>
                <div className="flex  flex-col">
                    <div className="pb-5 text-center font-sans text-3xl">LOGIN</div>
                    <div className="flex flex-row">
                        <MailIcon className="mt-6 h-5 w-5" fill=" #1DACD6" />
                        <InputField registerFunction={register} placeholder="E-mail"
                            registerName='email' type='string' value='' />
                    </div>
                    <p className='pl-10 font-sans text-xs normal-case 
                                text-red-600'>{errors.email?.message}</p>

                    <div className="flex flex-row">
                        <PasswordIcon className="mt-6 h-5 w-5 " fill="#1DACD6" />
                        <InputField registerFunction={register} placeholder="Password"
                            registerName='password' type='password' value='' />
                    </div>
                    <p className='pl-10 font-sans text-xs normal-case 
                                text-red-600'>{errors.password?.message}</p>

                    <div className="flex justify-center pt-2">
                        <Button type="submit" 
                                buttonClass='w-36 bg-brightCelurean text-white hover:bg-sky-400  bg-brightsCelurean' 
                                text='Login' />
                    </div>
                    <div className="flex justify-center pt-2 text-xs">
                        <div className="">New User?</div>
                        <div onClick={handleSignUp} className="cursor-pointer pl-1 text-brightsCelurean">Sign Up</div>
                    </div>
                    {signUpErrorMessage && (
                        <PopUp description={POPUP_MESSAGES.login} popUpStyle=' mx-auto
                        rounded-xl border-2 mt-20 fixed inset-0 h-16 
                        w-[15%] min-w-[450px] border-rose-600 bg-red-50' icon={ICONS.error}></PopUp>
                    )}
                </div>
            </form>
        </div>

    );
};

export default Login;
