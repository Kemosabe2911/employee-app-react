import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SIDE_BAR_CONSTANTS as sideBarItems } from 'constants/sideBarItems';
import { LOGO, Profile } from 'assets/icons/images';
import { SideBarInputField } from './types';

const SideBar: FC<SideBarInputField> = (props) => {
    const {setDescriptionId}=props;

    const currentUrl=window.location.href;
    const currentPath=currentUrl.split('#');
    if(currentPath[1]==undefined)
    {
        currentPath[1]='/create-employee';
    }
    const [buttonId, setId] = useState<string>(currentPath[1]);
    const navigate = useNavigate();

    const handleButtonColorChange = ( selectedButtonUrl) => {
        setId(selectedButtonUrl);
        navigate(selectedButtonUrl);
        setDescriptionId(selectedButtonUrl);
    };
    return (
        <div className="flex h-[100vh] w-[350px] flex-col border-2 bg-white shadow-lg">
            <img className="h-[170px] w-[300px]" src={LOGO} alt="not found" />
            <div className="flex flex-col pl-[16px]">
                {sideBarItems.map(sideBarItem => {
                    return (
                        <div
                            key={sideBarItem.id}>
                            <button onClick={() => handleButtonColorChange(sideBarItem.url)}
                                className={`h-[50px] w-[330px]  rounded-l-full pl-[50px] text-left font-semibold 
                    duration-200 hover:text-lg 
                    ${buttonId === sideBarItem.url ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}>
                                <span className={`h-[15px] w-[15px] pr-[30px] ${sideBarItem.icon}`} />
                                {sideBarItem.description}</button>
                        </div>
                    );
                })}
            </div>
            <div className="absolute bottom-0 flex h-[100px] w-[350px] flex-row border-y-2">
                <Profile className='mt-5 ml-10'></Profile>
                <div className='mt-5 ml-5'>
                    <div className="text-base">Whitney Francis</div>
                    <button className=" text-sm text-gray-500">View Profile</button></div>
            </div>
        </div>

    );
};
export default SideBar;