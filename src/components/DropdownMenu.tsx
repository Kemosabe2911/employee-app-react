import React, { FC } from 'react';

import { DropdownMenuProps } from './types';

const DropdownMenu: FC<DropdownMenuProps> = (props) => {

    const { dropdownData, registerFunction, registerName } = props;

    return (
        <div className="m-2 flex-initial pl-2 xl:flex-initial ">
            <select {...registerFunction(registerName)} className="mt-1 h-10 w-56 rounded-md border
             border-gray-300 bg-white p-2 text-sm leading-5 text-gray-400 focus:outline-none" defaultValue=''>
                <option value='' disabled hidden >Pick a choice!</option>
                {dropdownData.map(element => {
                    const { id, name } = element;
                    return (
                        <option key={id} value={id}>{name}</option>
                    );
                })}
            </select>
        </div>
    );
};

export default DropdownMenu;