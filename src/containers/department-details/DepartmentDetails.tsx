import React,{FC} from 'react';

import DepartmentDetailsComponent from 'components/DepartmentDetailsComponent';

const DepartmentDetails:FC =()=>{
    return(
        <div className="w-[calc(100vw-350px)]">
        <DepartmentDetailsComponent/>
        </div>
    );
};

export default DepartmentDetails;