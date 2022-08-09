import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CreateDepartmentProps } from './types';
import { POPUP_MESSAGES } from 'constants/popupMessages';
import { ICONS } from 'constants/icons';
import createDepartmentSchema from 'containers/create-department/validation';
import Label from './Label';
import InputField from './InputField';
import Button from './Button';
import PopUp from './PopUp';

const CreateDepartmentComponentModal: FC<CreateDepartmentProps> = ({ setPopUpCreate, addDepartment }) => {

    const [errorMessage, setErrorMessage] = useState(false);

    const { register, reset, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(createDepartmentSchema)
        }
    );

    return (
        <div className='fixed inset-0  h-full w-full overflow-y-auto  bg-gray-600/60'>
            <div className='relative inset-x-36 top-32 mx-auto  w-[400px] rounded
        bg-white   opacity-100 shadow-xl'>
                <form onSubmit={handleSubmit(async data => {
                    const addDepartmentResponse = await addDepartment(data);
                    if ('error' in addDepartmentResponse) {
                        setErrorMessage(true);
                    }
                    else {
                        setPopUpCreate(false);
                        reset();
                    }
                })}>
                    <div className="flex flex-row  bg-brightsCelurean shadow-xl">
                        <div className="h-20 w-[400px] pl-5 pt-8 pb-2 text-xl 
                            font-semibold text-white ">
                            Create a new Department</div>
                        <div className="pt-2 pr-2">
                            <button type='button' onClick={() => setPopUpCreate(false)} className='cursor-pointer'>
                                <span className={`h-[20px]  w-[20px]  text-white transition 
                         duration-150 ease-in-out hover:text-gray-600 ${ICONS.fileInput}`} /></button>
                        </div>
                    </div>
                    {errorMessage && (
                        <PopUp description={POPUP_MESSAGES.duplicateDepartment}
                            popUpStyle='text-red-700 h-5' icon={ICONS.error} />
                    )}
                    <div className="pt-4 pl-6">
                        <Label name="Department Name"></Label>
                        <InputField registerFunction={register} placeholder="Department Name"
                            registerName='name' type="string" value="" />
                        <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.name?.message}</p>
                    </div>
                    <div className="pl-6">
                        <Label name="Department Room"></Label>
                        <InputField registerFunction={register} placeholder="Department Room"
                            registerName='department_room' type="string" value="" />
                        <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.department_room?.message}</p>
                    </div>
                    <div className="pl-6">
                        <Label name="Department Code"></Label>
                        <InputField registerFunction={register} placeholder="Department Code"
                            registerName='department_code' type="string" value="" />
                        <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.department_code?.message}</p>
                    </div>
                    <div className="pl-6">
                        <Label name="Website"></Label>
                        <InputField registerFunction={register} placeholder="Website"
                            registerName='website' type="string" value="" />
                        <p className='pl-6 font-sans text-xs normal-case 
                                text-red-600'>{errors.website?.message}</p>
                    </div>
                    <div className="mx-auto flex justify-center pt-6 pb-4">
                        <Button type="submit" buttonClass='w-[136px] bg-brightCelurean 
                        text-white hover:bg-sky-400 bg-brightsCelurean'
                            text='Create' />
                        <Button type='button'
                            buttonClass='w-[120px] bg-white text-black border border-zinc-900 '
                            text='Cancel'
                            handleClick={() => setPopUpCreate(false)} />
                    </div>
                    <div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateDepartmentComponentModal;