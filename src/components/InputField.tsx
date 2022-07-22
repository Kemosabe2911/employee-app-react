import React, { FC } from 'react';
import { InputFieldProps } from './types';

const InputField: FC<InputFieldProps> = (props) => {

    const { placeholder, type, registerFunction, registerName } = props;

    return (
        <div className='m-2 ml-4  flex-initial'>
            <input placeholder={placeholder} {...registerFunction(registerName)}
                className=" m-2 h-10 w-56 rounded-md border border-gray-300 p-4 text-sm leading-5 
                focus:outline-none" type={type} />
        </div>

    );
};
export default InputField;