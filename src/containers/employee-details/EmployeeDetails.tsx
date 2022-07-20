import React,{FC} from 'react';

import MainBar from 'components/MainBar';
import EmployeeDetailsComponent from 'components/EmployeeDetailsComponent';

const EmployeeDetails:FC =()=>{
    return(
        <div>
        <MainBar description="Employee Details"/>
        <EmployeeDetailsComponent></EmployeeDetailsComponent>
        </div>
    );
};

export default EmployeeDetails;