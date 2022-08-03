import React from 'react';

import { useDispatch } from 'react-redux';
import { changeAuthentication } from 'store/reducers';
import Button from './Button';
import { useLazyGetLogoutQuery } from 'services/api';

const Logout = (props) => {


    const {setLogoutModal}=props;
    const dispatch = useDispatch();

    const [logout]= useLazyGetLogoutQuery();
   

    const handleLogout = () => {
        dispatch(changeAuthentication('false'));
        logout();
    };

    const handleCancel = () => {
       setLogoutModal(false);
    };
    return (
        <div className=" mx-auto mt-[15%] h-44 w-[25%] min-w-[400px] rounded-3xl bg-white shadow-xl">
            <div className="pt-10 text-center text-lg">Are you sure you want to log out?</div>
            <div className='flex pt-2'>
                <div className='w-1/2 flex-initial text-right'>
                    <Button type="submit" bgcolor='w-36 bg-brightCelurean' textcolor='text-white'
                        bghover='hover:bg-sky-400' text='Yes, Log out' border='bg-brightsCelurean'
                        onclick={handleLogout} />
                </div>
                <div className='w-1/2 flex-initial text-left'>
                    <Button type='button' bgcolor='w-36 bg-white' textcolor='text-black' text='Cancel'
                        border='border border-zinc-900 ' onclick={() => handleCancel()} />
                </div>
            </div>
        </div>
    );
};

export default Logout;
