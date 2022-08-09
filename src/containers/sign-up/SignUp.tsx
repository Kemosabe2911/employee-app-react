import React,{FC} from 'react';

import { useAddSignUpMutation } from 'services/api';
import SignUpComponent from 'components/SignUpComponent';


const SignUp:FC = () => {

    const [addSignUp] = useAddSignUpMutation();

    return (
        <div className="flex justify-center py-48">
           <SignUpComponent addSignUp={addSignUp}/>
        </div>
    );
};
export default SignUp;