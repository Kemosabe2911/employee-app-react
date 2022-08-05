import React, { FC } from 'react';

import { DeleteIcon, EditIcon } from 'assets/icons';
import { useGetDepartmentListQuery } from 'services/api';
import PopUp from './PopUp';

const DepartmentListComponent: FC = () => {

    const { data ,error, isLoading} = useGetDepartmentListQuery();
    if (isLoading){
        return<div>Loading</div>;
    }
    if (error){
        return<PopUp description={'Cannot load Department List'} 
        margin={'absolute inset-x-0 bottom-16 h-16 w-[15%] min-w-[450px] border-rose-600 bg-red-50'}></PopUp>;
    }

    return (
        <table className="mx-auto w-full min-w-[450px] table-auto">
            <thead>
                <tr className=" mt-8 flex  h-16 w-[96%]  gap-10 bg-aliceBlue p-5  text-center shadow-xl">
                    <th className="w-1/5 font-normal">Department Id</th>
                    <th className="w-1/5 font-normal">Department Name</th>
                    <th className="w-1/5 font-normal">Website</th>
                    <th className="w-1/5 font-normal">Location</th>
                    <th className="w-1/5 font-normal">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data?.map(department => {
                    return (
                        <tr key={department.id}
                            className=" mt-3 flex h-14  w-[96%] gap-10  bg-white p-5 text-center shadow-xl ">
                            <td className="w-1/5">{department.id}</td>
                            <td className="w-1/5">{department.name}</td>
                            <td className="w-1/5  cursor-pointer no-underline duration-200 hover:text-lg
                             hover:text-blue-500 hover:underline">
                                {department.Department.website}</td>
                            <td className="w-1/5">{department.Department.department_room}</td>
                            <td className="w-1/5">
                                <button className="duration-200 hover:animate-wiggle">
                                    <DeleteIcon/>
                                </button>
                                <button className="pl-4 duration-200 hover:animate-wiggle">
                                    <EditIcon/>
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DepartmentListComponent;