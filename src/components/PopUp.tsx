import React, { FC } from 'react';

import { PopUpProps } from './types';

const PopUp: FC<PopUpProps> = ({ description, popUpStyle ,icon}) => {

    return (

        <div className={`${popUpStyle}  `}>
            <div className=" py-4 text-center text-base">
                <span className={`${icon} pr-3`}></span>{description}</div>
        </div>
    );
};

export default PopUp;