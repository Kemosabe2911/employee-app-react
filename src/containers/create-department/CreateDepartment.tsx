import React, { FC } from 'react';

import { CreateDepartmentProps } from 'components/types';
import { useAddDepartmentMutation } from 'services/api';
import CreateDepartmentModal from 'components/CreateDepartmentModal';

const CreateDepartment: FC<CreateDepartmentProps> = ({ setPopUpCreate }) => {

    const [addDepartment] = useAddDepartmentMutation();

    return (
        <div>
            <CreateDepartmentModal setPopUpCreate={setPopUpCreate} addDepartment={addDepartment} />
        </div>

    );
};

export default CreateDepartment;