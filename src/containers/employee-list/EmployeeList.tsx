import React, { FC } from 'react';

import ListComponent from 'components/ListComponent';

const EmployeeList: FC = () => {
    return (
        <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
           <ListComponent />
        </div>
    );
};

export default EmployeeList;