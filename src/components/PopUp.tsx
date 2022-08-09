import React, { FC } from 'react';

import { PopUpProps } from './types';
import { ICONS } from 'constants/icons';

const PopUp: FC<PopUpProps> = ({ description, popUpStyle }) => {

    return (
        <div className={`${popUpStyle}  mx-auto
            rounded-xl border-2 border-rose-600 bg-red-50`}>
            <div className=" py-4 text-center text-base">
                <span className={`${ICONS.popup} pr-3`}></span>{description}</div>
        </div>
    );
};

export default PopUp;