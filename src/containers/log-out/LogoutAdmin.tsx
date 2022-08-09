import React, { FC } from 'react';

import Logout from 'components/Logout';
import MainBar from 'components/MainBar';

const LogoutAdmin: FC = () => {
    return (
        <>
            <MainBar description='Log Out' buttonRequired={false}
                buttonDescription="nil" buttonIcon="nil"
                buttonNavigateUrl="nil"
                popUpRequired={false} 
                mainbarElementsRequired={false}/>
            <div className="w-[calc(100vw-350px)]  p-5">
                <Logout />
            </div>
        </>
    );
};
export default LogoutAdmin;