import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchElement from './SearchElement';

import { MainBarInputField } from './types';

const MainBar: FC<MainBarInputField> = (props) => {
    const { description, buttonRequired, buttonDescription, buttonIcon, buttonNavigateUrl, setStatus,setText,text
        } = props;

    const navigate = useNavigate();
    const handleCreateClick = (selectedPath) => {
        navigate(selectedPath);
    };
    const FilterIcon = 'fa fa-filter';

    return (
        <div className=" flex h-[150px] w-full flex-col flex-wrap  border-y-2 bg-white ">
            <div className="w-[350px] p-14 text-2xl font-semibold text-slate-700">{description}</div>
            <div className="ml-auto pr-16">
                {buttonRequired ?
                    <div className='flex w-[600px]'>
                        <div className='relative top-12 mr-8 flex h-[48px] w-[150px] flex-initial
                         rounded-full bg-aliceBlue'>
                          <SearchElement setText={setText} text={text} />
                        </div>
                            <div className='relative top-12 mr-8 flex  h-[48px] w-[150px] rounded-full bg-aliceBlue'>
                                <span className={`h-[48px] w-[48px] rounded-full bg-brightCelurean p-[16px]
                         text-white duration-300 hover:scale-110 ${FilterIcon}`} />
                                <select className="mt-1 h-10 
                                    cursor-pointer bg-aliceBlue p-2  text-sm leading-5  text-gray-800
                                   focus:outline-none" defaultValue='' onChange={(e) => setStatus(e.target.value)}>
                                    <option value='' disabled hidden >Status</option>
                                    <option value='1'>Active</option>
                                    <option value='0'>Inactive</option>
                                </select>
                        </div>
                        <div className='flex-initial'>
                            <button onClick={() => handleCreateClick(buttonNavigateUrl)}
                                className="relative top-12 mr-8 h-[48px] w-[220px] rounded-full 
                               bg-aliceBlue">
                                <div className="flex">
                                    <span className={`h-[48px] w-[48px] rounded-full bg-brightCelurean p-[15px]
                         text-white duration-300 hover:scale-110 ${buttonIcon}`} />
                                    <span className="py-3 pl-4 text-sm font-light text-black">
                                        {buttonDescription}</span>
                                </div>
                            </button>
                        </div>

                    </div>
                    :
                    <div></div>}</div>


        </div>
    );
};

export default MainBar;