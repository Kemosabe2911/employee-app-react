import React, { FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { SIDE_BAR_CONSTANTS as sideBarItems } from 'constants/sideBarItems';
import { ICONS } from 'constants/icons';
import { LOGO } from 'constants/logo';
import Logout from './Logout';

const SideBar: FC = () => {
    
    const location = useLocation();

    let currentPath = location.pathname;
    if ((currentPath == '/login') || (currentPath == '/sign-up') || (currentPath == '/')) {
        currentPath = '/employee-list';
    }
    if (currentPath == '/create-employee') {
        currentPath = '/employee-list';
    }
    if ((currentPath.startsWith('/update-employee')) || (currentPath.startsWith('/employee-details'))) {
        currentPath = '/employee-list';
    }

    const [buttonId, setId] = useState<string>(currentPath);
    const navigate = useNavigate();
    const [logoutModal, setLogoutModal] = useState(false);

    const handleButtonColorChange = (selectedButtonUrl) => {
        setId(selectedButtonUrl);
        navigate(selectedButtonUrl);
    };

    let name=localStorage.getItem('Name');
    let email=localStorage.getItem('Email');


    return (
        <div className="fixed z-10 h-full">
            <div className="flex h-[100%] w-[350px] flex-col border-2 bg-white shadow-lg">
                <img className="h-[170px] w-[300px]" src={LOGO} alt="not found" />
                <div className="flex flex-col pl-[16px]">
                    {sideBarItems.map(sideBarItem => {
                        return (
                            <div key={sideBarItem.id}>
                                <button onClick={() => handleButtonColorChange(sideBarItem.url)}
                                    className={`h-[50px] w-[330px]  rounded-l-full pl-[50px] text-left font-semibold 
                                               duration-200 hover:text-lg  ${buttonId === sideBarItem.url ?
                                            'bg-brightCelurean text-white' : 'bg-white text-brightCelurean'}`}>
                                    <span className={`h-[15px] w-[15px] pr-[30px] ${sideBarItem.icon}`} />
                                    {sideBarItem.description}
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div className='relative mx-auto mt-auto h-20 w-[100%]  cursor-pointer bg-slate-100 '>
                    <div className='absolute flex pt-5 pl-8 duration-300 hover:translate-x-3'>
                        <span onClick={() => setLogoutModal(true)}
                        className={`${ICONS.logout} pl-8 pr-2 text-2xl text-brightCelurean
                         hover:text-brightsCelurean`}>
                        </span>
                        <div className="flex flex-col">
                            <div className="h-5  pl-1 text-sm text-gray-700 ">{name}</div>
                            <div className="pl-1 text-xs text-gray-700 ">{email}</div>
                        </div>
                    </div>
                </div>
                {logoutModal && (
                    <div className='fixed inset-0 h-full w-full overflow-y-auto bg-gray-600/60 pl-20'>
                        <Logout setLogoutModal={setLogoutModal} />
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default SideBar;