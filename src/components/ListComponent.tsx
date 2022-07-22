import React from 'react';

import { EMPLOYEE_DETAIL_ITEM as employees } from 'constants/employeeDetailItem';

const ListComponent = () => {
    return (
        <>
            <div className="m-3 ml-10 flex h-20 w-[95%] flex-wrap rounded-xl bg-gray-100 p-4 shadow-xl">
                <div className="w-1/6 flex-initial pl-3 pt-3 ">
                    Employee Name
                </div>
                <div className="w-1/6 flex-initial  pt-3 ">
                    User Name
                </div>
                <div className="w-1/6 flex-initial  pt-3">
                    Age
                </div>
                <div className="w-1/6 flex-initial  pt-3">
                    Role
                </div>
                <div className="w-1/6 flex-initial pt-3">
                    Status
                </div>
                <div className="w-1/6  flex-initial pt-3">
                    Department ID
                </div>
            </div>
            {employees.map(employee => {
                return (
                    <div className="m-2 ml-10 flex h-16 w-[95%] rounded-xl bg-white p-2" key={employee.name}>
                        <div className="w-1/6 flex-initial pl-5 pt-1  text-gray-600">
                            {employee.name}
                        </div>
                        <div className="w-1/6 flex-initial pt-1 pl-4  text-gray-600">
                            {employee.userName}
                        </div>
                        <div className="w-1/6 flex-initial pt-1 pl-2 text-gray-600">
                            {employee.age}
                        </div>
                        <div className="w-1/6 flex-initial pt-1  text-gray-600">
                            {employee.role}
                        </div>
                        <div className="w-1/6 flex-initial pt-1  text-gray-600">
                            {employee.status}
                        </div>
                        <div className="w-1/6  flex-initial pt-1 pl-8 text-gray-600">
                            {employee.departmentId}
                        </div>
                    </div>
                );
            })}
        </>

    );

};
export default ListComponent;