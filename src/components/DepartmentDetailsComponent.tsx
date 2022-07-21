import React, { FC } from 'react';

import { DEPARTMENT_DETAIL_ITEM as department } from 'constants/departmentDetailItem';

const DepartmentDetailsComponent: FC = () => {
    return (
        <div className="m-12 grid h-[110px] w-[1400px] grid-cols-4 gap-x-8 gap-y-4 
        rounded-xl border-y-2 bg-white p-5 text-sm font-semibold">
            <div className="flex flex-col">
                <div className="text-base font-bold">Department Name</div>
                <div className="text-sm font-normal">{department.departmentName}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-base font-bold">Department Id</div>
                <div className="text-sm font-normal">{department.departmentId}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-base font-bold">Head Count</div>
                <div className="text-sm font-normal">{department.headCount}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-base font-bold">Location</div>
                <div className="text-sm font-normal">{department.location}</div>
            </div>
        </div>
    );
};
export default DepartmentDetailsComponent;