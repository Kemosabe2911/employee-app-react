import React, { FC } from 'react';

import { ButtonProps } from './types';

const Button: FC<ButtonProps> = (props) => {

    const {buttonClass, text, type, handleClick } = props;
    
    return (
        <>
            <button
                type={type}
                className={`m-4 h-10  p-2 text-sm leading-5 ${buttonClass} rounded-md`}
                onClick={handleClick}>
                {text}
            </button>
        </>
    );
};
export default Button;