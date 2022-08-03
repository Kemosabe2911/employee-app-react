import React,{FC} from 'react';

import DepartmentListComponent from 'components/DepartmentListComponent';
import MainBar from 'components/MainBar';

const DepartmentList:FC =()=>{
    return(
        <div>
            <MainBar description='Department List' buttonRequired = {true}
                buttonDescription="Create Department" buttonIcon="fa fa-plus" 
                buttonNavigateUrl="/create-department">                    
                </MainBar>
        <div className="w-[calc(100vw-350px)] p-5">
        <DepartmentListComponent/>
        </div>
        </div>
    );
};

export default DepartmentList;