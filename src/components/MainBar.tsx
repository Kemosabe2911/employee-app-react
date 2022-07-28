import React, { FC } from 'react';
import {useNavigate } from 'react-router-dom';

import { MainBarInputField } from './types';


const MainBar: FC<MainBarInputField> = (props) => {

   const {description,buttonRequired,buttonDescription,buttonIcon,buttonNavigateUrl} =props;

    // const location = useLocation();
    // console.log(location, window);
    // const params = useParams();
    // console.log(params);
    
    // console.log(window.GetPar);
    
    // let path = location.pathname;
    // if (path == '/') {
    //     path = '/create-employee';
    // }
    // let match = useMatch({
    //     path: '/employee-details/stevin_2911',
    //     // end: true
    // })
    // console.log(match);
    // console.log(path);
    const navigate = useNavigate();

    const handleCreateClick = (selectedPath) => {
        navigate(selectedPath);
    };

    return (
        // <div className="static top-0 left-10 h-[160px] border-y-2 bg-white">
        <div className="sticky top-0 flex h-[150px] w-full flex-col flex-wrap gap-[500px] border-y-2 bg-white ">

            <div className="w-[400px] p-14 text-2xl font-semibold text-slate-700">{description}</div>
            {buttonRequired ?
                <button onClick={() => handleCreateClick(buttonNavigateUrl)}
                    className="relative top-12 right-0 h-[48px] w-[259px] rounded-full
             bg-aliceBlue">
                    <div className="flex">
                        <span className={`h-[48px] w-[48px]
                 rounded-full bg-brightCelurean p-[15px] text-white ${buttonIcon}`} />
                        <span className="py-3 pl-7 text-base font-normal text-black">{buttonDescription}</span>
                    </div>
                </button> : <div></div>}

        </div>
    );

};
export default MainBar;