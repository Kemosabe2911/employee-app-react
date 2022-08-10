import React, { FC } from 'react';

import { EditIcon } from 'assets/icons';
import { DepartmentListProps } from './types';

const DepartmentListComponent: FC<DepartmentListProps> = (props) => {

    const { department, setOpenDeptDetailsModal, setClickedDepartmentId,
        setUpdateDeptModal, setSelectedEditDepartment } = props;

    const handleClick = (clickedDepartmentId) => {
        setOpenDeptDetailsModal(true);
        setClickedDepartmentId(clickedDepartmentId);
    };
    const handleEditClick = (id) => {
        setUpdateDeptModal(true);
        setSelectedEditDepartment(id);
    };

    return (
        <>
            <tr className=" mt-3 ml-14 flex h-14  w-[90%] min-w-[550px] gap-10 
                            bg-white p-5 text-center shadow-xl ">
                <td className="w-1/5">{department.id}</td>
                <td onClick={() => handleClick(department.id)} className="ml-4 w-1/5 cursor-pointer text-center
                                     duration-300 hover:scale-110">{department.name}</td>
                <td className="w-1/5  cursor-pointer no-underline duration-200 hover:text-lg
                             hover:text-blue-500 hover:underline">
                    {department.Department.website}</td>
                <td className="w-1/5">{department.Department.department_room}</td>
                <td className="w-1/5">
                    <button className="duration-200 hover:animate-wiggle">
                        <EditIcon onClick={() => handleEditClick(department.id)} />
                    </button>
                </td>
            </tr>
        </>
    );
};

export default DepartmentListComponent;