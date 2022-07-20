import React, { FC } from "react";
import { DropdownMenuProps } from "./types";

const DropdownMenu: FC<DropdownMenuProps> = (props) => {
    const { dropdown, registerFunction, registerName } = props;

    return (
        <div className="flex-initial pl-2 m-2 ml-4 ">
            <select {...registerFunction(registerName)} className="mt-1 p-2 w-56 h-10
                         text-gray-400 bg-white border border-gray-300 hover:border-blue-500 text-sm leading-5
                         rounded-md">
                {dropdown.map(element => {
                    return (
                        <option key={element} value={element}>{element}</option>
                    );
                })}
            </select>
        </div>
    );
}
export default DropdownMenu;