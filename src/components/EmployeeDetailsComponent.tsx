import React, { FC } from 'react';

import { EmployeeDetailsProps } from './types';

const EmployeeDetailsComponent: FC<EmployeeDetailsProps> = ({ data }) => {

    return (
        <div>
            <div className="ml-16 mt-12 flex  w-[83%] flex-wrap gap-x-48 gap-y-4 
                                 rounded-xl  bg-white p-5 shadow-xl">
                <div className="flex w-[150px] flex-col">
                    <div className="text-lg font-bold text-gray-600">Id</div>
                    <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{data?.id}</div>
                </div>
                <div className="flex w-[150px] flex-col">
                    <div className="text-lg font-bold text-gray-600">User Name</div>
                    <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{data?.username}</div>
                </div>
                <div className="flex w-[150px] flex-col">
                    <div className="text-lg font-bold text-gray-600">Age</div>
                    <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{data?.age}</div>
                </div>
                <div className="flex w-[150px] flex-col">
                    <div className="text-lg font-bold text-gray-600">Role Id</div>
                    <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{data?.Role.role}</div>
                </div>
                <div className="flex w-[150px] flex-col">
                    <div className="text-lg font-bold text-gray-600">Status</div>
                    <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{
                        data?.is_active ? 'Active' : 'Not Active'}</div>
                </div>
                <div className="flex w-[150px] flex-col">
                    <div className="text-lg font-bold text-gray-600">Department</div>
                    <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{data?.Department.name}</div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetailsComponent;
