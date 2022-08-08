import React from 'react';

import {
    useUpdateEmployeeMutation, useGetDepartmentListQuery, useGetRoleListQuery,
    useAddFileMutation, useLazyGetEmployeeDetailsQuery
} from 'services/api';
import UpdateEmployee from 'components/UpdateEmployee';
import MainBar from 'components/MainBar';


const UpdateEmployeeDetails = () => {

    const { data: departmentData } = useGetDepartmentListQuery();
    const { data: roleData } = useGetRoleListQuery();
    const [addFile] = useAddFileMutation();
    const [updateData] = useUpdateEmployeeMutation();
    const [getEmployeeDetails, { data: data, isLoading, error }] = useLazyGetEmployeeDetailsQuery();

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
            <MainBar description='Update Employee'
                buttonRequired={false}
                buttonDescription="nil"
                buttonIcon="nil"
                buttonNavigateUrl="nil"
                popUpRequired={false}
                mainbarElementsRequired={false} />
            <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
                <UpdateEmployee roleList={getRoleDropdownData()}
                    departmentList={getDeptDropdownData()}
                    addFile={addFile}
                    updateData={updateData}
                    getEmployeeDetails={getEmployeeDetails}
                    data={data}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </div>
    );
};
export default UpdateEmployeeDetails;