import React, { Suspense ,FC} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import RoutesPath from './RoutesPath';

import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUp';


const LoginLayout:FC = () => {

    // const {setAuthentication}= props;

    return (
        <div>
            <Suspense fallback="Loading">
                <Routes>
                <Route path={RoutesPath.LOGIN} element={<LoginPage/>} />
                <Route path={RoutesPath.SIGNUP} element={<SignUpPage/>} />
                    <Route
                        path={RoutesPath.ALL}
                        element={<Navigate replace={true} to={RoutesPath.LOGIN} />}
                    />
                </Routes>
            </Suspense>
        </div>
    );
};

export default LoginLayout;
