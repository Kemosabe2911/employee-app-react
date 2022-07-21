import React, { FC } from 'react';
import { DropdownMenuProps } from './types';

const DropdownMenu: FC<DropdownMenuProps> = (props) => {
    const { dropdown, registerFunction, registerName } = props;

    return (
        <div className="m-2 ml-4 flex-initial pl-2 ">
            <select {...registerFunction(registerName)} className="mt-1 h-10 w-56 rounded-md
                         border border-gray-300 bg-white p-2 text-sm leading-5 text-gray-400
                         hover:border-blue-500">
                {dropdown.map(element => {
                    return (
                        <option key={element} value={element}>{element}</option>
                    );
                })}
            </select>
        </div>
    );
};
export default DropdownMenu;