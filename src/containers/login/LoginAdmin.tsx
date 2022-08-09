import React,{FC} from 'react';

import Login from 'components/Login';
// import { AuthenticationProps } from 'components/types';


const LoginAdmin:FC = () => {
    return (
        <div className="flex justify-center py-56">
            <Login ></Login>
        </div>
    );
};
export default LoginAdmin;