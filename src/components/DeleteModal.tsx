import React, { FC } from 'react';

import { DeleteModalProps } from './types';
import Button from './Button';

const DeleteModal: FC<DeleteModalProps> = (props) => {

    const { setDelete, selectedId, handleDeleteEmployee, primaryText, secondaryText } = props;

    return (
        <div className='fixed inset-0  h-full w-full overflow-y-auto  bg-gray-200/10'>
            <div className='relative inset-x-36 top-60 mx-auto h-[209px] w-[400px] rounded-md border
            bg-white p-5 text-center opacity-100 shadow-lg'>
                <p className='p-1 text-2xl font-normal'>{primaryText}</p>
                <p className='p-1 text-lg font-normal'>{secondaryText}</p>
                <div className='flex'>
                    <div className='w-1/2 flex-initial text-right'>
                        <Button type="button"
                            buttonClass='w-[117px] bg-brightCelurean text-white hover:bg-brightsCelurean
                                 border border-blue-500'
                            text='Confirm'
                            handleClick={() => handleDeleteEmployee(selectedId)} />
                    </div>
                    <div className='w-1/2 flex-initial text-left'>
                        <Button type="button"
                            buttonClass='w-[117px] bg-white text-black hover:bg-white border border-zinc-900
                                hover:border-brightCelurean'
                            text='Cancel'
                            handleClick={() => setDelete(false)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;