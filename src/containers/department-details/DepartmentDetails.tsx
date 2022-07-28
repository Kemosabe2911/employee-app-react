import React,{FC} from 'react';

import DepartmentDetailsComponent from 'components/DepartmentDetailsComponent';
import MainBar from 'components/MainBar';

const DepartmentDetails:FC =()=>{
    return(
        <div>
            <MainBar description='Department List' buttonRequired = {false}
                buttonDescription="nil" buttonIcon="nil" buttonNavigateUrl="nil"></MainBar>
        <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
        <DepartmentDetailsComponent/>
        </div>
        </div>
    );
};

export default DepartmentDetails;