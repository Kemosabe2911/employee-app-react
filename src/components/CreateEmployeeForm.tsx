import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import DropdownMenu from './DropdownMenu';
import InputField from './InputField';
import Label from './Label';
import Button from './Button';
import FileInput from './FileInput';
import { useAddEmployeeMutation, useAddFileMutation, useGetDepartmentListQuery, useGetRoleListQuery }
    from 'services/api';

const schema = yup.object({
    name: yup.string().required('Employee Name is a required field'),
    username: yup.string().required('User Name is a required field'),
    age: yup.number().max(99, 'Enter a valid age').min(18, 'Enter a valid age')
        .required().typeError('Age is a required field'),
    street: yup.string().required('Street is a required field'),
    city: yup.string().required('City is a required field'),
    state: yup.string().required('State is a required field '),
    email: yup.string().email('Not a valid e-mail id').required('E-mail is a required field'),
    role_id: yup.number().required().typeError('Role is a required field '),
    department_id: yup.number()
        .required().typeError('Department is a required field '),
});

const CreateEmployeeForm: FC = () => {

    const { data: DepartmentData } = useGetDepartmentListQuery();
    const { data: RoleData } = useGetRoleListQuery();
    const [addEmployee] = useAddEmployeeMutation();
    const [addFile] = useAddFileMutation();

    const { register, reset, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema),
        }
    );

    const navigate = useNavigate();
    const [file, setfiles] = useState(null);

    const dropdown1 = [];
    RoleData?.map(department => {
        dropdown1.push({
            'id': department.id,
            'name': department.role
        });
    });
    const dropdown2 = [];
    DepartmentData?.map(department => {
        dropdown2.push({
            'id': department.id,
            'name': department.name
        });
    });
   

    return (
        <div className='mx-auto mt-6 flex flex-initial '>
            <div className=' m-4 mx-auto h-[1200px] w-[55%] overflow-auto rounded-xl bg-white shadow-xl 
            md:h-[1000px] md:w-[90%] md:justify-center lg:h-[650px] lg:w-[90%]'>
                <form onSubmit={handleSubmit(async (SubmittedData) => {
                    if (SubmittedData) {
                        const addEmployeeResponse: any = await addEmployee(SubmittedData);
                        const formData = new FormData();
                        formData.append('name', file?.name);
                        formData.append('file', file);
                        addFile({ body: formData, id: addEmployeeResponse?.data?.id });
                    }
                    reset();
                    navigate('/employee-list');
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
                                dropdown={dropdown1} />
                            <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'> {errors.role_id?.message}</p>
                        </div>

                        <div className=' w-1/3 flex-initial' >
                            <Label name='Department' />
                            <DropdownMenu registerFunction={register}
                                registerName='department_id' dropdown={dropdown2} />
                            <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.department_id?.message}</p>
                        </div>
                    </div>
                    <div className='p-2 xl:flex'>
                        <div className='flex-wrap xl:w-1/3 xl:flex-initial '>
                            <FileInput setFiles={setfiles}  files={file} />
                        </div>
                    </div>
                    <div className='flex p-2'>
                        <div className='ml-2 flex-initial'>
                            <Button type="submit" bgcolor='w-36 bg-brightCelurean' textcolor='text-white'
                                bghover='hover:bg-brightsCelurean' text='Create' border='border border-blue-500' />
                        </div>
                        <div className='flex-initial'>
                            <Button type="reset" bgcolor='w-36 bg-white'
                                textcolor='text-black'
                                bghover='hover:bg-white' text='Cancel'
                                border='border border-zinc-900 '
                                onclick={() => navigate('/employee-list')} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployeeForm;