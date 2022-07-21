import React, { FC } from 'react';
import { MainBarInputField } from './types';

const MainBar: FC<MainBarInputField> = (props) => {

    const { description } = props;

    return (
        <div className="h-[160px] w-[1496px] border-y-2 bg-white">
            <div className="mt-[65px] ml-[40px] text-2xl font-semibold text-slate-700">{description}</div>
        </div>
    );

};
export default MainBar;