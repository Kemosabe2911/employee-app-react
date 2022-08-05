import React, { FC } from 'react';

import Button from './Button';
import { DeleteModalProps } from './types';

import { useDeleteEmployeeMutation } from 'services/api';

const DeleteModal: FC<DeleteModalProps> = (props) => {
    const { setDelete, selectedId } = props;

    const [deleteEmployee] = useDeleteEmployeeMutation();

    const handleDeleteEmployee = (clickedEmployeeId: number) => {
        deleteEmployee(clickedEmployeeId);
        setDelete(false);
    };

    return (
        <div className='fixed inset-0  h-full w-full overflow-y-auto  bg-gray-200/10'>
            <div className='relative inset-x-36 top-60 mx-auto h-[209px] w-[400px] rounded-md border
            bg-white p-5 text-center opacity-100 shadow-lg'>
                <p className='p-1 text-2xl font-normal'>Are You Sure?</p>
                <p className='p-1 text-lg font-normal'>Do you really want to delete employee?</p>
                <div className='flex'>
                    <div className='w-1/2 flex-initial text-right'>
                        <Button type="button" bgcolor='w-[117px] bg-brightCelurean' textcolor='text-white'
                            bghover='hover:bg-brightsCelurean' text='Confirm' border='border border-blue-500'
                            onclick={() => handleDeleteEmployee(selectedId)} />
                    </div>
                    <div className='w-1/2 flex-initial text-left'>
                        <Button type="button" bgcolor='w-[117px] bg-white'
                            textcolor='text-black'
                            bghover='hover:bg-white' text='Cancel'
                            border='border border-zinc-900 hover:border-brightCelurean'
                            onclick={() => setDelete(false)} />
                    </div>
                </div>
            </div>
        </div>
    );};
    
export default DeleteModal;