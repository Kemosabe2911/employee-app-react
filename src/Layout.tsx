import React, { useEffect, useState } from 'react';

import PrivateLayout from 'routes/PrivateLayout';
import LoginLayout from 'routes/LoginLayout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from 'store/store';
import PopUp from 'components/PopUp';
import { changePopup } from 'store/popupReducer';

const Layout = () => {
    const dispatch = useDispatch();
    const login = useSelector((state: RootState) => state.authentication.value);
    localStorage.setItem('authentication', login);
    const types = useSelector((state: RootState) => state.popup.types);
    const [timelapsed,setTimeElapsed] = useState(false);
    let popUp;
    if(types && timelapsed)
      popUp=true;
    else
      popUp=false;

    useEffect(()=>{
        setTimeout(() => {
            setTimeElapsed(false);
            dispatch(changePopup({}));
          }, 5000);
        setTimeElapsed(true);
       
    },[types]);


    return (
        <>
          
            {localStorage.getItem('authentication') === 'true' ? (
              <>
              < PrivateLayout />
              {popUp && (
                <PopUp popUpStyle='ml-48'/>
            )}
              </>
                
            ) : (
              <>
                < LoginLayout />
                {popUp && (
                <PopUp popUpStyle='ml-16'/>
            )}
              </>
              )}
               
        </>);
};

export default Layout;