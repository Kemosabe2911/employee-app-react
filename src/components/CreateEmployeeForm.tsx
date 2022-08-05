import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { CreateEmployeeProps } from './types';
import { POPUP_MESSAGES } from 'constants/popupMessages';
import DropdownMenu from './DropdownMenu';
import InputField from './InputField';
import Label from './Label';
import Button from './Button';
import FileInput from './FileInput';
import PopUp from './PopUp';
import createEmployeeSchema from 'containers/create-employee/validation';

const CreateEmployeeForm: FC<CreateEmployeeProps> = (props) => {
    const { addEmployee, addFile, roleList, departmentList } = props;
    const { register, reset, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(createEmployeeSchema),
        }
    );
    const navigate = useNavigate();
    const [file, setfiles] = useState(null);
    const [errorMessage, setErrorMessage] = useState(false);

    return (
        <div className='mx-auto mt-6 flex flex-initial '>
            <div className=' m-4 mx-auto h-[1200px] w-[55%] overflow-auto rounded-xl bg-white shadow-xl 
            md:h-[1000px] md:w-[90%] md:justify-center lg:h-[650px] lg:w-[90%]'>
                <form onSubmit={handleSubmit(async (SubmittedData) => {
                    const addEmployeeResponse = await addEmployee(SubmittedData);
                    if ('error' in addEmployeeResponse) {
                        setErrorMessage(true);
                    }
                    else {
                        if (file) {
                            const formData = new FormData();
                            formData.append('name', file?.name);
                            formData.append('file', file);
                            addFile({ body: formData, id: addEmployeeResponse?.data?.id });
                        }
                        reset();
                        navigate('/employee-list');
                    }
                })}>
                    <div className=' p-2 md:justify-center  xl:flex'>
                        <div className='flex-wrap xl:w-1/3 xl:flex-initial '>
                            <Label name='Employee Name' />
                            <InputField registerFunction={register} placeholder='Employee Name'
                                registerName='name' type='string' value='' />
                            <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.name?.message}</p>
                        </div>
                        <div className=' flex-wrap xl:w-1/3 xl:flex-initial '>
                            <Label name='User Name' />
                            <InputField registerFunction={register} placeholder='User Name'
                                registerName='username' type='string' value='' />
                            <p className='pl-6 font-sans text-xs normal-case
                                 text-red-600'>{errors.username?.message}</p>
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
                                registerName='street' type='string' value='' />
                            <p className='pl-6 font-sans text-xs normal-case
                                 text-red-600'>{errors.street?.message}</p>
                        </div>
                        <div className='w-1/3 flex-initial '>
                            <Label name='City' />
                            <InputField registerFunction={register} placeholder='City'
                                registerName='city' type='string' value='' />
                            <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.city?.message}</p>
                        </div>
                        <div className='w-1/3 flex-initial ' >
                            <Label name='State' />
                            <InputField registerFunction={register} placeholder='State'
                                registerName='state' type='string' value='' />
                            <p className='pl-6 font-sans text-xs normal-case
                                 text-red-600'>{errors.state?.message}</p>
                        </div>
                    </div>
                    <div className='p-2 xl:flex'>
                        <div className='w-1/3 flex-initial '>
                            <Label name='E-mail' />
                            <InputField registerFunction={register} placeholder='E-Mail'
                                registerName='email' type='string' value='' />
                            <p className='pl-6 font-sans text-xs normal-case
                                 text-red-600'>{errors.email?.message}</p>
                        </div>
                        <div className='flex-wrap xl:w-1/3 xl:flex-initial  '>
                            <Label name='Role' />
                            <DropdownMenu registerFunction={register} registerName='role_id'
                                dropdownData={roleList} />
                            <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'> {errors.role_id?.message}</p>
                        </div>
                        <div className=' w-1/3 flex-initial' >
                            <Label name='Department' />
                            <DropdownMenu registerFunction={register}
                                registerName='department_id' dropdownData={departmentList} />
                            <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.department_id?.message}</p>
                        </div>
                    </div>
                    <div className='p-2 xl:flex'>
                        <div className='flex-wrap xl:w-1/3 xl:flex-initial '>
                            <FileInput setFiles={setfiles} files={file} />
                        </div>
                    </div>
                    <div className='flex p-2'>
                        <div className='ml-2 flex-initial'>
                            <Button type="submit"
                                buttonClass='w-36 bg-brightCelurean text-white hover:bg-brightsCelurean
                                                 border border-blue-500'
                                text='Create' />
                        </div>
                        <div className='flex-initial'>
                            <Button type="reset"
                                buttonClass='w-36 bg-white text-black hover:bg-white 
                                                              border border-zinc-900'
                                text='Cancel'
                                handleClick={() => navigate('/employee-list')} />
                        </div>
                        {errorMessage && (
                            <PopUp description={POPUP_MESSAGES.duplicateUser}
                                margin='absolute inset-x-0 bottom-6 h-16 w-[15%] min-w-[500px]
                         border-rose-600 bg-red-50'/>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployeeForm;