import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { columns } from 'constants/ListHeader';
import DeleteModal from './DeleteModal';
import { DeleteIcon, EditIcon } from 'assets/icons/index';
import PopUp from './PopUp';
import { useGetDepartmentListQuery, useGetEmployeeListQuery, useGetRoleListQuery } from 'services/api';

const ListComponent: FC = () => {
    const { data, error, isLoading  } = useGetEmployeeListQuery();

    const { data: DepartmentData } = useGetDepartmentListQuery();
    const { data: RoleData } = useGetRoleListQuery();

    const [deleteClicked, setDelete] = useState<boolean>(false);
    const [clickedId, setclickedId] = useState<number>(0);


    const navigate = useNavigate();
    const handleDelete = (clicked:number) => { 
        setclickedId(clicked);
        setDelete(true);
    };

    const handleEdit = (id:number) => {
        navigate('/update-employee/' + id);
    };
    const handleEmployeeDetailsClick = (id:number) => {
        navigate('/employee-details/' + id);
    };

    if (isLoading){
        return<div>Loading</div>;
    }

    if (error){
        return<PopUp description={'Cannot load Employee List'} margin={'absolute inset-x-0 bottom-16 '}></PopUp>;
    }

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
                {data?.map(employee => {
                    return (
                        <tbody key={employee.id} className='m-10'>
                            <tr className=" m-4 h-4 rounded-xl bg-white"></tr>
                            <tr
                                className=" m-4 h-14 rounded-xl bg-white shadow-md" >

                                <td onClick={() => handleEmployeeDetailsClick(employee.id)}
                                    className='m-2 ml-4 cursor-pointer p-4 text-center'>   {employee.name}</td>
                                <td className='p-4 text-center'>   {employee.username}</td>
                                <td className='p-4 text-center'>   {employee.age}</td>
                                <td className='p-4 text-center'>  
                                 {RoleData?.map(role =>{
                                    if(employee.role_id===role.id)
                                      return role.role;
                                 })

                                 }</td>
                                <td className=' px-10 text-right lg:px-4 lg:text-left xl:px-7 2xl:px-12'>
                                    <div className={` h-8 w-28  rounded-2xl p-1 text-center
                                                     ${(employee.is_active) ? 'bg-teaGreen' : 'bg-paleRose'}
                                                     text-left md:w-28 lg:w-16 2xl:w-28`}>
                                                   {employee.is_active ? 'Active' : 'Inactive'}
                                    </div> 
                                </td>
                                <td className='p-4 text-center' > {DepartmentData?.map(department =>{
                                    if(employee.department_id===department.id)
                                      return department.name;
                                 })

                                 }</td>
                                <td className='p-4 text-center'>
                                    <button onClick={() => handleDelete(employee.id)}>
                                        <DeleteIcon />
                                    </button>
                                    {deleteClicked && (
                                        <DeleteModal setDelete={setDelete} clickedId={clickedId} />)
                                    }
                                    <button className="pl-5" onClick={() => handleEdit(employee.id)}>
                                        <EditIcon />
                                    </button></td>
                            </tr>
                        </tbody>
                    ); })}
            </table>
        </>
    );
};

export default ListComponent;