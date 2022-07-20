import React,{FC} from 'react';

import MainBar from 'components/MainBar';
import DepartmentDetailsComponent from 'components/DepartmentDetailsComponent';

const DepartmentDetails:FC =()=>{
    return(
        <div>
        <MainBar description="Department Details"/>
        <DepartmentDetailsComponent/>
        </div>
    );
};

export default DepartmentDetails;