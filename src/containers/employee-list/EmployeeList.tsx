import React, { FC } from 'react';

import ListComponent from 'components/ListComponent';

const EmployeeList: FC = () => {
    return (
        <div className="w-[calc(100vw-350px)]">
            <ListComponent />
        </div>
    );
};

export default EmployeeList;