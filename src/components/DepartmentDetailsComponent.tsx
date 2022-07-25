import React, { FC } from 'react';

import { DEPARTMENT_DETAIL_ITEM as departmentItems } from 'constants/departmentDetailItem';

const DepartmentDetailsComponent: FC = () => {
    return (
        <table className="mx-auto table-auto">
            <thead>
                <tr className=" mt-8 flex  w-[100%] gap-24  bg-aliceBlue p-5 text-center  shadow-xl ">
                    <th className="w-[250px] font-normal">Department Name</th>
                    <th className="w-[250px] font-normal">Department Id</th>
                    <th className="w-[250px] font-normal">Head Count</th>
                    <th className="w-[250px] font-normal">Location</th>
                </tr>
            </thead>
            <tbody>
                {departmentItems.map(department => {
                    return (
                        <div key={department.departmentId}>
                            <tr className=" mt-3 flex  w-[100%] gap-24  bg-white p-5  text-center shadow-xl">
                                <td className="w-[250px]">{department.departmentName}</td>
                                <td className="w-[250px]">{department.departmentId}</td>
                                <td className="w-[250px]">{department.headCount}</td>
                                <td className="w-[250px]">{department.location}</td>
                            </tr>
                        </div>
                    );
                })}
            </tbody>
        </table>


    );
};
export default DepartmentDetailsComponent;