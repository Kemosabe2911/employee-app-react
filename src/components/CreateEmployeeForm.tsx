import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import DropdownMenu from './DropdownMenu';
import InputField from './InputField';
import Label from './Label';
import Button from './Button';
import FileInput from './FileInput';
// import FileInput from './FileInput';

const schema = yup.object({
    employeeName: yup.string().required('Employee Name is a required field'),
    userName: yup.string().required('User Name is a required field'),
    age: yup.number().max(99, 'Enter a valid age').min(18, 'Enter a valid age')
    .required().typeError('Age is a required field'),
    street: yup.string().required('Street is a required field'),
    city: yup.string().required('City is a required field'),
    state: yup.string().required('State is a required field '),
    email: yup.string().email('Not a valid e-mail id').required('E-mail is a required field'),
    role: yup.string().required(),
    department: yup.string().required(),
    

});

const CreateEmployeeForm: FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema),
        }
    );
    const navigate=useNavigate();

    // const handleUpload=()=>{
    //     // console.log('HO');
    // };

    const dropdown1 = ['HR', 'Developer', 'Admin', 'Trainee'];
    const dropdown3 = ['Product Engineering', 'Human Resource', 'Finance'];

    return (
        
            <div className='mx-auto mt-6 flex flex-initial'>
                <div className=' m-4 mx-auto h-[1200px]  rounded-xl bg-white shadow-xl lg:h-[650px] lg:w-[90%]'>
                    <form onSubmit={handleSubmit(() => { //data
                        // console.log('data:',data);
                        reset();
                    })}>
                        <div className='p-2  xl:flex'>
                            <div className='flex-wrap xl:w-1/3 xl:flex-initial '>
                                <Label name='Employee Name' />
                                <InputField registerFunction={register} placeholder='Employee Name'
                                registerName='employeeName' type='string' value='' />
                                <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.employeeName?.message}</p>
                            </div>
                            <div className=' flex-wrap xl:w-1/3 xl:flex-initial '>
                                <Label name='User Name' />
                                <InputField registerFunction={register} placeholder='User Name' 
                                registerName='userName' type='string' value=''/>
                                <p className='pl-6 font-sans text-xs normal-case
                                 text-red-600'>{errors.userName?.message}</p>
                            </div>
                            <div className='flex-wrap xl:w-1/3 xl:flex-initial  ' >
                                <Label name='Age' />
                                <InputField registerFunction={register} placeholder='Age' 
                                registerName='age' type='number' value='' />
                                <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.age?.message} </p>
                            </div>
                        </div>
                        <div className='p-2 xl:flex'>
                            <div className='flex-wrap xl:w-1/3 xl:flex-initial '>
                                <Label name='Street' />
                                <InputField registerFunction={register} placeholder='Street' 
                                registerName='street' type='string'  value=''/>
                                <p className='pl-6 font-sans text-xs normal-case
                                 text-red-600'>{errors.street?.message}</p>
                            </div>
                            <div className='w-1/3 flex-initial '>
                                <Label name='City' />
                                <InputField registerFunction={register} placeholder='City' 
                                registerName='city' type='string'  value=''/>
                                <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.city?.message}</p>
                            </div>
                            <div className='w-1/3 flex-initial ' >
                                <Label name='State' />
                                <InputField registerFunction={register} placeholder='State' 
                                registerName='state' type='string'  value=''/>
                                <p className='pl-6 font-sans text-xs normal-case
                                 text-red-600'>{errors.state?.message}</p>
                            </div>
                        </div>
                        <div className='p-2 xl:flex'>
                        <div className='w-1/3 flex-initial '>
                                <Label name='E-mail' />
                                <InputField registerFunction={register} placeholder='E-Mail' 
                                registerName='email' type='string'  value=''/>
                                <p className='pl-6 font-sans text-xs normal-case
                                 text-red-600'>{errors.email?.message}</p>
                            </div>
                            <div className='flex-wrap xl:w-1/3 xl:flex-initial  '>
                                <Label name='Role' />
                                <DropdownMenu registerFunction={register} registerName='role' dropdown={dropdown1} 
                                defaults='Admin'/>
                                <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'> {errors.role?.message}</p>
                            </div>
                        
                            <div className=' w-1/3 flex-initial' >
                                <Label name='Department' />
                                <DropdownMenu registerFunction={register} 
                                registerName='department' dropdown={dropdown3}   defaults='' />
                                <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.department?.message}</p>
                            </div>
                        </div>
                        <div className='p-2 xl:flex'>
                        <div className='flex-wrap xl:w-1/3 xl:flex-initial '>
                                 <FileInput />
                            </div>
                            </div>
                        <div className='flex p-2'>
                            <div className='ml-2 flex-initial'>
                                <Button types="submit" bgcolor='w-36 bg-brightCelurean' textcolor='text-white' 
                                bghover='hover:bg-brightsCelurean' text='Create' border='border border-blue-500' />
                            </div>
                            <div className='flex-initial'>
                                <Button types="reset" bgcolor='w-36 bg-white' 
                                textcolor='text-black' 
                                bghover='hover:bg-white' text='Cancel' 
                                border='border border-zinc-900 hover:border-brightCelurean'
                                onclick={()=>navigate('/employee-list')} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
};
export default CreateEmployeeForm;