import React, { FC } from 'react';

import MainBar from 'components/MainBar';
import ListComponent from 'components/ListComponent';

const EmployeeList: FC = () => {
    return (
        <div className="w-[calc(100vw-350px)]">
            <MainBar description="Employee List" />
            <ListComponent />
        </div>
    );
};

export default EmployeeList;