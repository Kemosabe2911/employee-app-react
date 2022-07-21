import React, { FC } from 'react';

import { EMPLOYEE_DETAIL_ITEM as employee } from 'constants/employeeDetailItem';

const EmployeeDetailsComponent: FC = () => {

    return (
        <div className="m-12 grid h-[170px] w-[1400px] grid-cols-4 gap-x-8 gap-y-4 rounded-xl border-y-2 bg-white p-5">
            <div className="flex flex-col">
                <div className="text-base font-bold">Name</div>
                <div className="text-sm">{employee[0].name}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-base font-bold">User Name</div>
                <div className="text-sm">{employee[0].userName}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-base font-bold">Age</div>
                <div className="text-sm">{employee[0].age}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-base font-bold">Role</div>
                <div className="text-sm">{employee[0].role}</div>
                </div>
            <div className="flex flex-col">
                <div className="text-base font-bold">Status</div>
                <div className="text-sm">{employee[0].status}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-base font-bold">Department Id</div>
                <div className="text-sm">{employee[0].departmentId}</div>
                </div>
        </div>
    );
};
export default EmployeeDetailsComponent;
