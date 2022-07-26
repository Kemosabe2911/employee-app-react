import React,{FC} from 'react';

import DepartmentDetailsComponent from 'components/DepartmentDetailsComponent';

const DepartmentDetails:FC =()=>{
    return(
        // <div className="w-[calc(100vw-350px)]">
        <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
        <DepartmentDetailsComponent/>
        </div>
    );
};

export default DepartmentDetails;