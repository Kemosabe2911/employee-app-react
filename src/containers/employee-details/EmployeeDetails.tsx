import React,{FC} from 'react';

import MainBar from 'components/MainBar';
import EmployeeDetailsComponent from 'components/EmployeeDetailsComponent';

const EmployeeDetails:FC =()=>{
    return(
        <div className="w-[calc(100vw-350px)]">
        <MainBar description="Employee Details"/>
        <EmployeeDetailsComponent></EmployeeDetailsComponent>
        </div>
    );
};

export default EmployeeDetails;