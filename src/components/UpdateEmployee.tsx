import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Label from './Label';
import Button from './Button';
import DropdownMenu from './DropdownMenu';
import InputField from './InputField';
import { useUpdateEmployeeMutation, useGetDepartmentListQuery, useGetRoleListQuery,
         useAddFileMutation } from 'services/api';
import { useLazyGetEmployeeDetailsQuery } from 'services/api';
import FileInput from './FileInput';

const schema = yup.object({
    name: yup.string().required('Employee Name is a required field'),
    username: yup.string().required('User Name is a required field'),
    age: yup.number().max(99, 'Enter a valid age').min(18, 'Enter a valid age')
        .required().typeError('Age is a required field'),
    street: yup.string().required('Street is a required field'),
    city: yup.string().required('City is a required field'),
    state: yup.string().required('State is a required field '),
    role_id: yup.number().required(),
    department_id: yup.number().required(),
    email: yup.string().email('Not a valid e-mail id').required('E-mail is a required field'),
    file: yup.mixed().required('File is a required field'),   
});

const UpdateEmployee: FC = () => {

    const { data: DepartmentData } = useGetDepartmentListQuery();
    const { data: RoleData } = useGetRoleListQuery();
    const [addFile] = useAddFileMutation();
    const [updateData] = useUpdateEmployeeMutation();
    
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

    const urlId = useParams();
    const [getEmployeeDetails, { data: data }] = useLazyGetEmployeeDetailsQuery();
    useEffect(() => {
        getEmployeeDetails(urlId.id);
    }, [urlId]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema),
            defaultValues:
            {
                name: '',
                username: '',
                age: 0,
                street: '',
                city: '',
                state: '',
                role_id: 0,
                department_id:0,
                email:'',
                file:null,
                is_active:true,
            }
        }
    );

    useEffect(() => {
        let defaultValues = {

            name: data?.name,
            username: data?.username,
            age: data?.age,
            street: data?.Address.street,
            city: data?.Address.city,
            state: data?.Address.state,
            role_id: data?.Role.id,
            department_id: data?.department_id ,
            email: data?.email,
            file:data?.id_proof,
            is_active:data?.is_active,
        };
        reset(defaultValues);
    },[data,reset]);
    
    const navigate = useNavigate();

    return (
        <div className='mx-auto mt-6 flex flex-initial  '>
            <div className=' m-4 mx-auto h-[1200px]  rounded-xl bg-white shadow-xl lg:h-[650px] lg:w-[90%] '>
                <form onSubmit={handleSubmit((updatedData) => {
                    const updateId = parseInt(urlId.id);
                    updateData({ body: updatedData, id: updateId} );
                    const formData = new FormData();
                    formData.append('name', file?.name);
                    formData.append('file', file);
                    addFile({ body: formData, id: updateId });
                    reset();
                    navigate('/employee-list');
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
                            <DropdownMenu registerFunction={register} registerName='role' dropdown={dropdown1}
                                defaults={data?.Role.role} />
                            <p className='pl-6 font-sans text-xs normal-case 
                        text-red-600'> {errors.role_id?.message}</p>
                        </div>

                        <div className=' w-1/3 flex-initial' >
                            <Label name='Department' />
                            <DropdownMenu registerFunction={register}
                                registerName='department' dropdown={dropdown2} defaults={data?.Department.name} />
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
                            <Button type="submit" bgcolor='w-36 bg-brightCelurean' textcolor='text-white'
                                bghover='hover:bg-brightsCelurean' text='Update' border='border border-blue-500'
                            />
                        </div>
                        <div className='flex-initial'>
                            <Button type="reset" bgcolor='w-36 bg-white'
                                textcolor='text-black'
                                bghover='hover:bg-white' text='Cancel'
                                border='border border-zinc-900 hover:border-indigo-300'
                                onclick={() => navigate('/employee-list')} />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};
export default UpdateEmployee;