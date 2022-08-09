import React,{FC} from 'react';


import MainBar from 'components/MainBar';

const DepartmentDetails:FC =()=>{
    return(
        <div>
            <MainBar description='Department Details' buttonRequired = {false}
                buttonDescription="nil" buttonIcon="nil" 
                buttonNavigateUrl="nil"
                popUpRequired={false}
                mainbarElementsRequired={false}>                    
                </MainBar>
        <div className="w-[calc(100vw-350px)] p-5">
       
        </div>
        </div>
    );
};

export default DepartmentDetails;