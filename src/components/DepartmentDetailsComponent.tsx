import React, { FC } from 'react';

import { useGetDepartmentListQuery } from 'services/api';

const DepartmentDetailsComponent: FC = () => {

    const { data } = useGetDepartmentListQuery();

    return (
        <table className="mx-auto table-auto overflow-x-scroll">
            <thead>
                <tr className=" mt-8 flex  w-[100%] gap-20  bg-aliceBlue p-5 text-center  shadow-xl ">
                    <th className="w-48 font-normal">Department Id</th>
                    <th className="w-48 font-normal">Department Name</th>
                    <th className="w-48 font-normal">Website</th>
                    <th className="w-48 font-normal">Location</th>
                </tr>
            </thead>
            <tbody>
                {data?.map(department => {
                    return (
                        <tr key={department.id}
                            className=" mt-3 flex  h-14 w-[100%]  gap-20 bg-white  p-5 text-center shadow-xl ">
                            <td className="w-48">{department.id}</td>
                            <td className="w-48">{department.name}</td>
                            <td className="w-48">{department.Department.website}</td>
                            <td className="w-48">{department.Department.department_room}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export default DepartmentDetailsComponent;