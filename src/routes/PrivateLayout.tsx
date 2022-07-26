import React, { Suspense, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


import RoutesPath from './RoutesPath';
import SideBar from 'components/SideBar';
import CreateEmployeePage from 'pages/CreateEmployeePage';
import EmployeeDetailsPage from 'pages/EmployeeDetailsPage';
import DepartmentDetailsPage from 'pages/DepartmentDetailsPage';
// import EmployeeListPage from 'pages/EmployeeListPage';
import MainBar from 'components/MainBar';
//import UpdateEmployeePage from 'pages/UpdateEmployeePage';
import UpdateEmployee from 'components/UpdateEmployee';
import ListComponent from 'components/ListComponent';

const PrivateLayout = () => {

    const [clickedId, setclickedId] = useState<number>(1);
    

    return (
        <div className="flex flex-row overflow-hidden">
            <SideBar />
            <div className="flex flex-col">
                <MainBar />
                <Suspense fallback="Loading">
                    <Routes>
                        <Route path={RoutesPath.CREATE_EMPLOYEE} element={<CreateEmployeePage />} />
                        <Route path={RoutesPath.EMPLOYEE_DETAILS} element={<EmployeeDetailsPage />} />
                        <Route path={RoutesPath.DEPARTMENT_DETAILS} element={<DepartmentDetailsPage />} />
                        <Route path={RoutesPath.EMPLOYEE_LIST} element={<ListComponent setId={setclickedId} />} />
                        <Route path={RoutesPath.UPDATE_EMPLOYEE} element={<UpdateEmployee employeeid={clickedId} />} />
                        <Route
                            path={RoutesPath.ALL}
                            element={<Navigate replace={true} to={RoutesPath.CREATE_EMPLOYEE} />}
                        />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default PrivateLayout;
