import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { UpdateEmployeeProps } from './types';
import { POPUP_MESSAGES } from 'constants/popupMessages';
import { changePopup } from 'store/popupReducer';
import updateEmployeeSchema from 'containers/update-employee/validation';
import Label from './Label';
import Button from './Button';
import DropdownMenu from './DropdownMenu';
import InputField from './InputField';
import FileInput from './FileInput';
import Loader from './Loader';


const UpdateEmployee: FC<UpdateEmployeeProps> = (props) => {

    const { roleList, departmentList, addFile, updateData, getEmployeeDetails, data, isLoading, error } = props;

    const dispatch = useDispatch();
    const [file, setfiles] = useState(null);
    const navigate = useNavigate();
    const urlId = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm(
        {
            resolver: yupResolver(updateEmployeeSchema),
            defaultValues:
            {
                name: '',
                username: '',
                age: 0,
                street: '',
                city: '',
                state: '',
                role_id: 0,
                department_id: 0,
                email: '',
                file: null,
                is_active: true,
            }
        }
    );
    useEffect(() => {
        getEmployeeDetails(urlId.id);
    }, [urlId]);
    useEffect(() => {
        let defaultValues = {

            name: data?.name,
            username: data?.username,
            age: data?.age,
            street: data?.Address.street,
            city: data?.Address.city,
            state: data?.Address.state,
            role_id: data?.Role.id,
            department_id: data?.department_id,
            email: data?.email,
            file: data?.id_proof,
            is_active: data?.is_active,
        };
        reset(defaultValues);
    }, [data, reset]);
   
    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        const payload = {
            types: 'failure',
            description: POPUP_MESSAGES.loadingError
        };
        dispatch(changePopup(payload));
    }

    return (
        <div className='mx-auto mt-6 flex flex-initial  '>
            <div className=' m-4 mx-auto h-[1200px]  overflow-auto
             rounded-xl bg-white shadow-xl lg:h-[650px] lg:w-[90%] '>
                <form onSubmit={handleSubmit(async (updatedData) => {
                    const updateId = parseInt(urlId.id);
                    const updateEmployeeResponse = await updateData({ body: updatedData, id: updateId });
                    if ('error' in updateEmployeeResponse) {
                        const payload = {
                            types: 'failure',
                            description: POPUP_MESSAGES.duplicateDepartment
                        };
                        dispatch(changePopup(payload));
                    }
                    else {
                        if (file) {
                            const formData = new FormData();
                            formData.append('name', file?.name);
                            formData.append('file', file);
                            addFile({ body: formData, id: updateId });
                        }
                        const payload = {
                            types: 'success',
                            description: POPUP_MESSAGES.updationSuccess
                        };
                        dispatch(changePopup(payload));
                        reset();
                        navigate('/employee-list');
                    }
                })}>
                    <div className='p-2  xl:flex'>
                        <div className='flex-wrap xl:w-1/3 xl:flex-initial'>
                            <Label name='Employee Name' />
                            <InputField registerFunction={register} placeholder='Employee Name'
                                registerName='name' type='string' value={data?.name} />
                            <p className='pl-6 font-sans text-xs normal-case 
                        text-red-600'>{errors.name?.message}</p>
                        </div>
                        <div className=' w-1/3 flex-initial '>
                            <Label name='User Name' />
                            <InputField registerFunction={register} placeholder='User Name'
                                registerName='username' type='string' value={data?.username} />
                            <p className='pl-6 font-sans text-xs normal-case
                         text-red-600'>{errors.username?.message}</p>
                        </div>
                        <div className=' w-1/3 flex-initial ' >
                            <Label name='Age' />
                            <InputField registerFunction={register} placeholder='Age'
                                registerName='age' type='number' value={data?.age} />
                            <p className='pl-6 font-sans text-xs normal-case 
                        text-red-600'>{errors.age?.message} </p>
                        </div>
                    </div>
                    <div className='p-2  xl:flex'>
                        <div className='w-1/3 flex-initial '>
                            <Label name='Street' />
                            <InputField registerFunction={register} placeholder='Street'
                                registerName='street' type='string' value={data?.Address.street} />
                            <p className='pl-6 font-sans text-xs normal-case
                         text-red-600'>{errors.street?.message}</p>
                        </div>
                        <div className='w-1/3 flex-initial '>
                            <Label name='City' />
                            <InputField registerFunction={register} placeholder='City'
                                registerName='city' type='string' value={data?.Address.city} />
                            <p className='pl-6 font-sans text-xs normal-case 
                        text-red-600'>{errors.city?.message}</p>
                        </div>
                        <div className='w-1/3 flex-initial ' >
                            <Label name='State' />
                            <InputField registerFunction={register} placeholder='State'
                                registerName='state' type='string' value={data?.Address.state} />
                            <p className='pl-6 font-sans text-xs normal-case
                         text-red-600'>{errors.state?.message}</p>
                        </div>
                    </div>
                    <div className='p-2  xl:flex'>
                        <div className='w-1/3 flex-initial '>
                            <Label name='E-mail' />
                            <InputField registerFunction={register} placeholder='E-Mail'
                                registerName='email' type='string' value={data?.email} />
                            <p className='pl-6 font-sans text-xs normal-case
                                 text-red-600'>{errors.email?.message}</p>
                        </div>
                        <div className='w-1/3 flex-initial  '>
                            <Label name='Role' />
                            <DropdownMenu registerFunction={register} registerName='role' dropdownData={roleList}
                                defaults={data?.Role.role} />
                            <p className='pl-6 font-sans text-xs normal-case 
                        text-red-600'> {errors.role_id?.message}</p>
                        </div>

                        <div className=' w-1/3 flex-initial' >
                            <Label name='Department' />
                            <DropdownMenu registerFunction={register}
                                registerName='department' dropdownData={departmentList}
                                defaults={data?.Department.name} />
                            <p className='pl-6 font-sans text-xs normal-case 
                        text-red-600'>{errors.department_id?.message}</p>
                        </div>
                    </div>
                    <div className='p-2 xl:flex'>
                        <div className='flex-wrap xl:w-1/3 xl:flex-initial '>
                            <FileInput registerFunction={register} registerName='file' setFiles={setfiles} files={file}
                                defaultFileText={data?.id_proof} />
                        </div>
                    </div>
                    <div className='flex p-2'>
                        <div className='ml-2 flex-initial'>
                            <Button type="submit"
                                buttonClass='w-36 bg-brightCelurean text-white hover:bg-brightsCelurean 
                                    border border-blue-500'
                                text='Update'
                            />
                        </div>
                        <div className='flex-initial'>
                            <Button type="reset"
                                buttonClass='w-36 bg-white text-black hover:bg-white border 
                                border-zinc-900 hover:border-indigo-300'
                                text='Cancel'
                                handleClick={() => navigate('/employee-list')} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEmployee;


