import React, { FC } from 'react';

import CreateEmployeeForm from 'components/CreateEmployeeForm';

const CreateEmployee: FC = () => {
    return (
        <div className="w-[calc(100vw-350px)] overflow-x-auto p-5">
            <CreateEmployeeForm />
        </div>

    );
};

export default CreateEmployee;