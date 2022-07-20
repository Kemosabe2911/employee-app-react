import React, { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = (props) => {
    const { bgcolor, textcolor, bghover, text, border, types } = props;

    return (
        <>
            <button
                type={types}
                className={`p-2 m-4 w-36 h-10 text-sm 
        leading-5  ${bgcolor} ${textcolor} ${bghover} ${border}} rounded-md`}>
                {text}
            </button>
        </>
    );

}
export default Button;