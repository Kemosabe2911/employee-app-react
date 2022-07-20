import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import RoutesPath from './RoutesPath';
import SideBar from 'components/SideBar';
import CreateEmployeePage from 'pages/CreateEmployeePage';
import EmployeeDetailsPage from 'pages/EmployeeDetailsPage';
import DepartmentDetailsPage from 'pages/DepartmentDetailsPage';
import EmployeeListPage from 'pages/EmployeeListPage';

const PrivateLayout = () => (
    <div className="flex flex-row">
        <SideBar />
        <Suspense fallback="Loading">
            <Routes>
                <Route path={RoutesPath.HOME} element={<HomePage />} />
                <Route path={RoutesPath.CREATE_EMPLOYEE} element={<CreateEmployeePage />} />
                <Route path={RoutesPath.EMPLOYEE_DETAILS} element={<EmployeeDetailsPage />} />
                <Route path={RoutesPath.DEPARTMENT_DETAILS} element={<DepartmentDetailsPage />} />
                <Route path={RoutesPath.EMPLOYEE_LIST} element={<EmployeeListPage />} />
                <Route
                    path={RoutesPath.ALL}
                    element={<Navigate replace={true} to={RoutesPath.HOME} />}
                />
            </Routes>
        </Suspense>
    </div>
);

export default PrivateLayout;
