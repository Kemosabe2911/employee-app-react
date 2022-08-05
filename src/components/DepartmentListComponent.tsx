import React, { FC } from 'react';

import { EditIcon } from 'assets/icons';
import { DepartmentListProps } from './types';

const DepartmentListComponent: FC<DepartmentListProps> = ({ department }) => {

    return (
        <tr
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
    );
};

export default DepartmentListComponent;