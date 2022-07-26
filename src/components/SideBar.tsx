import React, { FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { SIDE_BAR_CONSTANTS as sideBarItems } from 'constants/sideBarItems';
import { LOGO, Profile } from 'assets/icons/images';


const SideBar: FC = () => {

    const location = useLocation();
    let currentPath = location.pathname;
    if (currentPath == '/') {
        currentPath = '/create-employee';
    }
    const [buttonId, setId] = useState<string>(currentPath);
    const navigate = useNavigate();


    const handleButtonColorChange = (selectedButtonUrl) => {
        setId(selectedButtonUrl);
        navigate(selectedButtonUrl);
    };
    return (
        <div className="fixed z-40 h-full">
            <div className="flex h-[90%] w-[350px] flex-col border-2 bg-white shadow-lg">
                <img className="h-[170px] w-[300px]" src={LOGO} alt="not found" />
                <div className="flex flex-col pl-[16px]">
                    {sideBarItems.map(sideBarItem => {
                        return (
                            <div
                                key={sideBarItem.id}>
                                <button onClick={() => handleButtonColorChange(sideBarItem.url)}
                                    className={`h-[50px] w-[330px]  rounded-l-full pl-[50px] text-left font-semibold 
                    duration-200 hover:text-lg 
                    ${buttonId === sideBarItem.url ?
                                            'bg-brightCelurean text-white' : 'bg-white text-brightCelurean'}`}>
                                    <span className={`h-[15px] w-[15px] pr-[30px] ${sideBarItem.icon}`} />
                                    {sideBarItem.description}</button>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className=" flex h-[10%] w-[350px] flex-row border-x-2 bg-white">
                <Profile className='mt-5 ml-10'></Profile>
                <div className='mt-5 ml-5'>
                    <div className="text-base">Whitney Francis</div>
                    <button className=" text-sm text-gray-500">View Profile</button>
                </div>
            </div>
        </div>
    );
};
export default SideBar;