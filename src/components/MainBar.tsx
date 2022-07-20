import React,{FC} from 'react';
import { MainBarInputField } from './type';

const MainBar: FC <MainBarInputField> = (props) => {

    const {description} =props

    return(
        <div className=" w-[1496px] h-[140px] bg-white border-y-2">
            <div className="mt-[65px] ml-[40px] text-2xl font-semibold text-slate-700">{description}</div>
        </div>
    );

}
export default MainBar;