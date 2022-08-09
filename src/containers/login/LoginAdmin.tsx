import React,{FC} from 'react';

import { useAddLoginMutation } from 'services/api';
import Login from 'components/Login';

const LoginAdmin:FC = () => {

    const [addLogin] = useAddLoginMutation();
    
    return (
        <div className="flex justify-center py-56">
            <Login addLogin={addLogin}/>
        </div>
    );
};
export default LoginAdmin;