import React, { FC, useState } from 'react';
import {
    useDeleteEmployeeMutation, useGetDepartmentListQuery, useGetEmployeeListQuery,
    useGetRoleListQuery,
    useUpdateStatusMutation
} from 'services/api';
import { columns } from 'constants/ListHeader';
import PopUp from 'components/PopUp';
import ListComponent from 'components/ListComponent';
import MainBar from 'components/MainBar';

const EmployeeList: FC = () => {
    const [status, setStatus] = useState<string>(null);
    const [text, setText] = useState<string>('');
    const { data: EmployeeListData, error, isLoading } = useGetEmployeeListQuery(text);
    const { data: DepartmentData } = useGetDepartmentListQuery();
    const { data: RoleData } = useGetRoleListQuery();
    const [deleteEmployee] = useDeleteEmployeeMutation();
    const [updateStatus] = useUpdateStatusMutation();
    const [deleteClicked, setDelete] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number>(0);
    const handleDeleteEmployee = (clickedEmployeeId) => {
        deleteEmployee(clickedEmployeeId);
        setDelete(false);
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


    if (isLoading) {
        return (
            <div className="top-40 flex items-center justify-center ">
                <div className="h-10 w-10 animate-spin rounded-full border-y-4 border-brightCelurean" />
            </div>);
    }

    if (error) {
        return <PopUp description={'Cannot load Employee List'} 
        popUpStyle={
        'mx-auto rounded-xl border-2 absolute inset-x-0 bottom-6 h-16 w-[15%] min-w-[500px] border-rose-600 bg-red-50  '
    }></PopUp>;
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
                setText={setText}
                popUpRequired={false} />
            <table className='mx-auto mt-10 w-[96%] table-fixed align-middle '>
                <thead>
                    <tr className=" h-[60px] rounded-xl bg-aliceBlue shadow-xl" >
                        {columns.map(column => {
                            return (
                                <th className='w-[2px] p-4 text-center text-base 
                                font-normal' key={column}> {column}</th>
                            );
                        })}
                    </tr>
                </thead>
                {EmployeeListData?.filter(list => filterItem(list)).map(employee => {
                    return (
                        <tbody key={employee.id}>
                            <ListComponent status={status}
                                text={text}
                                employee={employee}
                                RoleData={RoleData}
                                DepartmentData={DepartmentData}
                                deleteEmployee={deleteEmployee}
                                deleteClicked={deleteClicked}
                                setDelete={setDelete}
                                handleDeleteEmployee={handleDeleteEmployee}
                                setSelectedId={setSelectedId}
                                selectedId={selectedId}
                                EmployeeListData={EmployeeListData}
                                updateStatus={updateStatus}
                            />
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
};

export default EmployeeList;