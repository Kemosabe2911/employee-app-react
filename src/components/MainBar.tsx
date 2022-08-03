import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { MainBarInputField } from './types';

const MainBar: FC<MainBarInputField> = (props) => {
    const { description, buttonRequired, buttonDescription, buttonIcon, buttonNavigateUrl } = props;

    const navigate = useNavigate();
    const handleCreateClick = (selectedPath) => {
        navigate(selectedPath);
    };

    return (
        <div className="flex h-[150px] w-full  gap-[500px] border-y-2 bg-white ">
            <div className=" w-1/2 flex-initial p-14 text-2xl font-semibold text-slate-700">{description}</div>
            <div className='ml-auto flex-initial'>
            {buttonRequired ?
                <button onClick={() => handleCreateClick(buttonNavigateUrl)}
                    className="relative top-12 right-0 h-[48px] w-[259px] rounded-full
                               bg-aliceBlue">
                    <div className="flex">
                        <span className={`h-[48px] w-[48px] rounded-full bg-brightCelurean p-[15px]
                         text-white ${buttonIcon}`} />
                        <span className="py-3 pl-7 text-base font-normal text-black">{buttonDescription}</span>
                    </div>
                </button> :
                 <div></div>}
            </div>
         
               
        </div>
    );
};

export default MainBar;