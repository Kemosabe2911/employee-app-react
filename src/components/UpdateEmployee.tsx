import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Label from './Label';
import Button from './Button';
import DropdownMenu from './DropdownMenu';
import InputField from './InputField';
import { useUpdateEmployeeMutation, useGetEmployeeListQuery } from 'services/api';
import { useLazyGetEmployeeDetailsQuery } from 'services/api';
import FileInput from './FileInput';
// import { UpdateEmployeeForm } from './types';

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
    status: yup.boolean().required(),

});


const UpdateEmployee: FC = () => {

    const { data: employeeListData } = useGetEmployeeListQuery();

    const dropdown1 = [];
    employeeListData?.map(employee => {
        if (dropdown1.length == 0)
            dropdown1.push({
                'Id': employee.Role.Id,
                'name': employee.Role.role
            });
        dropdown1?.map(dropdown => {
            if (employee.Role.Id != dropdown.Id)
                dropdown1.push({
                    'Id': employee.Role.Id,
                    'name': employee.Role.role
                });
        });
    });

    const dropdown2 = [];
    employeeListData?.map(employee => {
        if (dropdown2.length == 0)
            dropdown2.push({
                'Id': employee.Department.Id,
                'name': employee.Department.name
            });
        dropdown2?.map(dropdown => {
            if (employee.Department.Id != dropdown.Id)
                dropdown2.push({
                    'Id': employee.Department.Id,
                    'name': employee.Department.name
                });
        });
    });

    const urlId = useParams();
    const [getEmployeeDetails, { data: data }] =
        useLazyGetEmployeeDetailsQuery();


    useEffect(() => {
        getEmployeeDetails(urlId.id);
    }, [urlId]);

    const [updateData] = useUpdateEmployeeMutation();


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
                status: false,

            }
        }
    );

    useEffect(() => {
        let defaultValues = {

            name: data?.name,
            username: data?.Username,
            age: data?.age,
            street: data?.Address.street,
            city: data?.Address.city,
            state: data?.Address.state,
            role_id: data?.Role.Id,
            department_id: data?.department_id ,
            status: data?.is_active,
        };
        reset(defaultValues);
    },[data,reset]);
    

    // const dropdown1 = ['HR', 'Developer',  'Admin',  'Trainee', 'FE'];
    // const dropdown2 = ['Product Engineering', 'Human Resource', 'Finance'];
    const navigate = useNavigate();

    return (
        <div className='mx-auto mt-6 flex flex-initial  '>
            <div className=' m-4 mx-auto h-[1200px]  rounded-xl bg-white shadow-xl lg:h-[650px] lg:w-[90%] '>
                <form onSubmit={handleSubmit((data1) => {
                    // console.log('Update:' , data1);
                    const ID = parseInt(urlId.id);
                    updateData({ body: data1, id: ID} );
                    reset();
                    navigate('/employee-list');
                })}>
                    <div className='p-2  xl:flex'>
                        <div className='flex-wrap xl:w-1/3 xl:flex-initial '>
                            <Label name='Employee Name' />
                            <InputField registerFunction={register} placeholder='Employee Name'
                                registerName='name' type='string' value={data?.name} />
                            <p className='pl-6 font-sans text-xs normal-case 
                        text-red-600'>{errors.name?.message}</p>
                        </div>
                        <div className=' w-1/3 flex-initial '>
                            <Label name='User Name' />
                            <InputField registerFunction={register} placeholder='User Name'
                                registerName='username' type='string' value={data?.Username} />
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
                        {/* <div className='w-1/3 flex-initial '>
                            <Label name='E-mail' />
                            <InputField registerFunction={register} placeholder='E-Mail'
                                registerName='email' type='string' value={data?.Email} />
                            <p className='pl-6 font-sans text-xs normal-case
                                 text-red-600'>{errors.email?.message}</p>
                        </div> */}
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
                            <FileInput />
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