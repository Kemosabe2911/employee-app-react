import React,{FC} from 'react';

import EmployeeDetailsComponent from 'components/EmployeeDetailsComponent';
import MainBar from 'components/MainBar';

const EmployeeDetails:FC =()=>{
    return(
        <div>
            <MainBar description='Employee Details' buttonRequired = {false}
                buttonDescription="nil" buttonIcon="nil" buttonNavigateUrl="nil"></MainBar>
        <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
        <EmployeeDetailsComponent></EmployeeDetailsComponent>
        </div>
        </div>
    );
};

export default EmployeeDetails;