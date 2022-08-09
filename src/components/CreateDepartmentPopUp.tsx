import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Label from './Label';
import InputField from './InputField';

const schema = yup.object({
    name: yup.string().required('Name is a required field '),
    department_room: yup.string().required('Department Room is a required field'),
    department_code: yup.string().required('Department Code is arequired field'),
    website: yup.string().required('Website is a required field')
});

const CreateDepartmentComponent: FC = () => {

    const { register, reset, handleSubmit } = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    return (
        <div className="mx-auto mt-6 flex flex-initial">
            <div className="my-12 mx-56  h-[600px] w-[100%] overflow-auto rounded-xl
             bg-white px-16 py-12 shadow-xl">
                <form onSubmit={handleSubmit(data => {
                    // eslint-disable-next-line no-console
                    console.log(data);
                    reset();
                })}>
                    <div className="flex flex-wrap gap-14">
                        <div>
                            <Label name="Department Name"></Label>
                            <InputField registerFunction={register} placeholder="Department Name"
                                registerName='name' type="string" value="" />
                            {/* <p>{errors.name.message}</p> */}
                        </div>

                        <div>
                            <Label name="Department Room"></Label>
                            <InputField registerFunction={register} placeholder="Department Room"
                                registerName='department_room' type="string" value="" />
                            {/* <p>{errors.department_room.message}</p> */}
                        </div>

                        <div>
                            <Label name="Department Code"></Label>
                            <InputField registerFunction={register} placeholder="Department Code"
                                registerName='department_code' type="string" value="" />
                            {/* <p>{errors.department_code.message}</p> */}
                        </div>

                        <div>
                            <Label name="Website"></Label>
                            <InputField registerFunction={register} placeholder="Website"
                                registerName='website' type="string" value="" />
                            {/* <p>{errors.website.message}</p> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateDepartmentComponent;