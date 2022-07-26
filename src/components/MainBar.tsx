import React, { FC} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MAIN_BAR_CONSTANTS as mainBarItem} from 'constants/mainBarItems';

const MainBar: FC = () => {

    const location = useLocation();
    let path= location.pathname;
    if(path=='/')
    {
        path='/create-employee';
    }

    const navigate=useNavigate();

    const handleCreateClick=(selectedPath)=>{
        navigate(selectedPath);
    };

    return (
        // <div className="static top-0 left-10 h-[160px] border-y-2 bg-white">
        <div className="sticky top-0 flex h-[150px] w-full flex-col flex-wrap gap-[500px] border-y-2 bg-white ">
            
            <div className="w-[400px] p-14 text-2xl font-semibold text-slate-700">{mainBarItem[path][0]}</div>
            {mainBarItem[path][1]?
            <button onClick={()=>handleCreateClick(mainBarItem[path][4])} 
            className="relative top-12 right-0 h-[48px] w-[259px] rounded-full
             bg-aliceBlue">
                <div className="flex">
                <span className={`h-[48px] w-[48px]
                 rounded-full bg-brightCelurean p-[15px] text-white ${mainBarItem[path][3]}`} />
                <span className="py-3 pl-7 text-base font-normal text-black">{mainBarItem[path][2]}</span>
                </div>
                </button>:<div></div>}
           
        </div>
    );

};
export default MainBar;