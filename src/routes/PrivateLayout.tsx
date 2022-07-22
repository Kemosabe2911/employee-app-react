import React, { Suspense, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { description } from 'constants/sideBarItems';

import RoutesPath from './RoutesPath';
import SideBar from 'components/SideBar';
import CreateEmployeePage from 'pages/CreateEmployeePage';
import EmployeeDetailsPage from 'pages/EmployeeDetailsPage';
import DepartmentDetailsPage from 'pages/DepartmentDetailsPage';
import EmployeeListPage from 'pages/EmployeeListPage';
import MainBar from 'components/MainBar';


const PrivateLayout = () => {

    const currentUrl=window.location.href;
    const currentPath=currentUrl.split('#');
    if(currentPath[1]==undefined)
    {
        currentPath[1]='/create-employee';
    }
    const [mainBarId, setMainBarId]=useState<string>(currentPath[1]);
    
    return(
    <div className="flex flex-row overflow-hidden">
        <SideBar setDescriptionId={setMainBarId}/>
        <div className="flex flex-col">
        <MainBar description={description[mainBarId]}/>
        <Suspense fallback="Loading">
            <Routes>
                <Route path={RoutesPath.CREATE_EMPLOYEE} element={<CreateEmployeePage />} />
                <Route path={RoutesPath.EMPLOYEE_DETAILS} element={<EmployeeDetailsPage />} />
                <Route path={RoutesPath.DEPARTMENT_DETAILS} element={<DepartmentDetailsPage />} />
                <Route path={RoutesPath.EMPLOYEE_LIST} element={<EmployeeListPage />} />
                <Route
                    path={RoutesPath.ALL}
                    element={<Navigate replace={true} to={RoutesPath.CREATE_EMPLOYEE} />}
                />
            </Routes>
        </Suspense>
        </div>
    </div>
);};

export default PrivateLayout;
