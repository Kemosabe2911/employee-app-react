import React, { FC } from 'react';

import { EMPLOYEE_DETAIL_ITEM as employee } from 'constants/employeeDetailItem';

const EmployeeDetailsComponent: FC = () => {

    return (
        <div className="grid gap-x-8 gap-y-4 grid-cols-4 m-12 w-[1400px] h-[170px] p-5 bg-white border-y-2 rounded-xl">
            <div className="flex flex-col">
                <div className="font-bold text-base">Name</div>
                <div className="text-sm">{employee.name}</div>
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-base">User Name</div>
                <div className="text-sm">{employee.userName}</div>
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-base">Age</div>
                <div className="text-sm">{employee.age}</div>
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-base">Role</div>
                <div className="text-sm">{employee.role}</div>
                </div>
            <div className="flex flex-col">
                <div className="font-bold text-base">Status</div>
                <div className="text-sm">{employee.status}</div>
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-base">Department Id</div>
                <div className="text-sm">{employee.departmentId}</div>
                </div>
        </div>
    );
}
export default EmployeeDetailsComponent;
