import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import InputField from './InputField';
import Button from './Button';
import { MailIcon, PasswordIcon } from 'assets/icons/index';
import { useAddLoginMutation } from 'services/api';
import { changeAuthentication } from 'store/reducers';
import { useDispatch } from 'react-redux';


const schema = yup.object({
    email: yup.string().email('Not a valid e-mail id').required('Enter your e-mail'),
    password: yup.string()
        .required('Enter your password')
});
const Login: FC = () => {

    const dispatch =useDispatch();

    
    const { register, handleSubmit, reset, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema),
        }
    );

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/sign-up');
    };

    const [addLogin] = useAddLoginMutation();

    return (
        <div className=" flex h-96 w-[27%] min-w-[400px] justify-center rounded-2xl bg-slate-50 p-10 shadow-2xl">
            <form onSubmit={handleSubmit(async (data) => {
                addLogin(data);
                const loginResponse = await addLogin(data);
                if('error' in loginResponse)
                {
                dispatch(changeAuthentication('false'));
             
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
                        <Button type="submit" bgcolor='w-36 bg-brightCelurean' textcolor='text-white'
                            bghover='hover:bg-sky-400' text='Login' border='bg-brightsCelurean' />
                    </div>
                    <div className="flex justify-center pt-2 text-xs">
                        <div className="">New User?</div>
                        <div onClick={handleSignUp} className="cursor-pointer pl-1 text-brightsCelurean">Sign Up</div>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default Login;
