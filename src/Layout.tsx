import React from 'react';

import PrivateLayout from 'routes/PrivateLayout';
import LoginLayout from 'routes/LoginLayout';
import { useSelector } from 'react-redux';
import type { RootState } from 'store/store';

const Layout = () => {

    const login = useSelector((state: RootState) => state.authentication.value);
    localStorage.setItem('authentication', login);

    return (
        <>
            {localStorage.getItem('authentication') === 'true' ? (
                < PrivateLayout />
            ) : (
                < LoginLayout />)}
        </>);
};

export default Layout;