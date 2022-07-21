import React,{FC} from 'react';

import MainBar from 'components/MainBar';
import CreateEmployeeComponent from 'components/CreateEmployeeComponent';

const CreateEmployee:FC =()=>{
    return(
        <div>
        <MainBar description="Create Employee"/>
        <CreateEmployeeComponent/>
        </div>
    );
};

export default CreateEmployee;