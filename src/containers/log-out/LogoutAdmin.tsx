import React, { FC } from 'react';

import { useLazyGetLogoutQuery } from 'services/api';
import Logout from 'components/Logout';
import MainBar from 'components/MainBar';

const LogoutAdmin: FC = () => {

    const [logout] = useLazyGetLogoutQuery();
    
    return (
        <><MainBar description='Log Out' buttonRequired={false}
            buttonDescription="nil" buttonIcon="nil"
            buttonNavigateUrl="nil"
            popUpRequired={false}></MainBar>
            <div className="w-[calc(100vw-350px)]  p-5">
                <Logout logout={logout}/>
            </div></>
    );
};
export default LogoutAdmin;