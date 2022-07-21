import React, { FC } from 'react';

import { DEPARTMENT_DETAIL_ITEM as department } from 'constants/departmentDetailItem';

const DepartmentDetailsComponent: FC = () => {
    return (
        <div className="ml-16 mt-12 flex  w-[86%] flex-wrap gap-x-48 gap-y-4 
        rounded-xl  bg-white p-5 shadow-xl">
            <div className="flex w-[160px] flex-col">
                <div className="text-lg font-bold text-gray-600">Department Name</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{department.departmentName}</div>
            </div>
            <div className="flex w-[160px] flex-col">
                <div className="text-lg font-bold text-gray-600">Department Id</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{department.departmentId}</div>
            </div>
            <div className="flex w-[160px] flex-col">
                <div className="text-lg font-bold text-gray-600">Head Count</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{department.headCount}</div>
            </div>
            <div className="flex w-[160px] flex-col">
                <div className="text-lg font-bold text-gray-600">Location</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{department.location}</div>
            </div>
        </div>
    );
};
export default DepartmentDetailsComponent;