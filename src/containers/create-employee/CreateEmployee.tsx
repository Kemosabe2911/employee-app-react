import React, { FC } from 'react';

import CreateEmployeeForm from 'components/CreateEmployeeForm';

const CreateEmployee: FC = () => {
    return (
        <div className="w-[calc(100vw-350px)]">
            <CreateEmployeeForm />
        </div>

    );
};

export default CreateEmployee;