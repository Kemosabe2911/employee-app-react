import React, { FC } from 'react';

import CreateEmployeeForm from 'components/CreateEmployeeForm';
import MainBar from 'components/MainBar';

const CreateEmployee: FC = () => {
    return (
        <div>
            <MainBar description="Create Employee" buttonRequired = {false}
                buttonDescription="nil" buttonIcon="nil" buttonNavigateUrl="nil"/>
            <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">

            <CreateEmployeeForm />
        </div>
        </div >

    );
};

export default CreateEmployee;