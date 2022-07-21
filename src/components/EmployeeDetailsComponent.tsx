import React, { FC } from 'react';

import { EMPLOYEE_DETAIL_ITEM as employee } from 'constants/employeeDetailItem';

const EmployeeDetailsComponent: FC = () => {

    return (
        <div className="m-12 grid h-[170px] w-[1400px] grid-cols-4 gap-x-8 gap-y-4 rounded-xl border-y-2 bg-white p-5">
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-600">Name</div>
                <div className="pl-1 pt-1 text-sm text-gray-500">{employee.name}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-600">User Name</div>
                <div className="pl-1 pt-1 text-sm text-gray-500">{employee.userName}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-600">Age</div>
                <div className="pl-1 pt-1 text-sm text-gray-500">{employee.age}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-600">Role</div>
                <div className="pl-1 pt-1 text-sm text-gray-500">{employee.role}</div>
                </div>
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-600">Status</div>
                <div className="pl-1 pt-1 text-sm text-gray-500">{employee.status}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-600">Department Id</div>
                <div className="pl-1 pt-1 text-sm text-gray-500">{employee.departmentId}</div>
                </div>
        </div>
    );
};
export default EmployeeDetailsComponent;
