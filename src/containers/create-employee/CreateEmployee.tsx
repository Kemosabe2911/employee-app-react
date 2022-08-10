import React, { FC } from 'react';

import CreateEmployeeForm from 'components/CreateEmployeeForm';
import MainBar from 'components/MainBar';
import { useAddEmployeeMutation, useAddFileMutation, useGetDepartmentListQuery, useGetRoleListQuery }
    from 'services/api';

const CreateEmployee: FC = () => {

    const { data: departmentData } = useGetDepartmentListQuery();
    const { data: roleData } = useGetRoleListQuery();
    const [addEmployee] = useAddEmployeeMutation();
    const [addFile] = useAddFileMutation();

    const getRoleDropdownData = () => {
        let roleDropdownData = [];
        roleData?.map(department => {
            roleDropdownData.push({
                'id': department.id,
                'name': department.role
            });
        });
        return roleDropdownData;
    };

    const getDeptDropdownData = () => {
        let deptDropdownData = [];
        departmentData?.map(department => {
            deptDropdownData.push({
                'id': department.id,
                'name': department.name
            });
        });
        return deptDropdownData;
    };

    return (
        <div>
            <MainBar description="Create Employee" 
                      buttonRequired={false}
                      buttonDescription="nil" 
                      buttonIcon="nil" 
                      buttonNavigateUrl="nil"
                      popUpRequired={false} 
                      mainbarElementsRequired={false}/>
            <div className="w-[calc(100vw-350px)]  p-5 ">
                <CreateEmployeeForm 
                    addEmployee={addEmployee}
                    addFile={addFile}
                    roleList={getRoleDropdownData()}
                    departmentList={getDeptDropdownData()} />
            </div>
        </div >

    );
};

export default CreateEmployee;