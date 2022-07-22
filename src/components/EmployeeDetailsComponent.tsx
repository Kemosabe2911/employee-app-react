import React, { FC } from 'react';

import { EMPLOYEE_DETAIL_ITEM as employee } from 'constants/employeeDetailItem';

const EmployeeDetailsComponent: FC = () => {

    return (
        <div className="ml-16 mt-12 flex  w-[83%] flex-wrap gap-x-48 gap-y-4 
        rounded-xl  bg-white p-5 shadow-xl">
            <div className="flex w-[150px] flex-col">
                <div className="text-lg font-bold text-gray-600">Name</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{employee[0].name}</div>
            </div>
            <div className="flex w-[150px] flex-col">
                <div className="text-lg font-bold text-gray-600">User Name</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{employee[0].userName}</div>
            </div>
            <div className="flex w-[150px] flex-col">
                <div className="text-lg font-bold text-gray-600">Age</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{employee[0].age}</div>
            </div>
            <div className="flex w-[150px] flex-col">
                <div className="text-lg font-bold text-gray-600">Role</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{employee[0].role}</div>
            </div>
            <div className="flex w-[150px] flex-col">
                <div className="text-lg font-bold text-gray-600">Status</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{employee[0].status}</div>
            </div>
            <div className="flex w-[150px] flex-col">
                <div className="text-lg font-bold text-gray-600">Department Id</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{employee[0].departmentId}</div>
            </div>
        </div>
    );
};
export default EmployeeDetailsComponent;
