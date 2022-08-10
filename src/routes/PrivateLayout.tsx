import React, { Suspense} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


import RoutesPath from './RoutesPath';
import SideBar from 'components/SideBar';
import CreateEmployeePage from 'pages/CreateEmployeePage';
import EmployeeDetailsPage from 'pages/EmployeeDetailsPage';
import DepartmentListPage from 'pages/DepartmentListPage';
import EmployeeListPage from 'pages/EmployeeListPage';
import UpdateEmployeePage from 'pages/UpdateEmployeePage';
import LogoutPage from 'pages/LogoutPage';
import CreateDepartmentPage from 'pages/CreateDepartmentPage';

const PrivateLayout = () => {

    return (
        <div className="flex h-full">
            <SideBar/>
            <div className="relative left-[350px] flex h-[100vh] flex-col md:fixed">
                <Suspense fallback="Loading">
                    <Routes>
                        <Route path={RoutesPath.CREATE_EMPLOYEE} element={<CreateEmployeePage />} />
                        <Route path={RoutesPath.CREATE_DEPARTMENT} element={<CreateDepartmentPage />} />
                        <Route path={RoutesPath.EMPLOYEE_DETAILS} element={<EmployeeDetailsPage />} />
                        <Route path={RoutesPath.DEPARTMENT_LIST} element={<DepartmentListPage />} />
                        <Route path={RoutesPath.EMPLOYEE_LIST} element={<EmployeeListPage/>} />
                        <Route path={RoutesPath.LOGOUT} element={<LogoutPage/>} />
                        <Route path={`${RoutesPath.UPDATE_EMPLOYEE}/:id`} element={<UpdateEmployeePage/>} />
                        <Route path={`${RoutesPath.EMPLOYEE_DETAILS}/:id`} element={<EmployeeDetailsPage/>} />
                        
                        <Route
                            path={RoutesPath.ALL}
                            element={<Navigate replace={true} to={RoutesPath.EMPLOYEE_LIST} />}
                        />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default PrivateLayout;
