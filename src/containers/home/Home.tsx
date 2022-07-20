import React,{FC} from 'react';
import CreateEmployee from 'components/CreateEmployee';

const Home:FC =()=>{
    return(
        <div className="w-full">
            
            <CreateEmployee/>
        </div>
    );
};

export default Home;