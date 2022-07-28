import React,{FC} from 'react';
import { useParams } from 'react-router-dom';

import EmployeeDetailsComponent from 'components/EmployeeDetailsComponent';
import MainBar from 'components/MainBar';

const EmployeeDetails:FC =()=>{

    const urlId= useParams();
    
    const url='/update-employee/'+urlId.id;
    return(
        <div>
            <MainBar description='Employee Details' buttonRequired = {true}
                buttonDescription="Update Employee" buttonIcon="fa fa-pencil" buttonNavigateUrl={url}>

                </MainBar>
        <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
        <EmployeeDetailsComponent></EmployeeDetailsComponent>
        </div>
        </div>
    );
};

export default EmployeeDetails;