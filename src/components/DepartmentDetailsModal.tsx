import { ICONS } from 'constants/icons';
import React from 'react';

const DepartmentDetailsModal = (props) => {
    const { departmentDetailsData , setOpenDeptDetailsModal} = props;

    return (
        <div className='fixed inset-0 h-full w-full overflow-y-auto bg-gray-600/60 pl-20'>
            <div className='relative inset-x-36 top-60 mx-auto h-[260px]  w-[598px] rounded-md  bg-white
                       opacity-100 shadow-lg'>
                <div className='flex bg-brightsCelurean p-3 pt-3  pb-6 shadow-xl'>
                    <div className='w-full flex-initial text-center'>
                    <p className=' pt-1 text-xl font-normal text-white'>
                        {departmentDetailsData?.name} Department </p>
                    </div>
                    <div className='ml-auto flex-initial rounded-full'>
                        <button type='button' onClick={()=>setOpenDeptDetailsModal(false)} className='cursor-pointer'>
                            <span className={`h-[20px]  w-[20px]  text-white transition 
                         duration-150 ease-in-out hover:text-gray-600 ${ICONS.fileInput}`} /></button>
                    </div>
                </div>
                <div className='m-5 ml-8'>
                    <div className='m-5 flex'>
                        <p className='mx-2 mt-1 flex-initial'> Department Code : </p>
                        <p className=' h-8 w-28 cursor-pointer rounded-2xl bg-paleRose p-1 text-center'>
                            {departmentDetailsData?.Department.department_code}</p>
                    </div>
                    <div className='m-5 flex'>
                        <p className='mx-2 flex-initial'>Department Room : </p>
                        <p className='flex-initial'> {departmentDetailsData?.Department.department_room}</p>
                    </div>
                    <div className='m-5 flex'>
                        <p className='mx-2 flex-initial'> Department Details Website : </p>
                        <p className='flex-initial duration-200 hover:text-lg
                             hover:text-blue-500 hover:underline'>{departmentDetailsData?.Department.website}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DepartmentDetailsModal;