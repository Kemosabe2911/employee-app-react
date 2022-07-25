import React, { FC } from 'react';

import { DEPARTMENT_DETAIL_ITEM as department } from 'constants/departmentDetailItem';

const DepartmentDetailsComponent: FC = () => {
    return (
        <table className="table">
            <thead>
                <tr className="ml-32 mt-8  flex w-[100%] rounded-xl bg-white p-5 shadow-xl">
                    <th className="w-[250px] ">Department Name</th>
                    <th className="w-[250px]">Department Id</th>
                    <th className="w-[250px]">Head Count</th>
                    <th className="w-[250px]">Location</th>
                </tr>
            </thead>
            <tbody>
                <tr className="ml-32 mt-2 flex  w-[100%]  rounded-xl  bg-white p-5 shadow-xl">
                    <td className="w-[250px]">{department.departmentName}</td>
                    <td className="w-[250px]">{department.departmentId}</td>
                    <td className="w-[250px]">{department.headCount}</td>
                    <td className="w-[250px]">{department.location}</td>
                </tr>
            </tbody>
        </table>
      
        
    );
};
export default DepartmentDetailsComponent;