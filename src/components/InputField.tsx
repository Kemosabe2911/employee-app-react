import React, { FC } from 'react';

import { InputFieldProps } from './types';

const InputField: FC<InputFieldProps> = (props) => {

    const { placeholder, type, registerFunction, registerName, value } = props;

    return (
        <div className='m-2 flex-wrap md:justify-center xl:flex-initial '>
            <input placeholder={placeholder} {...registerFunction(registerName)}
                className=" m-2 h-10 w-56 rounded-md border border-gray-300 p-4 text-sm leading-5 
                               focus:outline-none"
                type={type}
                defaultValue={value} />
        </div>
    );
};

export default InputField;