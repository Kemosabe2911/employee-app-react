import React, { FC } from 'react';

import { DropdownMenuProps } from './types';

const DropdownMenu: FC<DropdownMenuProps> = (props) => {

    const { dropdown, registerFunction, registerName } = props;
    
    return (
        <div className="m-2 flex-initial pl-2 xl:flex-initial ">
            <select {...registerFunction(registerName)} className="mt-1 h-10 w-56 rounded-md border
             border-gray-300 bg-white p-2 text-sm leading-5 text-gray-400 focus:outline-none" >
                {dropdown.map(element => {
                    return (
                        <option key={element.id} value={element.id}>{element.name}</option>  
                    );
                })}
            </select>
        </div>
    );};
    
export default DropdownMenu;