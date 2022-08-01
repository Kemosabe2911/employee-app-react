import React,{FC} from 'react';

import SignUpComponent from 'components/SignUpComponent';


const SignUp:FC = () => {
    return (
        <div className="flex justify-center py-48">
           <SignUpComponent></SignUpComponent>
        </div>
    );
};
export default SignUp;