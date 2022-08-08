import React from 'react';

import UpdateEmployee from 'components/UpdateEmployee';
import MainBar from 'components/MainBar';


const UpdateEmployeeDetails =()=>{
    return (
     <div>
      <MainBar description='Update Employee' buttonRequired = {false}
                buttonDescription="nil" buttonIcon="nil" buttonNavigateUrl="nil"
                popUpRequired={false}/>
                <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
                <UpdateEmployee/>
                </div>
      
     </div>
    );
};
export default UpdateEmployeeDetails;