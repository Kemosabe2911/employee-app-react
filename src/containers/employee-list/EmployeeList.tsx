import React, { FC, useState } from 'react';

import ListComponent from 'components/ListComponent';
import MainBar from 'components/MainBar';

const EmployeeList: FC = () => {
    const [status,setStatus] = useState<string>(null);
    const [text, setText] = useState<string>('');
    return (
        <div>
            <MainBar description='Employee List' buttonRequired = {true}
                buttonDescription="Create Employee" buttonIcon="fa fa-plus" 
                buttonNavigateUrl="/create-employee"
                setStatus={setStatus} text={text} setText={setText}></MainBar>
        <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
           <ListComponent status={status} />
        </div>
        </div>
    );
};

export default EmployeeList;