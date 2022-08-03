import React,{FC} from 'react';

import { PopUpProps } from './types';
// import { ErrorIcon } from 'assets/icons';

const PopUp: FC<PopUpProps> =({description,margin})=>{

const icon='fa fa-exclamation-circle'; 

    return(
        <div>
            <div className={` mx-auto ${margin} h-16 w-[15%] min-w-[400px] 
            rounded-xl border-2 border-rose-600 bg-red-50`}>

            <div className=" py-4 text-center text-base">
                <span className={`${icon} pr-3`}></span>{description}</div>            
        
    </div>
        </div>
    );
};

export default PopUp;