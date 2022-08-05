import React, { FC, useState } from 'react';

import ListComponent from 'components/ListComponent';
import MainBar from 'components/MainBar';
import {
    useDeleteEmployeeMutation, useGetDepartmentListQuery, useGetEmployeeListQuery,
    useGetRoleListQuery
} from 'services/api';
import PopUp from 'components/PopUp';

const EmployeeList: FC = () => {
    const [status, setStatus] = useState<string>(null);
    const [text, setText] = useState<string>('');
    const { data: EmployeeListData, error, isLoading } = useGetEmployeeListQuery(text);
    const { data: DepartmentData } = useGetDepartmentListQuery();
    const { data: RoleData } = useGetRoleListQuery();
    const [deleteEmployee] = useDeleteEmployeeMutation();
    const [deleteClicked, setDelete] = useState<boolean>(false);
    const [clickedId, setclickedId] = useState<number>(0);
    const handleDeleteEmployee = (clickedEmployeeId) => {
        deleteEmployee(clickedEmployeeId);
        setDelete(false);
    };
    
    if (isLoading) {
        return (
            <div className="top-40 flex items-center justify-center ">
                <div className="h-10 w-10 animate-spin rounded-full border-y-4 border-brightCelurean" />
            </div>);
    }

    if (error) {
        return <PopUp description={'Cannot load Employee List'} margin={'absolute inset-x-0 bottom-16 '}></PopUp>;
    }
    return (
        <div>
            <MainBar description='Employee List'
                buttonRequired={true}
                buttonDescription="Create Employee"
                buttonIcon="fa fa-plus"
                buttonNavigateUrl="/create-employee"
                setStatus={setStatus}
                text={text}
                setText={setText}>
            </MainBar>
            <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
                <ListComponent status={status} text={text} EmployeeList={EmployeeListData} RoleData={RoleData}
                    DepartmentData={DepartmentData} deleteEmployee={deleteEmployee} deleteClicked={deleteClicked}
                    setDelete={setDelete} handleDeleteEmployee={handleDeleteEmployee} setclickedId={setclickedId}
                    clickedId={clickedId} />
            </div>
        </div>
    );
};

export default EmployeeList;