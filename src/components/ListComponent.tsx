import React from 'react';

import { EMPLOYEE_DETAIL_ITEM as employees } from 'constants/employeeDetailItem';
import { Delete_Icon as  deleted } from 'constants/moreItems';
import { Edit_Icon as edit } from 'constants/moreItems';

const ListComponent = () => {

    const handleDelete=()=>{
       // console.log('delete');
    };
    const handleEdit=()=>{
        // console.log('edit');
    };
    return (
        <>
            <div className="m-3 ml-10 flex h-20 w-[95%] rounded-xl bg-gray-100 p-4 shadow-xl">
                <div className="w-2/12 flex-initial pl-3 pt-3 ">
                    Employee Name
                </div>
                <div className="w-2/12 flex-initial  pt-3 ">
                    User Name
                </div>
                <div className="w-1/12 flex-initial  pt-3">
                    Age
                </div>
                <div className="w-2/12 flex-initial  pt-3">
                    Role
                </div>
                <div className="w-2/12 flex-initial pt-3">
                    Status
                </div>
                <div className="w-1/12  flex-initial pt-3">
                    Department ID
                </div>
                <div className="w-2/12  flex-initial pl-10 pt-3">
                    More
                </div>
            </div>
            {employees.map(employee => {
                return (
                    <div className="m-2 ml-10 flex h-16 w-[95%] rounded-xl bg-white p-2" key={employee.id}>
                        <div className="w-2/12 flex-initial pl-5 pt-3  text-gray-600">
                            {employee.name}
                        </div>
                        <div className="w-2/12 flex-initial pt-3 pl-4  text-gray-600">
                            {employee.userName}
                        </div>
                        <div className="w-1/12 flex-initial pt-3 pl-2 text-gray-600">
                            {employee.age}
                        </div>
                        <div className="w-2/12 flex-initial pt-3  text-gray-600">
                            {employee.role}
                        </div>
                        <div className="w-2/12 flex-initial pt-3  text-gray-600">
                            {employee.status}
                        </div>
                        <div className="w-1/12  flex-initial pt-3 pl-8 text-gray-600">
                            {employee.departmentId}
                        </div>
                        <div className="w-2/12  flex-initial pt-3 pl-8 text-gray-600">
                        <button onClick={handleDelete}>
                        <span className={`h-[15px] w-[15px] pr-[30px]  ${deleted}`} />
                        </button>
                        <button onClick={handleEdit}>
                        <span className={`h-[15px] w-[15px] pr-[30px] ${edit}`} />
                        </button>
                        </div>
                    </div>
                );
            })}
        </>

    );

};
export default ListComponent;