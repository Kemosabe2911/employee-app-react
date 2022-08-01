import React from 'react';

import PrivateLayout from 'routes/PrivateLayout';
import LoginLayout from 'routes/LoginLayout';
import { useSelector } from 'react-redux';
import type { RootState } from 'store/store';

const Layout =()=>{

const login = useSelector((state: RootState) => state.authentication.value);
localStorage.setItem('authentication',login);

if(localStorage.getItem('authentication')=='true')
    return(<PrivateLayout/>);
return(<LoginLayout/>);

};

export default Layout;