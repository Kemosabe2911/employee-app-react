import React from 'react';

import Button from './Button';

const StatusModal = (props) => {

    const { statusclicked, setStatusModal,updateStatus,EmployeeListData} = props;
    const changedEmployee = EmployeeListData?.filter(employee => employee.id === statusclicked)[0];

    const handleChange = () => {
        let changeTo = {
            is_active: !(changedEmployee.is_active),
        };
        updateStatus({ body: changeTo, id: statusclicked });
        setStatusModal(false);
    };

    return (
        <div className='fixed inset-0  h-full w-full overflow-y-auto  bg-gray-600/60'>
            <div className='relative inset-x-36 top-80 mx-auto h-[175px] w-[400px] rounded-md border
        bg-white p-5 text-center opacity-100 shadow-lg'>
                <p className="py-4 text-center text-lg">
                    Change the status of {changedEmployee.name} to
                    {(changedEmployee.is_active) ? 'Inactive' : 'Active'} ?</p>
                <div className='flex'>
                    <div className='w-1/2 flex-initial text-right'>
                        <Button type="button"
                            buttonClass='w-36 bg-brightCelurean text-white hover:bg-sky-400 bg-brightsCelurean'
                            text='Yes' handleClick={handleChange}
                        />
                    </div>
                    <div className='w-1/2 flex-initial text-left'>
                        <Button type='button' 
                                buttonClass='w-36 bg-white text-black border border-zinc-900' 
                                text='Cancel'
                                handleClick={() => setStatusModal(false)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusModal;