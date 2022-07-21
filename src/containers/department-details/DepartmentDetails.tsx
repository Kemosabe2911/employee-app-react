import React,{FC} from 'react';

import MainBar from 'components/MainBar';
import DepartmentDetailsComponent from 'components/DepartmentDetailsComponent';

const DepartmentDetails:FC =()=>{
    return(
        <div className="w-[calc(100vw-350px)]">
        <MainBar description="Department Details"/>
        <DepartmentDetailsComponent/>
        </div>
    );
};

export default DepartmentDetails;