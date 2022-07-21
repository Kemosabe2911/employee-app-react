import React, { FC } from 'react';

import MainBar from 'components/MainBar';
import ListComponent from 'components/ListComponent';

const EmployeeList: FC = () => {
    return (
        <div>
            <MainBar description="Employee List" />
            <ListComponent />
        </div>
    );
};

export default EmployeeList;