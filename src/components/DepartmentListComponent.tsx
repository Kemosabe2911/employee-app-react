import React, { FC } from 'react';

import { EditIcon } from 'assets/icons';
import { DepartmentListProps } from './types';

const DepartmentListComponent: FC<DepartmentListProps> = ({ key, department }) => {

    return (
        <table className="mx-auto w-full min-w-[550px] table-auto">
            <thead>
                <tr className=" mt-8 ml-14 flex  h-16 w-[90%] min-w-[550px] gap-10
                 bg-aliceBlue p-5  text-center shadow-xl">
                    <th className="w-1/5 font-normal">Department Id</th>
                    <th className="w-1/5 font-normal">Department Name</th>
                    <th className="w-1/5 font-normal">Website</th>
                    <th className="w-1/5 font-normal">Location</th>
                    <th className="w-1/5 font-normal">Actions</th>
                </tr>
            </thead>
            <tbody>

                <tr key={key}
                    className=" mt-3 ml-14 flex h-14  w-[90%] min-w-[550px] gap-10 
                            bg-white p-5 text-center shadow-xl ">
                    <td className="w-1/5">{department.id}</td>
                    <td className="w-1/5">{department.name}</td>
                    <td className="w-1/5  cursor-pointer no-underline duration-200 hover:text-lg
                             hover:text-blue-500 hover:underline">
                        {department.Department.website}</td>
                    <td className="w-1/5">{department.Department.department_room}</td>
                    <td className="w-1/5">
                        <button className="duration-200 hover:animate-wiggle">
                            <EditIcon />
                        </button>
                    </td>
                </tr>


            </tbody>
        </table>
    );
};

export default DepartmentListComponent;