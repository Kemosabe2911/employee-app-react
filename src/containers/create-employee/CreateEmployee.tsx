import React, { FC } from 'react';

import MainBar from 'components/MainBar';
import CreateEmployeeForm from 'components/CreateEmployeeForm';

const CreateEmployee: FC = () => {
    return (
        <div>
            <MainBar description="Create Employee" />
            <CreateEmployeeForm />
        </div>

    );
};

export default CreateEmployee;