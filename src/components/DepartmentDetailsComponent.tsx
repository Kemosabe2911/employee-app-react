import React,{FC} from 'react';

import { DEPARTMENT_DETAIL_ITEM as department } from 'constants/departmentDetailItem';

const DepartmentDetailsComponent: FC = () => {
    return(
        <div className="m-12 grid h-[110px] w-[1400px] grid-cols-4 gap-x-8 gap-y-4 
        rounded-xl border-y-2 bg-white p-5 text-sm font-semibold">
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-600">Department Name</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{department.departmentName}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-600">Department Id</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{department.departmentId}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-600">Head Count</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{department.headCount}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-lg font-bold text-gray-600">Location</div>
                <div className="pl-1 pt-1 text-sm font-normal text-gray-500">{department.location}</div>
                </div>
        </div>
    );
};
export default DepartmentDetailsComponent;