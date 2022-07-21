import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import DropdownMenu from './DropdownMenu';
import InputField from './InputField';
import Label from './Label';
import Button from './Button';

const schema = yup.object({
    employeeName: yup.string().required('Employee Name is a required field'),
    userName: yup.string().required('User Name is a required field'),
    age: yup.number().min(18, 'Enter a valid age').max(99, 'Enter a valid age')
    .required().typeError('Age is a required field'),
    street: yup.string().required('Street is a required field'),
    city: yup.string().required('City is a required field'),
    state: yup.string().required('State is a required field '),
    role: yup.string().required(),
    department: yup.string().required(),
    status: yup.string().required(),

});

const CreateEmployeeComponent: FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema),
        }
    );

    const dropdown1 = ['HR', 'Developer', 'Admin'];
    const dropdown2 = ['Active', 'Inactive'];
    const dropdown3 = ['Product Engineering', 'Human Resource', 'Finance'];

    return (
        <div className='flex'>
            {/* <div className='flex-initial w-2/5 mt-40'/> */}
            <div className='m-6 mt-40 w-3/5 flex-initial'>
                {/* <div className='p-2 m-2 rounded-lg bg-white shadow-xl h-24'>
                    <h2 className='p-4 pl-4 m-4 mb-3 font-sans text-2xl font-semibold'>Create Employee</h2>
                </div> */}
                <div className='m-2 h-[500px] rounded-lg bg-white shadow-xl'>
                    <form onSubmit={handleSubmit(() => {
                        // <form onSubmit={handleSubmit((data) => { 
                        //     console.log(data);
                        reset();
                    })}>
                        <div className='flex p-2'>
                            <div className='w-1/3 flex-initial'>
                                <Label name='Employee Name' />
                                <InputField registerFunction={register} 
                                placeholder='Employee Name' registerName='employeeName' type='string' />
                                <p className='pl-6 font-sans text-xs normal-case text-red-600'>
                                    {errors.employeeName?.message}</p>
                            </div>
                            <div className='w-1/3 flex-initial'>
                                <Label name='User Name' />
                                <InputField registerFunction={register} 
                                placeholder='User Name' registerName='userName' type='string' />
                                <p className='pl-6 font-sans text-xs normal-case text-red-600'>
                                    {errors.userName?.message}</p>
                            </div>
                            <div className='w-1/3 flex-initial' >
                                <Label name='Age' />
                                <InputField registerFunction={register} 
                                placeholder='Age' registerName='age' type='number' />
                                <p className='pl-6 font-sans text-xs normal-case text-red-600'>{errors.age?.message}</p>
                            </div>
                        </div>
                        <div className='flex p-2'>
                            <div className='w-1/3 flex-initial'>
                                <Label name='Street' />
                                <InputField registerFunction={register} placeholder='Street' 
                                registerName='street' type='string' />
                                <p className='pl-6 font-sans text-xs normal-case text-red-600'>
                                    {errors.street?.message}</p>
                            </div>
                            <div className='w-1/3 flex-initial'>
                                <Label name='City' />
                                <InputField registerFunction={register} placeholder='City' 
                                registerName='city' type='string' />
                                <p className='pl-6 font-sans text-xs normal-case text-red-600'>
                                    {errors.city?.message}</p>
                            </div>
                            <div className='w-1/3 flex-initial' >
                                <Label name='State' />
                                <InputField registerFunction={register} placeholder='State'
                                 registerName='state' type='string' />
                                <p className='pl-6 font-sans text-xs normal-case text-red-600'>
                                    {errors.state?.message}</p>
                            </div>
                        </div>
                        <div className='flex p-2'>
                            <div className='w-1/3 flex-initial '>
                                <Label name='Role' />
                                <DropdownMenu registerFunction={register} registerName='role' dropdown={dropdown1} />
                                <p className='pl-6 font-sans text-xs normal-case text-red-600'> 
                                {errors.role?.message}</p>
                            </div>
                            <div className='w-1/3 flex-initial'>
                                <Label name='Status' />
                                <DropdownMenu registerFunction={register} registerName='status' dropdown={dropdown2} />
                                <p className='pl-6 font-sans text-xs normal-case text-red-600'>
                                    {errors.status?.message}</p>
                            </div>
                            <div className='w-1/3 flex-initial' >
                                <Label name='Department' />
                                <DropdownMenu registerFunction={register} registerName='department' 
                                dropdown={dropdown3} />
                                <p className='pl-6 font-sans text-xs normal-case text-red-600'>
                                    {errors.department?.message}</p>
                            </div>
                        </div>
                        <div className='flex p-2 '>
                            <div className='ml-6 flex-initial'>
                                <Button types="submit" bgcolor='bg-blue-500' textcolor='text-white' 
                                bghover='hover:bg-blue-700' text='Create' border='border border-blue-500' />
                            </div>
                            <div className='flex-initial'>
                                <Button types="reset" bgcolor='bg-white' textcolor='text-black' 
                                bghover='hover:bg-white' text='Cancel'
                                 border='border border-zinc-900 focus:border-indigo-300' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default CreateEmployeeComponent;