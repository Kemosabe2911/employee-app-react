import React, { FC } from 'react';
import { InputFieldProps } from './types';

const InputField: FC<InputFieldProps> = (props) => {

    const { placeholder, type, registerFunction, registerName } = props;

    return (
        <div className='flex-initial m-2  ml-4'>
            <input placeholder={placeholder} {...registerFunction(registerName)} className=" p-4 m-2 w-56 h-10 text-sm border border-gray-300 hover:border-blue-500 leading-5
          rounded-md" type={type} />
        </div>

    );
}
export default InputField;