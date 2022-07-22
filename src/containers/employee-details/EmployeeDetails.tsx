import React,{FC} from 'react';

import EmployeeDetailsComponent from 'components/EmployeeDetailsComponent';

const EmployeeDetails:FC =()=>{
    return(
        <div className="w-[calc(100vw-350px)]">
        <EmployeeDetailsComponent></EmployeeDetailsComponent>
        </div>
    );
};

export default EmployeeDetails;