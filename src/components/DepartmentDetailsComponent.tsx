import React,{FC} from 'react';

import { DEPARTMENT_DETAIL_ITEM as department } from 'constants/departmentDetailItem';

const DepartmentDetailsComponent: FC = () => {
    return(
        <div className="grid gap-x-8 gap-y-4 grid-cols-4 m-12 w-[1400px] h-[110px] p-5 bg-white border-y-2 rounded-xl font-semibold text-sm">
            <div className="flex flex-col">
                <div className="font-bold text-base">Department Name</div>
                <div className="text-sm font-normal">{department.departmentName}</div>
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-base">Department Id</div>
                <div className="text-sm font-normal">{department.departmentId}</div>
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-base">Head Count</div>
                <div className="text-sm font-normal">{department.headCount}</div>
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-base">Location</div>
                <div className="text-sm font-normal">{department.location}</div>
                </div>
        </div>
    );
}
export default DepartmentDetailsComponent;