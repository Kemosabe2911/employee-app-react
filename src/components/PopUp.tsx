import React, { FC } from 'react';

import { PopUpProps } from './types';

const PopUp: FC<PopUpProps> = ({ description, margin }) => {

    const icon = 'fa fa-exclamation-circle';
    return (
        <div className={`${margin}  mx-auto
            rounded-xl border-2 border-rose-600 bg-red-50`}>
            <div className=" py-4 text-center text-base">
                <span className={`${icon} pr-3`}></span>{description}</div>
        </div>
    );
};

export default PopUp;