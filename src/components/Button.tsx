import React, { FC } from 'react';

import { ButtonProps } from './types';

const Button: FC<ButtonProps> = (props) => {

    const { bgcolor, textcolor, bghover, text, border, type, onclick } = props;
    return (
        <>
            <button
                type={type}
                className={`m-4 h-10  p-2 text-sm leading-5 ${bgcolor} ${textcolor} ${bghover} ${border} rounded-md`}
                onClick={onclick}>
                {text}
            </button>
        </>
    );
};
export default Button;