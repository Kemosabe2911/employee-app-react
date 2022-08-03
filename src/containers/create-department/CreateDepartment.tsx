import React, { FC } from 'react';

import MainBar from 'components/MainBar';
import CreateDepartmentComponent from 'components/CreateDepartment';

const CreateDepartment: FC = () => {
    return (
        <div>
            <MainBar description="Create Department" buttonRequired = {false}
                buttonDescription="nil" buttonIcon="nil" buttonNavigateUrl="nil"/>
            <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">

            <CreateDepartmentComponent></CreateDepartmentComponent>

        </div>
        </div >

    );
};

export default CreateDepartment;