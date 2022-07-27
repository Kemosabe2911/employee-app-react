import React from 'react';

import UpdateEmployee from 'components/UpdateEmployee';
import MainBar from 'components/MainBar';


const UpdateEmployeeDetails =()=>{
    return (
     <div>
      <MainBar description='Update Employee' buttonRequired = {false}
                buttonDescription="nil" buttonIcon="nil" buttonNavigateUrl="nil"></MainBar>
       <UpdateEmployee/>
     </div>
    );
};
export default UpdateEmployeeDetails;