import React,{FC} from 'react';

import { useDispatch } from 'react-redux';
import {changeAuthentication} from 'store/reducers';
// import { LogoutIcon } from 'assets/icons/images';

const Logout:FC =()=>{

    const dispatch =useDispatch();

    const handleLogout=()=>{
        dispatch(changeAuthentication('false'));

    };
    return(
        <div className="mx-96 mt-24 h-56 w-[30%] min-w-[400px] rounded-3xl bg-white shadow-xl">
            
                <div className="pt-16 text-center text-lg">Are you sure you want to log out?</div>
                <button onClick={handleLogout} className="mx-[120px] mt-5 h-10 w-48 rounded-xl 
                 bg-brightCelurean text-white hover:bg-brightsCelurean">Yes, Log out</button>
                
            
        </div>
    );
};

export default Logout;
