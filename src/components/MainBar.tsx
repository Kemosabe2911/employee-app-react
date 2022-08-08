import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MainBarInputField } from './types';
import { ICONS } from 'constants/icons';
import SearchElement from './SearchElement';
import PopUp from './PopUp';


const MainBar: FC<MainBarInputField> = (props) => {
    const { description, buttonRequired, buttonDescription, buttonIcon, buttonNavigateUrl, setStatus,setText,
        text,popUpRequired ,mainbarElementsRequired,
        } = props;

    const [popUpCreate, setPopUpCreate]=useState(false);

    const navigate = useNavigate();
    const handleCreateClick = (selectedPath) => {
        if(popUpRequired==true){
            setPopUpCreate(true);
        }
        navigate(selectedPath);
    };
   
    return (
        <div className=" flex h-[150px] w-full flex-col flex-wrap  border-y-2 bg-white ">
            <div className="w-[350px] p-14 text-2xl font-semibold text-slate-700">{description}</div>
            <div className="ml-auto pr-16">
                    <div className='flex w-[600px]'>
                    {mainbarElementsRequired ?
                    <>
                      <div className='relative top-12 mr-8 flex h-[48px] w-[150px] flex-initial
                         rounded-full bg-aliceBlue'>
                          <SearchElement setText={setText} text={text} />
                        </div>
                            <div className='relative top-12 mr-8 flex  h-[48px] w-[150px] rounded-full bg-aliceBlue'>
                                <span className={`h-[48px] w-[48px] rounded-full bg-brightCelurean p-[16px]
                         text-white duration-300 hover:scale-110 ${ICONS.filter}`} />
                                <select className="mt-1 h-10 
                                    cursor-pointer bg-aliceBlue p-2  text-sm leading-5  text-gray-800
                                   focus:outline-none" defaultValue='' onChange={(e) => setStatus(e.target.value)}>
                                    <option value='' disabled hidden >Status</option>
                                    <option value='1'>Active</option>
                                    <option value='0'>Inactive</option>
                                </select>
                        </div>
                    </>
                      :<> </>}
                       {buttonRequired? <div className='ml-auto flex-initial'>
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
                    :<></>
}
                    </div>
                    </div>

        {popUpCreate?(<div><PopUp description="CREATE DEPARTMENT" popUpStyle="mt-20 fixed inset-0 h-16 
                        w-[15%] min-w-[450px] border-rose-600 bg-red-50"></PopUp></div>):<></>}


        </div>
    );
};

export default MainBar;