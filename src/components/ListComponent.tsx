import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { columns } from 'constants/ListHeader';
import DeleteModal from './DeleteModal';
import { DeleteIcon, EditIcon } from 'assets/icons/index';
import { useGetDepartmentListQuery, useGetRoleListQuery } from 'services/api';
import { ListComponentProps } from './types';
import StatusModal from './StatusModal';

const ListComponent: FC<ListComponentProps> = ({ status , EmployeeList}) => {

    const { data: DepartmentData } = useGetDepartmentListQuery();
    const { data: RoleData } = useGetRoleListQuery();

    const [deleteSelected, setDelete] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number>(0);
    const [idStatus, setIdStatus] = useState<number>(0);

    const navigate = useNavigate();
    const handleDelete = (clicked: number) => {
        setSelectedId(clicked);
        setDelete(true);
    };

    const [openStatusModal, setStatusModal] = useState<boolean>(false);

    const handleEdit = (id: number) => {
        navigate('/update-employee/' + id);
    };
    const handleEmployeeDetailsClick = (id: number) => {
        navigate('/employee-details/' + id);
    };
    const handleStatusChange = (statusClickedId) => {
        setStatusModal(true);
        setIdStatus(statusClickedId);
    };

    const filterItem = (list) => {
        let booleanStatus;
        if (status == '1')
            booleanStatus = true;
        else if (status == '0')
            booleanStatus = false;

        if (booleanStatus == list.is_active || status == null)
            return list;
    };

    return (
        <>
            <table className='mx-auto mt-10 w-[96%] table-fixed align-middle md:table-auto'>
                <thead>
                    <tr className=" h-[60px] rounded-xl bg-aliceBlue shadow-xl" >
                        {columns.map(column => {
                            return (
                                <th className='w-[200px] p-4 text-center text-base 
                                font-normal' key={column}> {column}</th>
                            );
                        })}
                    </tr>
                </thead>
                { 
                EmployeeList?.filter(list => filterItem(list)).map(employee => {
                    return (
                        <tbody key={employee.id} className='m-10'>
                            <tr className=" m-4 h-4 rounded-xl bg-white"></tr>
                            <tr
                                className=" m-4 h-14 rounded-xl bg-white shadow-md" >

                                <td onClick={() => handleEmployeeDetailsClick(employee.id)}
                                    className='m-2 ml-4 cursor-pointer p-4 text-center
                                     duration-300 hover:scale-110'>   {employee.name}</td>
                                <td className='p-4 text-center'>   {employee.username}</td>
                                <td className='p-4 text-center'>   {employee.age}</td>
                                <td className='p-4 text-center'>
                                    {RoleData?.map(role => {
                                        if (employee.role_id === role.id)
                                            return role.role;
                                    })

                                    }</td>
                                <td
                                    className=' px-10 text-right lg:px-4 lg:text-left xl:px-7 2xl:px-12'>
                                    <div onClick={() => handleStatusChange(employee.id)}
                                        className={` h-8 w-28  cursor-pointer rounded-2xl p-1 text-center
                                                     ${(employee.is_active) ? 'bg-teaGreen' : 'bg-paleRose'}
                                                     text-left duration-300 hover:scale-110 md:w-28 lg:w-16 2xl:w-28`}>
                                        {employee.is_active ? 'Active' : 'Inactive'}
                                    </div>
                                </td>
                                <td className='p-4 text-center' > {DepartmentData?.map(department => {
                                    if (employee.department_id === department.id)
                                        return department.name;
                                })

                                }</td>
                                <td className='p-4 text-center'>
                                    <button onClick={() => handleDelete(employee.id)}>
                                        <DeleteIcon className="hover:animate-wiggle" />
                                    </button>
                                    {deleteSelected && (
                                        <DeleteModal setDelete={setDelete} selectedId={selectedId} />)
                                    }
                                    <button className="pl-5 hover:animate-wiggle"
                                        onClick={() => handleEdit(employee.id)}>
                                        <EditIcon />
                                    </button></td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
            {openStatusModal &&
                <StatusModal idStatus={idStatus} setStatusModal={setStatusModal} />
            }
        </>
    );
};

export default ListComponent;