import React, { FC } from 'react';

import ListComponent from 'components/ListComponent';
import MainBar from 'components/MainBar';

const EmployeeList: FC = () => {
    return (
        <div>
            <MainBar description='Employee List' buttonRequired = {true}
                buttonDescription="Create Employee" buttonIcon="fa fa-plus" 
                buttonNavigateUrl="/create-employee"></MainBar>
        <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
           <ListComponent />
        </div>
        </div>
    );
};

export default EmployeeList;