import React, { FC } from 'react';

import { PopUpProps } from './types';
import { ICONS } from 'constants/icons';
import { useSelector } from 'react-redux';
import type { RootState } from 'store/store';

const PopUp: FC<PopUpProps> = ({ popUpStyle }) => {

    const { types, description } = useSelector((state: RootState) => state.popup);

    return (
        <div className={` absolute left-1/3 top-[88%] ${popUpStyle}
         h-16 w-[15%] min-w-[500px] rounded-xl border-2 ${types == 'failure' ?
                'border-rose-600 bg-red-50' : 'border-green-500 bg-green-100'} 
            animate-translateYaxis duration-1000`}>
            <div className=" py-4 text-center text-base">
                <span className={`${types == 'failure' ?
                    `${ICONS.error} ` : ''}  pr-3`}></span>{description}</div>
        </div>
    );
};

export default PopUp;
